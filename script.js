// ===============================
// CONFIG
// ===============================
const WHATSAPP_NUMBER = "SEU_NUMERO_AQUI"; // você vai trocar depois
const WHATSAPP_BASE = "https://wa.me/";
const ITEMS_PER_PAGE = 8;

// ===============================
// MOCK DE PRODUTOS (troque tudo)
// ===============================
const products = [
  {
    id: 1,
    name: "Brinco Dourado Minimal",
    price: 59.9,
    img: "assets/p1.jpg",
    desc: "Brinco minimalista com acabamento premium. Leve, elegante e perfeito para o dia a dia.",
  },
  {
    id: 2,
    name: "Colar Ponto de Luz",
    price: 79.9,
    img: "assets/p2.jpg",
    desc: "Colar delicado com ponto de luz. Um clássico que combina com tudo.",
  },
  {
    id: 3,
    name: "Anel Ajustável Slim",
    price: 49.9,
    img: "assets/p3.jpg",
    desc: "Anel ajustável com design slim. Minimalista e fácil de combinar.",
  },
  {
    id: 4,
    name: "Pulseira Fina Lux",
    price: 69.9,
    img: "assets/p4.jpg",
    desc: "Pulseira fina com brilho discreto e acabamento sofisticado.",
  },
  {
    id: 5,
    name: "Brinco Argolinha",
    price: 39.9,
    img: "assets/p5.jpg",
    desc: "Argolinha pequena com visual clean. O básico que sempre funciona.",
  },
  {
    id: 6,
    name: "Colar Camadas",
    price: 89.9,
    img: "assets/p6.jpg",
    desc: "Colar em camadas com presença na medida. It girl sem exagero.",
  },
  {
    id: 7,
    name: "Anel Detalhe Textura",
    price: 54.9,
    img: "assets/p7.jpg",
    desc: "Textura sutil para elevar o look. Ajuste confortável.",
  },
  {
    id: 8,
    name: "Pulseira Elo Delicado",
    price: 64.9,
    img: "assets/p8.jpg",
    desc: "Elo delicado, acabamento premium. Perfeita pra usar sozinha ou com mix.",
  },

  // mais pra testar paginação
  {
    id: 9,
    name: "Brinco Pérola Chic",
    price: 52.9,
    img: "assets/p9.jpg",
    desc: "Pérola com estética moderna. Elegante e atual.",
  },
  {
    id: 10,
    name: "Colar Medalha",
    price: 74.9,
    img: "assets/p10.jpg",
    desc: "Medalha minimalista com brilho suave. Presença sutil.",
  },
  {
    id: 11,
    name: "Anel Torcido",
    price: 57.9,
    img: "assets/p11.jpg",
    desc: "Design torcido com acabamento clean. Ajustável.",
  },
  {
    id: 12,
    name: "Pulseira Pedrinha",
    price: 62.9,
    img: "assets/p12.jpg",
    desc: "Pedrinha discreta e sofisticada. Ideal para looks leves.",
  },
];

// ===============================
// HELPERS
// ===============================
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function encodeMsg(str) {
  return encodeURIComponent(str);
}

function getWhatsLink(message) {
  const number = (WHATSAPP_NUMBER || "").replace(/\D/g, "");
  return `${WHATSAPP_BASE}${number}?text=${encodeMsg(message)}`;
}

function buildCartMessage(items) {
  // mensagem com produtos + total
  let lines = ["Olá! Quero comprar os seguintes itens da Use Luume:", ""];
  let total = 0;

  items.forEach((item) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    lines.push(`• ${item.name} (x${item.qty}) - ${formatBRL(subtotal)}`);
  });

  lines.push("");
  lines.push(`Total: ${formatBRL(total)}`);
  lines.push("");
  lines.push("Pode confirmar disponibilidade e formas de pagamento?");

  return lines.join("\n");
}

// ===============================
// ELEMENTS
// ===============================
const yearEl = document.getElementById("year");
const productsGrid = document.getElementById("productsGrid");

const productDrawer = document.getElementById("productDrawer");
const drawerClose = document.getElementById("drawerClose");
const drawerTitle = document.getElementById("drawerTitle");
const drawerImage = document.getElementById("drawerImage");
const drawerPrice = document.getElementById("drawerPrice");
const drawerDesc = document.getElementById("drawerDesc");
const drawerAddToCart = document.getElementById("drawerAddToCart");
const drawerBuyNow = document.getElementById("drawerBuyNow");

const cartBtn = document.getElementById("cartBtn");
const cartPanel = document.getElementById("cartPanel");
const cartClose = document.getElementById("cartClose");
const cartItemsEl = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const cartCheckout = document.getElementById("cartCheckout");
const cartClear = document.getElementById("cartClear");

const pagePrev = document.getElementById("pagePrev");
const pageNext = document.getElementById("pageNext");
const pageNumbers = document.getElementById("pageNumbers");

const contactWhats = document.getElementById("contactWhats");

// Carousel
const carouselImgs = Array.from(document.querySelectorAll(".carousel-img"));
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

// ===============================
// STATE
// ===============================
let cart = []; // {id, name, price, qty}
let currentPage = 1;

let drawerSelectedProduct = null;

let carouselIndex = 0;
let carouselTimer = null;

// ===============================
// INIT
// ===============================
function init() {
  // ano no footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // link contato whatsapp (mensagem simples)
  if (contactWhats) {
    contactWhats.href = getWhatsLink(
      "Olá! Vim pelo site da Use Luume e gostaria de atendimento 🙂",
    );
  }

  renderPagination();
  renderProducts();
  bindEvents();
  initCarousel();
  renderCart();
}

function bindEvents() {
  // drawer
  drawerClose.addEventListener("click", closeDrawer);

  // carrinho abrir/fechar
  cartBtn.addEventListener("click", () => toggleCart(true));
  cartClose.addEventListener("click", () => toggleCart(false));

  // fechar carrinho clicando fora (simples)
  document.addEventListener("click", (e) => {
    const clickedInsideCart =
      cartPanel.contains(e.target) || cartBtn.contains(e.target);
    const clickedInsideDrawer = productDrawer.contains(e.target);
    if (!clickedInsideCart && cartPanel.classList.contains("open"))
      toggleCart(false);
    // drawer fecha só pelo X (pra não irritar)
    // if (!clickedInsideDrawer && productDrawer.classList.contains("open")) closeDrawer();
  });

  // paginação
  pagePrev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProducts();
      renderPagination();
      window.location.hash = "#shop";
    }
  });

  pageNext.addEventListener("click", () => {
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    if (currentPage < totalPages) {
      currentPage++;
      renderProducts();
      renderPagination();
      window.location.hash = "#shop";
    }
  });

  // limpar carrinho
  cartClear.addEventListener("click", () => {
    cart = [];
    renderCart();
  });

  // carousel
  carouselPrev.addEventListener("click", () => goCarousel(-1));
  carouselNext.addEventListener("click", () => goCarousel(1));
}

// ===============================
// PRODUCTS + PAGINATION
// ===============================
function renderPagination() {
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // prev/next disabled
  pagePrev.disabled = currentPage === 1;
  pageNext.disabled = currentPage === totalPages || totalPages === 0;

  // numbers
  pageNumbers.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-number" + (i === currentPage ? " active" : "");
    btn.textContent = i;
    btn.addEventListener("click", () => {
      currentPage = i;
      renderProducts();
      renderPagination();
      window.location.hash = "#shop";
    });
    pageNumbers.appendChild(btn);
  }
}

function renderProducts() {
  productsGrid.innerHTML = "";

  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = products.slice(start, end);

  pageItems.forEach((p) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = String(p.id);

    card.innerHTML = `
      <img class="product-img" src="${p.img}" alt="${p.name}" />
      <div class="product-body">
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${formatBRL(p.price)}</p>
        <div class="product-actions">
          <button class="btn btn-light" data-action="details">Ver detalhes</button>
          <button class="btn btn-primary" data-action="add">Adicionar</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      const action = e.target?.dataset?.action;
      if (!action) return;

      if (action === "details") {
        openDrawer(p);
      }
      if (action === "add") {
        addToCart(p.id);
        toggleCart(true);
      }
    });

    productsGrid.appendChild(card);
  });
}

// ===============================
// DRAWER
// ===============================
function openDrawer(product) {
  drawerSelectedProduct = product;

  drawerTitle.textContent = product.name;
  drawerImage.src = product.img;
  drawerImage.alt = product.name;
  drawerPrice.textContent = formatBRL(product.price);
  drawerDesc.textContent = product.desc;

  // Add to cart
  drawerAddToCart.onclick = () => {
    addToCart(product.id);
    toggleCart(true);
  };

  // Buy now (1 item)
  const msg = buildCartMessage([
    { id: product.id, name: product.name, price: product.price, qty: 1 },
  ]);
  drawerBuyNow.href = getWhatsLink(msg);

  productDrawer.classList.add("open");
  productDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  productDrawer.classList.remove("open");
  productDrawer.setAttribute("aria-hidden", "true");
  drawerSelectedProduct = null;
}

// ===============================
// CART
// ===============================
function toggleCart(open) {
  if (open) {
    cartPanel.classList.add("open");
    cartPanel.setAttribute("aria-hidden", "false");
  } else {
    cartPanel.classList.remove("open");
    cartPanel.setAttribute("aria-hidden", "true");
  }
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((i) => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
    });
  }
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }
  renderCart();
}

function renderCart() {
  // count
  const totalItems = cart.reduce((acc, i) => acc + i.qty, 0);
  cartCount.textContent = String(totalItems);

  // items
  cartItemsEl.innerHTML = "";

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p style="margin:0;color:rgba(58,47,40,.75);font-size:13px;">Seu carrinho está vazio.</p>`;
    cartTotalEl.textContent = formatBRL(0);
    cartCheckout.href = getWhatsLink("Olá! Quero atendimento 🙂");
    return;
  }

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
      <div>
        <strong>${item.name}</strong><br/>
        <small>${formatBRL(item.price)} cada</small>
      </div>

      <div class="cart-item-actions">
        <button class="qty-btn" aria-label="Diminuir">−</button>
        <span class="qty">${item.qty}</span>
        <button class="qty-btn" aria-label="Aumentar">+</button>
      </div>
    `;

    const [minusBtn, , plusBtn] = row.querySelectorAll(
      ".qty-btn, .qty, .qty-btn",
    );
    // acima é meio "criativo" demais; vamos pegar direito:
    const btns = row.querySelectorAll(".qty-btn");
    const minus = btns[0];
    const plus = btns[1];

    minus.addEventListener("click", () => changeQty(item.id, -1));
    plus.addEventListener("click", () => changeQty(item.id, +1));

    cartItemsEl.appendChild(row);
  });

  // total
  const total = cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  cartTotalEl.textContent = formatBRL(total);

  // whatsapp
  const msg = buildCartMessage(cart);
  cartCheckout.href = getWhatsLink(msg);
}

// ===============================
// CAROUSEL
// ===============================
function initCarousel() {
  if (!carouselImgs.length) return;

  // create dots
  carouselDots.innerHTML = "";
  carouselImgs.forEach((_, idx) => {
    const d = document.createElement("button");
    d.className = "dot" + (idx === 0 ? " active" : "");
    d.setAttribute("aria-label", `Ir para imagem ${idx + 1}`);
    d.addEventListener("click", () => setCarousel(idx));
    carouselDots.appendChild(d);
  });

  setCarousel(0);

  // autoplay
  carouselTimer = setInterval(() => goCarousel(1), 4500);

  // pause on hover (desktop)
  const track = document.getElementById("carouselTrack");
  if (track) {
    track.addEventListener("mouseenter", () => {
      if (carouselTimer) clearInterval(carouselTimer);
      carouselTimer = null;
    });
    track.addEventListener("mouseleave", () => {
      if (!carouselTimer)
        carouselTimer = setInterval(() => goCarousel(1), 4500);
    });
  }
}

function goCarousel(dir) {
  const next =
    (carouselIndex + dir + carouselImgs.length) % carouselImgs.length;
  setCarousel(next);
}

function setCarousel(index) {
  carouselIndex = index;

  carouselImgs.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });

  const dots = Array.from(carouselDots.querySelectorAll(".dot"));
  dots.forEach((d, i) => d.classList.toggle("active", i === index));
}

// ===============================
// START
// ===============================
init();
