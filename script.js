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
  },
  {
    name: "Sweet Heat Puffs",
    category: "Snacks",
    casePack: "18 ct case",
    label: "PUFFS",
    type: "pack",
    color: "linear-gradient(135deg, #fb7185, #f97316)",
    description: "Sweet and spicy puffed snacks for impulse snack displays."
  },
  {
    name: "Crunch Mix Party Bag",
    category: "Snacks",
    casePack: "8 ct case",
    label: "MIX",
    type: "pack",
    color: "linear-gradient(135deg, #7c3aed, #2563eb)",
    description: "Share-size crunchy snack mix for retailers and party sections."
  },
  {
    name: "BBQ Crunch Chips",
    category: "Snacks",
    casePack: "12 ct case",
    label: "BBQ",
    type: "pack",
    color: "linear-gradient(135deg, #92400e, #f97316)",
    description: "Smoky barbecue chips with classic snack aisle appeal."
  },
  {
    name: "Cheddar Puff Snacks",
    category: "Snacks",
    casePack: "18 ct case",
    label: "CHEDDAR",
    type: "pack",
    color: "linear-gradient(135deg, #f59e0b, #ea580c)",
    description: "Cheddar-style puff snacks for everyday retail sales."
  },
  {
    name: "Sour Gummy Belts",
    category: "Candy",
    casePack: "12 ct case",
    label: "SOUR",
    type: "pack",
    color: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    description: "Sour gummy belts with bright colors and strong candy shelf appeal."
  },
  {
    name: "Chamoy Gummy Mix",
    category: "Candy",
    casePack: "12 ct case",
    label: "GUMMY",
    type: "pack",
    color: "linear-gradient(135deg, #be123c, #f97316)",
    description: "Sweet and spicy chamoy-style gummy mix for specialty snack stores."
  },
  {
    name: "Rainbow Candy Bites",
    category: "Candy",
    casePack: "24 ct case",
    label: "CANDY",
    type: "pack",
    color: "linear-gradient(135deg, #06b6d4, #ec4899)",
    description: "Colorful candy bites for checkout counters and candy displays."
  },
  {
    name: "Chocolate Wafer Bars",
    category: "Candy",
    casePack: "24 ct case",
    label: "WAFER",
    type: "pack",
    color: "linear-gradient(135deg, #78350f, #f59e0b)",
    description: "Chocolate wafer bars packed for fast-moving retail sales."
  },
  {
    name: "Sweet Chili Lollipops",
    category: "Candy",
    casePack: "48 ct case",
    label: "POP",
    type: "pack",
    color: "linear-gradient(135deg, #ef4444, #facc15)",
    description: "Sweet and spicy lollipops for candy counters and novelty displays."
  },
  {
    name: "Fruit Jelly Cups",
    category: "Candy",
    casePack: "12 ct case",
    label: "JELLY",
    type: "pack",
    color: "linear-gradient(135deg, #10b981, #3b82f6)",
    description: "Fruit jelly cups with bright packaging and strong snack appeal."
  },
  {
    name: "Classic Cola Soda",
    category: "Beverages",
    casePack: "24 ct case",
    label: "COLA",
    type: "can",
    color: "linear-gradient(135deg, #991b1b, #ef4444)",
    description: "Classic cola-style canned beverage for coolers and drink shelves."
  },
  {
    name: "Mango Sparkling Drink",
    category: "Beverages",
    casePack: "24 ct case",
    label: "MANGO",
    type: "can",
    color: "linear-gradient(135deg, #f59e0b, #f97316)",
    description: "Mango flavored sparkling drink with bright tropical shelf appeal."
  },
  {
    name: "Watermelon Soda",
    category: "Beverages",
    casePack: "24 ct case",
    label: "MELON",
    type: "can",
    color: "linear-gradient(135deg, #16a34a, #ef4444)",
    description: "Watermelon soda for retailers looking for fruit-flavored drinks."
  },
  {
    name: "Grape Fizzy Drink",
    category: "Beverages",
    casePack: "24 ct case",
    label: "GRAPE",
    type: "can",
    color: "linear-gradient(135deg, #6d28d9, #a855f7)",
    description: "Grape flavored fizzy drink packed for cooler placement."
  },
  {
    name: "Strawberry Cream Soda",
    category: "Beverages",
    casePack: "24 ct case",
    label: "CREAM",
    type: "can",
    color: "linear-gradient(135deg, #ec4899, #f9a8d4)",
    description: "Creamy strawberry soda for snack shops and specialty retailers."
  },
  {
    name: "Peach Iced Tea",
    category: "Beverages",
    casePack: "12 ct case",
    label: "TEA",
    type: "bottle",
    color: "linear-gradient(135deg, #fb923c, #fef3c7)",
    description: "Peach iced tea beverage for bottled drink sections."
  }
];

const productGrid = document.getElementById("productGrid");
const featuredGrid = document.getElementById("featuredGrid");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

function productCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");

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
      <div class="product-cta">View wholesale details</div>
    </div>
  `;

  card.addEventListener("click", () => openProductModal(product));
  card.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProductModal(product);
    }
  });

  return card;
}

function renderProducts(category = "All") {
  if (!productGrid) return;

  productGrid.innerHTML = "";

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(product => product.category === category);

  filteredProducts.forEach(product => {
    productGrid.appendChild(productCard(product));
  });
}

function renderFeaturedProducts() {
  if (!featuredGrid) return;

  featuredGrid.innerHTML = "";
  products.slice(0, 8).forEach(product => {
    featuredGrid.appendChild(productCard(product));
  });
}

function openProductModal(product) {
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-product">
      <div class="product-art" style="background:${product.color}">
        <div class="${product.type}" data-label="${product.label}" style="background:${product.color}"></div>
      </div>

      <div class="modal-info">
        <span class="eyebrow">${product.category}</span>
        <h2>${product.name}</h2>
        <p>${product.description}</p>

        <div class="modal-details">
          <div><strong>Category</strong><span>${product.category}</span></div>
          <div><strong>Case Pack</strong><span>${product.casePack}</span></div>
          <div><strong>Pricing</strong><span>Available upon request</span></div>
          <div><strong>Wholesale</strong><span>B2B buyers only</span></div>
        </div>

        <a class="button primary" href="mailto:sales@bulkmunchies.com?subject=Wholesale Inquiry - ${encodeURIComponent(product.name)}">
          Request Pricing
        </a>
      </div>
    </div>
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.filter);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal && modal.classList.contains("open")) {
    closeModal();
  }
});

if (document.getElementById("productGrid")) {
  renderProducts();
}

if (document.getElementById("featuredGrid")) {
  renderFeaturedProducts();
}
