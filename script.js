const products = [
  {
    name: "Spicy Crunch Chips",
    category: "Snacks",
    casePack: "12 ct case",
    label: "CHIPS",
    type: "pack",
    color: "linear-gradient(135deg, #ef233c, #ff8a00)",
    description: "Bold spicy chips packed for retail shelves and snack shops."
  },
  {
    name: "Loaded Nacho Chips",
    category: "Snacks",
    casePack: "12 ct case",
    label: "NACHO",
    type: "pack",
    color: "linear-gradient(135deg, #f97316, #ffd84d)",
    description: "Cheesy nacho-style chips with strong shelf appeal."
  },
  {
    name: "Chili Lime Rings",
    category: "Snacks",
    casePack: "24 ct case",
    label: "LIME",
    type: "pack",
    color: "linear-gradient(135deg, #22c55e, #facc15)",
    description: "Tangy chili lime snack rings for bold flavor customers."
  },
  {
    name: "Hot Corn Sticks",
    category: "Snacks",
    casePack: "24 ct case",
    label: "HOT",
    type: "pack",
    color: "linear-gradient(135deg, #dc2626, #7c2d12)",
    description: "Crunchy corn sticks with a hot seasoning profile."
  }
];

const productGrid = document.getElementById("productGrid");
const featuredGrid = document.getElementById("featuredGrid");

function productCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-art" style="background:${product.color}">
      <div class="${product.type}" data-label="${product.label}" style="background:${product.color}"></div>
    </div>
    <div class="product-body">
      <h3>${product.name}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-meta">
        <span>${product.category}</span>
        <span>${product.casePack}</span>
      </div>
    </div>
  `;

  return card;
}

if (productGrid) {
  products.forEach(product => productGrid.appendChild(productCard(product)));
}

if (featuredGrid) {
  products.forEach(product => featuredGrid.appendChild(productCard(product)));
}
