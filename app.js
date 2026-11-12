(()=>{
const EMAIL='help@bulkmunchies.com',CDN='https://cdn.faire.com/fastly/';
// Columns: token, name, category, origin, order quantity, wholesale/unit, retail/unit, image, selling method.
const R=[
['k64ubne32d','2PM Cheese Balls 60gx12','Puffed Snack','Nepal',12,2.19,4.99,'dc4ab15a2a4a5457ca339f154a93a140af98cba5e06b35f9aa70e54fbb0474b4.png'],
['xgprbgxaq4','2PM Chicken Bhujiya 50gx12','Chips','Nepal',12,1.79,3.99,'e62dcc5315f0a986bc8e3ce33cf1acc2c5540be10fc4ea8cc49f099e85366fc3.png'],
['yddhe9nzs8','2PM Fire Balls 60gx12','Chips','Nepal',12,2.19,4.99,'27f708ce03d70b9031df4b87f34f21af48ca00dfd867ea9f42285c881ef2ba01.png'],
['ffeu329xxf','Cadbury Clinkers Pascall 160Gx12','Chocolate','Australia',12,10.99,21.99,'3fd57221c6b1a74e5aab8f669ea954264850e7ff460a8c671ea8d909a7d4a569.jpeg'],
['yv6ey393dg','Donsuemor Traditional Madeleines 28OZx6','Cookie','United States',6,16,28,'84e7110cd7d1081d643619d7528f7362121b25d517edd2f463de912161512b1c.jpeg'],
['6pvmckacak','Fanta Soda 300mlx12','Soda','Origin to be confirmed',12,1.99,3.99,'6dad6dc87afecf14c69f81fee517a8ebd82f67765bd20d651a57db1ba719d683.jpeg'],
['adjbjm32nx','Frooti Mango Drink 7OZ x 12','Juice','India',12,.75,1.50,'997398fca9384bf77f214b6236d62e17d4375876b19f13378ece07b21900e5f9.jpeg'],
['y44ssxj2ny','Kurkure Chili Chatka 74Gx12','Chips','India',12,2.19,4.98,'assets/products/03-kurkure-chili-chatka-74gx12.webp'],
['3snkq784sc','Kurkure Masala Munch 80Gx12','Chips','India',12,2.19,4.98,'assets/products/04-kurkure-masala-munch-80gx12.webp'],
['n867x5c7ds','Lays American Cream & Onion 52Gx12','Chips','India',12,2.19,4.98,'assets/products/05-lays-american-cream-onion-52gx12.webp'],
['6secnupmk3','Lays Chile Limon 52Gx12','Chips','India',12,2.19,4.98,'assets/products/06-lays-chile-limon-52gx12.webp'],
['sp676jg79k','Lays Magic Masala 52Gx12','Chips','India',12,2.19,4.98,'assets/products/07-lays-magic-masala-52gx12.webp'],
['mjbsbu3bdj','Lays Sizzling Hot 52Gx12','Chips','India',12,2.19,4.98,'assets/products/08-lays-sizzling-hot-52gx12.webp'],
['qw8788xs6j','Lays Spanish Tomato Tango 52Gx12','Chips','India',12,2.19,4.98,'assets/products/09-lays-spanish-tomato-tango-52gx12.webp'],
['3qqwbv3tpg','Lays West Indies Hot N Sweet Chilli 50Gx12','Chips','India',12,2.19,4.98,'assets/products/10-lays-west-indies-hot-n-sweet-chilli-50gx12.webp'],
['9wms5bgag9','Master Potato Barbecue Flavored Potato Chips 160gx14','Chips','Turkey',14,4.09,6.49,'de075e62deb8be6b650ad4bcb35577a67605bb0fe37ea0629c15c69f594ffe05.jpeg'],
['k3egpzmtac','Master Potato Hot & Spicy Potato Chips 160gx14','Chips','Turkey',14,4.09,6.49,'c2b4f15e3bb6c3a914ac47d2de7cd58f50f06490d920c30963d6d555443bb150.jpeg'],
['m2q3dtuf3f','Master Potato Onion & Sour Cream Chips 160gx14','Chips','Turkey',14,4.09,6.49,'4029eee2834a65555f101612bd396b34f8cc46101f2be6e2ae417b11ad351b92.jpeg'],
['mfmdgfyzsx','Master Potato Sriracha Potato Chips 160gx14','Chips','Turkey',14,4.09,6.49,'3bb19740777f00c0b922d3658831a7edc6d6743e1ecba8c4a2ffc3f6407bd81b.webp'],
['28s8pnsbqp','Master Potato Vegetable Potato Chips 160gx14','Chips','Turkey',14,4.09,6.49,'90ff79f6fbd369fad2fa2290492ab8ca9cf2d7b8b7ee4f4f3c8185b3a7247dfe.jpeg'],
['deeabmg893','Nimco’s Chili Ringz 100gx12','Puffed Snack','Pakistan',12,2.19,4.99,'eb81496803c9a626b82eb54cc85a781a4ba168cb2385a64052f0b8c37340aa8e.png'],
['s99wvzb5zp','Oreo Pistach-YO Cookie 34gx12','Cookie','United Arab Emirates',12,2.66,4.50,'assets/products/29-oreo-pistach-yo-cookie-34gx12.webp'],
['rxq7wss7s7','Pakola Lychee 500mlx6','Soda','Pakistan',6,2.49,4.99,'2fb8452331affd171055b2ad4d6e75f162194616b47cecbfb04742c871c2bc67.jpeg'],
['nhf56xvpx2','Pakola Soft Drink 8OZ','Soda','Pakistan',12,2.49,4.98,'assets/products/11-pakola-soft-drink-8oz.webp','item'],
['2gjax3fyza','Parle Hide & Seek Cafe Mocha Cookies 115gx12','Cookie','India',12,1.99,3.99,'ebc3d7971f6bffd90f169508b75990da3dd79da362a772ceb4e3f6d3963f0f74.jpeg'],
['4sftrgrdej','Parle Hide & Seek Chocolate Chip Cookies 115gx12','Cookie','India',12,1.99,3.99,'eab25f8a8920cbf8e41df2403ecceb3ee25ce90029684924a91cdc6dc2732fce.jpeg'],
['aa9ysdf35d','Parle Hide & Seek Fab Chocolate Cookies 100gx12','Cookie','India',12,1.99,3.99,'3eeee0fe337d70834d7b3980d9ca3b8a2f9c4724a725bf99c60bf242c2bd4c75.jpeg'],
['4g8neftpq3','Parle Hide & Seek Fab Orange 100gx12','Cookie','India',12,1.99,3.99,'08b1294220bdd4f9f11eb95fa4f28e5832435be83d99ac790ccce9646e2ced4c.jpeg'],
['73nbma36ym','Parle Hide & Seek Fab Strawberry 100gx12','Cookie','India',12,1.99,3.99,'15cbd1beac7faade558678167910fa89c9a152dfc6a66149991d219a45b8bb85.jpeg'],
['tnrs6nr2mg','Parle Hide & Seek Fab Vanilla 100gx12','Cookie','India',12,1.99,3.99,'6dfe7654a8a095754f0c515ee979753314bc0aeb5f825c0eac2066a5e2631f16.jpeg'],
['ebev92kf3m','Parle-G Gluco Biscuits 56gx12','Cookie','India',12,.55,.99,'150478bc2ba9405f310c5d0c0a345e4bbfe83411495ace2761f8e8486acfe2f3.jpeg'],
['3q9pcfmmvy','Royal Family Mochi - Strawberry Cheese Cake 180gX12','Mochi','Taiwan',12,3.99,6.49,'assets/products/12-royal-family-mochi-strawberry-cheese-cake-180gx12.webp'],
['nshpwjkpy7','Royal Family Mochi - Chocolate 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/13-royal-family-mochi-chocolate-180gx12.webp'],
['ph3jakrwsm','Royal Family Mochi - Creamy Coconut 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/14-royal-family-mochi-creamy-coconut-180gx12.webp'],
['8uqn95xkz2','Royal Family Mochi - Maple Pancake 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/15-royal-family-mochi-maple-pancake-180gx12.webp'],
['kp2ybsk6bx','Royal Family Mochi - Mint Chocolate Chip 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/16-royal-family-mochi-mint-chocolate-chip-180gx12.webp'],
['pjmngbp3ug','Royal Family Mochi - Peanut Butter 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/17-royal-family-mochi-peanut-butter-180gx12.webp'],
['y7zxpesmdu','Royal Family Mochi - Salted Caramel 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/18-royal-family-mochi-salted-caramel-180gx12.webp'],
['htf3pzaf6k','Royal Family Mochi - Tiramisu & Creme 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/19-royal-family-mochi-tiramisu-creme-180gx12.webp'],
['hdfku282dv','Royal Family Mochi - Vanilla Creme 180Gx12','Mochi','Taiwan',12,3.99,6.49,'assets/products/20-royal-family-mochi-vanilla-creme-180gx12.webp'],
['t6n6nra8a4','Snickers Coffee Chocolate Bar 44gx24','Chocolate','Australia',24,3.16,5.99,'assets/products/30-snickers-coffee-chocolate-bar-44gx24.webp'],
['t7jcdjzhgx','Sting Energy Berry Blast 250mlx12','Energy Drink','Pakistan',12,2.99,4.99,'e2ebd38b3e9bf383e9794c99899284a6534db3fb5a0902a4ea45513fad6eb0e7.jpeg'],
['rgzywescd8','Thums Up Soda 300mlx12','Soda','India',12,1.99,3.99,'5e19de1051095e76c725325fdf1d11a611d3f9f091fa646272cebea36fb2f86d.jpeg'],
['6t6h7nk25w','Tiger Chilli and Lemon Flavored Chips 90Gx12','Chips','Egypt',12,3.29,5.99,'assets/products/21-tiger-chilli-and-lemon-flavored-chips-90gx12.webp'],
['un8p7e5gvk','Tiger Chips - Seasoned Cheese 90gx12','Chips','Egypt',12,3.29,5.99,'assets/products/22-tiger-chips-seasoned-cheese-90gx12.webp'],
['cbxams6v7w','Tiger Chips - Tomato flavor 90gx12','Chips','Egypt',12,3.29,5.99,'assets/products/23-tiger-chips-tomato-flavor-90gx12.webp'],
['ph9bjhdy3a','Tiger Chips Kebab Flavor Egypt 90gx12','Chips','Egypt',12,3.29,5.99,'assets/products/24-tiger-chips-kebab-flavor-egypt-90gx12.webp'],
['rpn2b57sa2','Tiger Chips Paprika Flavored Chips 90gx12','Chips','Egypt',12,3.29,5.99,'assets/products/25-tiger-chips-paprika-flavored-chips-90gx12.webp'],
['kdpn6wk4q2','Tiger Excellence Thai Sweet Chili Chips 80Gx10','Chips','Egypt',10,3.29,5.99,'assets/products/26-tiger-excellence-thai-sweet-chili-chips-80gx10.webp'],
['s9234w6mvj','Tiger Kettle Dill Pickle & White Cheese 90gx10','Chips','Egypt',10,3.29,5.99,'assets/products/27-tiger-kettle-dill-pickle-white-cheese-90gx10.webp'],
['9mzwq3nmsa','Tiger Kettle Prime Glazed Ribs 90gx10','Chips','Egypt',10,3.29,5.99,'assets/products/28-tiger-kettle-prime-glazed-ribs-90g-10.webp'],
['sr5fj48dua','Twix Tiramisu Chocolate Bar 46gx24','Chocolate','United Arab Emirates',24,3.16,5.99,'assets/products/31-twix-tiramisu-chocolate-bar-46gx24.webp']
];
const P=R.map(r=>({id:r[0],name:r[1],cat:r[2],origin:r[3],pack:r[4],unit:r[5],retail:r[6],img:r[7].startsWith('assets/')?r[7]:CDN+r[7],item:r[8]==='item',case:Math.round(r[4]*r[5]*100)/100}));
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const $=id=>document.getElementById(id),money=n=>'$'+n.toFixed(2),esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const margin=p=>((p.retail-p.unit)/p.retail*100).toFixed(1)+'%',orderLabel=p=>p.item?(p.pack===1?'unit':'minimum order of '+p.pack+' units'):'case of '+p.pack;
let cat='',cart={};
try{const stored=JSON.parse(localStorage.getItem('bm-quote-v2')||'{}');for(const [id,q] of Object.entries(stored)){if(byId[id]&&Number.isSafeInteger(q)&&q>0)cart[id]=q}}catch(e){}
const save=()=>{try{localStorage.setItem('bm-quote-v2',JSON.stringify(cart))}catch(e){}drawCart()};
$('sP').textContent=P.length;$('sC').textContent=new Set(P.filter(p=>p.origin!=='Origin to be confirmed').map(p=>p.origin)).size;$('yr').textContent=new Date().getFullYear();
const minimum=document.querySelector('.stats div:last-child dd');if(minimum)minimum.textContent='Varies by item';
const lead=document.querySelector('.lead');if(lead)lead.textContent="Imported chips, mochi, chocolate and drinks for your shelves. Clear wholesale pricing, suggested retail and margins on every item. Most products have a one-case minimum; item-order exceptions are shown below.";
const sub=document.querySelector('#shop .sub');if(sub)sub.textContent='Case pricing for case orders. Items sold individually show unit pricing and their minimum order. Build a quote here or order on Faire.';
const heroCaptions=document.querySelectorAll('.hero-stack figcaption span');if(heroCaptions[0])heroCaptions[0].textContent='$26.28 / case';if(heroCaptions[2])heroCaptions[2].textContent='$2.49 / unit · min. 12';
const cats=[...new Set(P.map(p=>p.cat))];
function drawCats(){$('cats').innerHTML=[['','All products',P.length],...cats.map(c=>[c,c,P.filter(p=>p.cat===c).length])].map(([c,l,n])=>`<button type="button" class="cat glass" data-cat="${esc(c)}" aria-pressed="${cat===c}"><b>${esc(l)}</b><small>${n} item${n!==1?'s':''}</small></button>`).join('')}
$('og').innerHTML+=[...new Set(P.map(p=>p.origin))].sort().map(o=>`<option>${esc(o)}</option>`).join('');
function render(){const q=$('q').value.trim().toLowerCase(),o=$('og').value,s=$('so').value;let l=P.filter(p=>(!cat||p.cat===cat)&&(!o||p.origin===o)&&(p.name+' '+p.cat+' '+p.origin).toLowerCase().includes(q));l.sort((a,b)=>s==='l'?a.case-b.case:s==='h'?b.case-a.case:a.name.localeCompare(b.name));$('count').textContent=`Showing ${l.length} of ${P.length} products`;$('grid').innerHTML=l.length?l.map(p=>`<article class="p glass"><button type="button" class="im" data-show="${p.id}" aria-label="View ${esc(p.name)}"><span class="tg">${esc(p.cat)}</span><img loading="lazy" decoding="async" src="${p.img}" alt="${esc(p.name)}" width="400" height="400"></button><div class="bd"><h3>${esc(p.name)}</h3><div class="meta">${p.item?'Sold individually · minimum '+p.pack+' unit'+(p.pack>1?'s':''):p.pack+' per case'} · ${money(p.unit)}/unit · ${esc(p.origin)}</div><div class="pr">${money(p.item?p.unit:p.case)} <small>/ ${p.item?'unit':'case'}</small></div><div class="meta">Suggested retail ${money(p.retail)} / unit</div><div class="meta">Retail gross margin ${margin(p)}</div>${p.item&&p.pack>1?`<div class="meta">Minimum order total ${money(p.case)}</div>`:''}<button type="button" class="btn btn-glass btn-sm" data-add="${p.id}">Add ${p.item?(p.pack===1?'unit':p.pack+' units'):'case'} to quote</button></div></article>`).join(''):'<p class="empty">No matches. Try another search or filter.</p>'}
function openDrawer(o){$('dr').classList.toggle('open',o);$('dr').setAttribute('aria-hidden',String(!o));$('scrim').classList.toggle('on',o);if(o)$('closeQuote').focus()}
function add(id){if(!byId[id])return;cart[id]=(cart[id]||0)+1;save();openDrawer(true)}
function change(id,d){if(!byId[id])return;cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];save()}
function drawCart(){let n=0,t=0;const h=Object.entries(cart).map(([id,q])=>{const p=byId[id];if(!p)return'';n+=q;t+=q*p.case;return `<div class="ci"><img src="${p.img}" alt=""><div class="nm"><b>${esc(p.name)}</b><br><span>${p.item?q*p.pack+' units':q+' case(s)'} · ${money(q*p.case)}</span><br><small>${money(p.unit)} / unit · ${esc(orderLabel(p))}</small></div><div class="qt"><button type="button" data-chg="${id}" data-d="-1" aria-label="Remove one ${p.item?'minimum order':'case'}">−</button><span>${q}</span><button type="button" data-chg="${id}" data-d="1" aria-label="Add one ${p.item?'minimum order':'case'}">+</button></div></div>`}).join('');$('it').innerHTML=h||'<p>Your quote is empty. Add products from the catalog.</p>';$('qc').textContent=n;$('tt').textContent=money(t)}
function showProduct(id){const p=byId[id];if(!p)return;$('mi').src=p.img;$('mi').alt=p.name;$('mt').innerHTML=`<h3>${esc(p.name)}</h3><p>${esc(p.cat)} · ${p.origin==='Origin to be confirmed'?'Origin to be confirmed':'Made in '+esc(p.origin)}</p><div class="pr">${money(p.item?p.unit:p.case)} <small>/ ${p.item?'unit':'case of '+p.pack}</small></div><p>${money(p.unit)} wholesale per unit · suggested retail ${money(p.retail)} per unit</p><p>Retail gross margin ${margin(p)}, before shipping, fees and other expenses.</p><p>Minimum: ${p.item?p.pack+' unit(s)':'1 case ('+p.pack+' units)'}. Minimum order total: ${money(p.case)}.</p><p>Availability and shipping are confirmed when we reply to your quote.</p><button type="button" class="btn btn-y" data-add="${id}" data-close="1">Add ${p.item?(p.pack===1?'unit':p.pack+' units'):'case'} to quote</button>`;$('md').classList.add('open');$('closeModal').focus()}
const closeModal=()=>$('md').classList.remove('open');
async function send(subject,data,el,ok){el.className='status';el.textContent='Sending...';try{const r=await fetch('https://formsubmit.co/ajax/'+EMAIL,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.assign({_subject:subject,_captcha:'false',_template:'table'},data))});const j=await r.json();if(r.ok&&String(j.success)!=='false'){el.className='status ok';el.textContent=ok;return true}throw new Error('fail')}catch(e){el.className='status err';el.textContent='Could not send. Please email '+EMAIL+' directly.';return false}}
async function sendQuote(){const el=$('qs');if(!Object.keys(cart).length){el.className='status err';el.textContent='Add items to your quote first.';return}const b=$('qb').value.trim(),em=$('qe').value.trim();if(!b||!/^\S+@\S+\.\S+$/.test(em)){el.className='status err';el.textContent='Please enter your business name and a valid email.';return}let t=0;const lines=Object.entries(cart).map(([id,q])=>{const p=byId[id];t+=q*p.case;return p.name+' ['+id+']: '+(p.item?q*p.pack+' units':q+' case(s), '+q*p.pack+' units')+' @ '+money(p.unit)+'/unit; line total '+money(q*p.case)});if(await send('Quote request: '+b,{Business:b,email:em,Items:lines.join('\n'),Estimated_total:money(t)},el,'Quote sent. We will reply by email.')){cart={};save()}}
document.addEventListener('click',e=>{const t=e.target.closest('[data-cat],[data-add],[data-show],[data-chg]');if(!t)return;if(t.dataset.cat!==undefined){cat=t.dataset.cat;drawCats();render()}else if(t.dataset.add!==undefined){if(t.dataset.close)closeModal();add(t.dataset.add)}else if(t.dataset.show!==undefined)showProduct(t.dataset.show);else if(t.dataset.chg!==undefined)change(t.dataset.chg,+t.dataset.d)});
$('openQuote').onclick=()=>openDrawer(true);$('closeQuote').onclick=()=>openDrawer(false);$('scrim').onclick=()=>openDrawer(false);$('closeModal').onclick=closeModal;$('md').onclick=e=>{if(e.target===$('md'))closeModal()};document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();openDrawer(false)}});$('sendQuote').onclick=sendQuote;
$('af').onsubmit=async e=>{e.preventDefault();const f=e.target;if(!f.checkValidity()){$('as').className='status err';$('as').textContent='Please fill in business name, your name and a valid email.';return}const d=Object.fromEntries(new FormData(f));if(await send('Wholesale application: '+d.Business,d,$('as'),'Thanks. We received your application and will be in touch.'))f.reset()};
['q','og','so'].forEach(i=>$(i).addEventListener('input',render));drawCats();render();drawCart();
})();
