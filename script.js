const products = [
  {
    name: "Pulparindo Tamarind Candy",
    category: "Candy",
    casePack: "24 ct case",
    image: "assets/products/pulparindo.jpg",
    description: "Classic Mexican tamarind pulp candy with a sweet, salty, and spicy flavor profile."
  },
  {
    name: "Cheetos Xtra Flamin Hot Mexico",
    category: "Snacks",
    casePack: "12 ct case",
    image: "assets/products/cheetos-flamin-hot.jpg",
    description: "Mexican Cheetos with an extra hot cheese flavor and strong shelf appeal."
  },
  {
    name: "Lucas Skwinkles Rellenos",
    category: "Candy",
    casePack: "12 ct case",
    image: "assets/products/skwinkles.jpg",
    description: "Tamarind flavored candy strips with a flavorful filling, popular with Mexican candy customers."
  },
  {
    name: "Lay's India Magic Masala",
    category: "Snacks",
    casePack: "12 ct case",
    image: "assets/products/lays-masala.png",
    description: "Indian Lay's potato chips seasoned with a bold masala spice blend."
  },
  {
    name: "Cheetos Poffs Cheese",
    category: "Snacks",
    casePack: "14 ct case",
    image: "assets/products/cheetos-poffs.jpg",
    description: "Crunchy cheese flavored Cheetos snack with imported-market packaging."
  },
  {
    name: "Lucas Polvos Candy Powder",
    category: "Candy",
    casePack: "10 ct case",
    image: "assets/products/lucas-polvos.jpg",
    description: "Mexican candy powder in assorted fruit and chamoy-style flavors."
  },
  {
    name: "Lay's Spanish Tomato Tango",
    category: "Snacks",
    casePack: "12 ct case",
    image: "assets/products/lays-tomato.webp",
    description: "Tomato flavored Lay's potato chips with a tangy international flavor profile."
  },
  {
    name: "Tostitos Xtra Flamin Hot",
    category: "Snacks",
    casePack: "10 ct case",
    image: "assets/products/tostitos-flamin-hot.jpeg",
    description: "Spicy tortilla chips with bold heat and eye-catching imported packaging."
  },
  {
    name: "Lay's West Indies Hot & Sweet Chili",
    category: "Snacks",
    casePack: "12 ct case",
    image: "assets/products/lays-west-indies.png",
    description: "Hot and sweet chili flavored Lay's chips with a unique international taste."
  },
  {
    name: "Parle Fab Strawberry Cookies",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/fab-strawberry.jpg",
    description: "Strawberry cream filled Hide & Seek Fab cookies from Parle."
  },
  {
    name: "Parle Fab Orange Cookies",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/fab-orange.jpg",
    description: "Orange cream filled cookie sandwiches with bright packaging and snack appeal."
  },
  {
    name: "Parle Fab Chocolate Cookies",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/fab-chocolate.jpg",
    description: "Chocolate cream filled Hide & Seek Fab cookies for retail snack shelves."
  },
  {
    name: "Parle Fab Vanilla Cookies",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/fab-vanilla.jpg",
    description: "Vanilla cream filled Fab cookies with imported-market packaging."
  },
  {
    name: "MTR Badam Drink",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/mtr-badam.jpg",
    description: "Indian almond dairy beverage with saffron flavor notes and real almond bits."
  },
  {
    name: "Mexican Fanta Orange Glass Bottle",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/fanta-orange.jpg",
    description: "Orange flavored Mexican Fanta in glass bottle packaging."
  },
  {
    name: "Gamesa Chokis Chocolate Chip Cookies",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/chokis.jpg",
    description: "Mexican chocolate chip cookies in retail-ready single pack format."
  },
  {
    name: "Thums Up Soda",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/thumbs-up.jpg",
    description: "Popular Indian cola-style soda with bold flavor and strong brand recognition."
  },
  {
    name: "Mexican Fanta Strawberry Glass Bottle",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/fanta-strawberry.webp",
    description: "Strawberry flavored Mexican Fanta in glass bottle packaging."
  },
  {
    name: "MTR Badam Rose Drink",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/mtr-badam-rose.jpg",
    description: "Rose flavored almond dairy beverage with smooth sweet flavor."
  },
  {
    name: "Limca Lemon Lime Soda",
    category: "Beverages",
    casePack: "24 ct case",
    image: "assets/products/limca.jpg",
    description: "Lemon-lime flavored Indian soda with a refreshing citrus profile."
  },
  {
    name: "Lotte Milkis Original",
    category: "Beverages",
    casePack: "30 ct case",
    image: "assets/products/milkis.png",
    description: "Korean milk and yogurt style carbonated beverage with a smooth creamy finish."
  },
  {
    name: "Marinela Gansito",
    category: "Snacks",
    casePack: "24 ct case",
    image: "assets/products/gansito.webp",
    description: "Mexican snack cake with cream filling, strawberry jelly, and chocolate coating."
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
    <div class="product-image-wrap">
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.onerror=null; this.src='assets/logo.png';" />
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
      <div class="modal-image-wrap">
        <img src="${product.image}" alt="${product.name}" class="modal-image" onerror="this.onerror=null; this.src='assets/logo.png';" />
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

renderProducts();
renderFeaturedProducts();
