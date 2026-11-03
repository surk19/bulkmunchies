"""Pull live products from Faire and rewrite the catalog in index.html.
Reads FAIRE_ACCESS_TOKEN from the environment. Never prints it."""
import ast, json, os, re, sys, urllib.request

TOKEN = os.environ.get("FAIRE_ACCESS_TOKEN", "").strip()
if not TOKEN:
    sys.exit("FAIRE_ACCESS_TOKEN is not set")
API = "https://www.faire.com/external-api/v2/products"
CDN = "https://cdn.faire.com/fastly/"
COUNTRIES = {"USA": "United States", "IND": "India", "PAK": "Pakistan", "AUS": "Australia",
             "EGY": "Egypt", "TWN": "Taiwan", "ARE": "United Arab Emirates", "JPN": "Japan",
             "KOR": "South Korea", "CHN": "China", "THA": "Thailand", "GBR": "United Kingdom",
             "MEX": "Mexico", "CAN": "Canada", "TUR": "Turkey", "VNM": "Vietnam", "PHL": "Philippines",
             "IDN": "Indonesia", "MYS": "Malaysia", "DEU": "Germany", "ITA": "Italy", "FRA": "France",
             "ESP": "Spain", "NLD": "Netherlands", "BEL": "Belgium", "SAU": "Saudi Arabia",
             "LBN": "Lebanon", "BRA": "Brazil", "SGP": "Singapore", "HKG": "Hong Kong"}

def get(page):
    req = urllib.request.Request(f"{API}?limit=250&page={page}",
                                 headers={"X-FAIRE-ACCESS-TOKEN": TOKEN, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)

products, page = [], 1
while True:
    batch = get(page).get("products", [])
    products += batch
    if len(batch) < 250:
        break
    page += 1

rows = []
for p in products:
    if p.get("lifecycle_state") != "PUBLISHED" or p.get("sale_state") != "FOR_SALE":
        continue
    v = next((v for v in p.get("variants", []) if v.get("sale_state") == "FOR_SALE"), None)
    if not v or not v.get("wholesale_price_cents"):
        continue
    imgs = sorted(p.get("images") or v.get("images") or [], key=lambda i: i.get("sequence", 0))
    img = imgs[0]["url"] if imgs else ""
    img = img[len(CDN):] if img.startswith(CDN) else img
    name = re.sub(r"\s+", " ", p["name"]).strip().rstrip(",")
    code = p.get("made_in_country") or ""
    rows.append([name, (p.get("taxonomy_type") or {}).get("name", "Other"),
                 COUNTRIES.get(code, code or "Other"), max(int(p.get("unit_multiplier") or 1), int(p.get("minimum_order_quantity") or 1)),
                 v["wholesale_price_cents"] / 100, (v.get("retail_price_cents") or 0) / 100, img])
rows.sort(key=lambda r: r[0].lower())
if not rows:
    sys.exit("Faire returned no live products; leaving the site unchanged")

path = os.path.join(os.path.dirname(__file__), "..", "index.html")
html = open(path, encoding="utf-8").read()
m = re.search(r"^const R=(.*);$", html, re.M)
if not m:
    sys.exit("Could not find the catalog line in index.html")
if ast.literal_eval(m.group(1)) == rows:
    print(f"No changes ({len(rows)} products)")
    sys.exit(0)
fmt = lambda x: repr(x) if not isinstance(x, float) else (str(int(x)) if x.is_integer() else repr(x))
line = "const R=[" + ",".join("[" + ",".join(fmt(x) for x in r) + "]" for r in rows) + "];"
html = html[:m.start()] + line + html[m.end():]
open(path, "w", encoding="utf-8").write(html)
print(f"Updated catalog: {len(rows)} products")
