// ===============================
// CONFIG
// ===============================
const WHATSAPP_NUMBER = "556492020713";
const WHATSAPP_BASE = "https://wa.me/";
const ITEMS_PER_PAGE = 8;
const CART_STORAGE_KEY = "useLuume_cart_v1";
const drawerOverlay = document.getElementById("drawerOverlay");

// ===============================
// PRODUTOS
// ===============================
const products = [
  {
    id: 1,
    name: "Pulseira de Borboleta Cravejada",
    price: 70,
    images: [
      "img/produtos/produto-1.jpeg",
    ],
    desc: "Pulseira delicada, que traz brilho sutil para o seu dia a dia. Prata 925",
  },
  {
    id: 2,
    name: "Pulseira Corações",
    price: 80,
    images: [
      "img/produtos/produto-2.jpeg",
    ],
    desc: "Pulseira design elegante, que une brilho e delicadeza. Prata 925",
    imagePosition: "center 80%"
  },
  {
    id: 3,
    name: "Pulseira Fio Baiano",
    price: 62,
    images: [
      "img/produtos/produto-3[1].jpeg",
      "img/produtos/produto-3[2].jpeg",
    ],
    desc: "Pulseira com design sofisticado e torção marcante. Prata 925",
  },
  {
    id: 4,
    name: "Pulseira Corações Vazados",
    price: 45,
    images: [
      "img/produtos/produto-4[1].jpeg",
      "img/produtos/produto-4[2].jpeg"
    ],
    desc: "Pulseira romântica, delicada e elegante. Prata 925",
  },
  {
    id: 5,
    name: "Colar Trevo Cravejado",
    price: 85,
    images: [
      "img/produto-esgotado.png",
      "img/produtos/produto-5[1].jpeg",
      // "img/produtos/produto-5[2].jpeg",
    ],
    desc: "Colar tendência icônica, sofisticado e elegante. Prata 925",
  },
  {
    id: 6,
    name: "Colar Corações Vazados",
    price: 75,
    images: [
      "img/produtos/produto-6[1].jpeg",
      "img/produtos/produto-6[2].jpeg",
    ],
    desc: "Colar Romântico, Delicado e Excepcional para o seu ia a dia. Prata 925",
  },
  {
    id: 7,
    name: "Colar Coração Cravejado",
    price: 120,
    images: [
      "img/produtos/produto-7[1].jpeg",
      "img/produtos/produto-7[2].jpeg",
    ],
    desc: "Colar cravejado, marcante, estiloso e romântico. Prata 925",
  },
  {
    id: 8,
    name: "Colar Borboleta Origame",
    price: 80,
    images: [
      "img/produtos/produto-8.jpeg",
    ],
    desc: "Colar design autêntico, que se destaca por sua elegância. Prata 925",
  },

  {
    id: 9,
    name: "Colar Coração Linhas Cravejadas",
    price: 85,
    images: [
      "img/produtos/produto-9[1].jpeg",
      "img/produtos/produto-9[2].jpeg",
    ],
    desc: "Colar design geométrico, moderno e marcante. Prata 925",
  },
  {
    id: 10,
    name: "Brinco Coração Médio",
    price: 48,
    images: [
      "img/produto-esgotado.png",
      "img/produtos/produto-10[1].jpeg",
      "img/produtos/produto-10[2].jpeg",
    ],
    desc: "Brinco delicado, torção marcante, tamanho ideal para impactar. Prata 925",
  },
  {
    id: 11,
    name: "Brinco Coração",
    price: 32,
    images: [
      "img/produtos/produto-11.jpeg",
    ],
    desc: "Brinco delicado, torção marcante, tamanho ideal para o dia a dia. Prata 925",
  },
  {
    id: 12,
    name: "Brinco Argola Pequena",
    price: 30,
    images: [
      "img/produtos/produto-12.jpeg",
    ],
    desc: "Brinco usual, delicado. Prata 925",
  },
  {
    id: 13,
    name: "Brinco Argola Média",
    price: 40,
    images: [
      "img/produtos/produto-13.jpeg",
    ],
    desc: "Brinco usual, delicado. Prata 925",
  },
  {
    id: 14,
    name: "Brinco Argola Grande",
    price: 45,
    images: [
      "img/produtos/produto-14.jpeg",
    ],
    desc: "Brinco usual, delicado. Prata 925",
  },
  {
    id: 15,
    name: "Brinco Trio",
    price: 45,
    images: [
      "img/produtos/produto-15.jpeg",
    ],
    desc: "3 brincos delicados para o dia a dia. Prata 925",
  },
  {
    id: 16,
    name: "Brinco Trio Strass",
    price: 60,
    images: [
      "img/produtos/produto-16.jpeg",
    ],
    desc: "3 brincos elegantes, e delicados. Prata 925",
  },
  {
    id: 17,
    name: "Brinco Coração Vermelho ",
    price: 25,
    images: [
      "img/produtos/produto-17.jpeg",
    ],
    desc: "Brinco moderno e romântico. Prata 925",
  },
  {
    id: 18,
    name: "Brinco Coração Rosa",
    price: 25,
    images: [
      "img/produtos/produto-18.jpeg",
    ],
    desc: "Brinco delicado e romântico. Prata 925",
  },
  {
    id: 19,
    name: "Brinco Coração Ponto de Luz",
    price: 25,
    images: [
      "img/produtos/produto-19.jpeg",
    ],
    desc: "Brinco delicado e romântico. Prata 925",
  },
  {
    id: 20,
    name: "Brinco Zircônia Quadrado 3mm",
    price: 25,
    images: [
      "img/produtos/produto-20.jpeg",
    ],
    desc: "Brinco ponto de luz, minimalista. Prata 925",
  },
  {
    id: 21,
    name: "Brinco Zircônia Redondo 4mm",
    price: 28,
    images: [
      "img/produtos/produto-21.jpeg",
    ],
    desc: "Brinco delicado, perfeito para o dia a dia. Prata 925",
  },
  {
    id: 22,
    name: "Brinco Zircônia Quadrado 4mm ",
    price: 28,
    images: [
      "img/produtos/produto-22[1].jpeg",
      "img/produtos/produto-22[2].jpeg",
    ],
    desc: "Brinco ponto de luz, elegante. Prata 925",
  },
  {
    id: 23,
    name: "Brinco Zircônia Redondo 6mm",
    price: 32,
    images: [
      "img/produtos/produto-23[1].jpeg",
      "img/produtos/produto-23[2].jpeg",
    ],
    desc: "Brinco ponto de luz, elegante. Prata 925",
  },
  {
    id: 24,
    name: "Brinco Mini Coração",
    price: 20,
    images: [
      "img/produtos/produto-24[1].jpeg",
      "img/produtos/produto-24[2].jpeg",
    ],
    desc: "Brinco delicado e romântico. Prata 925",
  },
  {
    id: 25,
    name: "Piercing Hélix Cravejado",
    price: 28,
    images: [
      "img/produtos/produto-25[1].jpeg",
      "img/produtos/produto-25[2].jpeg",
    ],
    desc: "Piercing delicado e luxuoso. Prata 925",
  },
  {
    id: 26,
    name: "Piercing Fake Estrelas",
    price: 25,
    images: [
      "img/produtos/produto-26[1].jpeg",
      "img/produtos/produto-26[2].jpeg",
    ],
    desc: "Piercing delicado e luxuoso. Prata 925",
  },
  {
    id: 27,
    name: "Colar Coração Azul",
    price: 85,
    images: [
      "img/produtos/produto-27[1].jpeg",
      "img/produtos/produto-27[2].jpeg",
    ],
    desc: "Colar delicado e luxuoso. Prata 925",
  },
  {
    id: 28,
    name: "Colar coração roxo",
    price: 85,
    images: [
      "img/produtos/produto-28[1].jpeg",
      "img/produtos/produto-28[2].jpeg",
    ],
    desc: "Colar delicado e luxuoso. Prata 925",
  },
  {
    id: 29,
    name: "Colar Coração Roxo",
    price: 85,
    images: [
      "img/produtos/produto-29[1].jpeg",
      "img/produtos/produto-29[2].jpeg",
    ],
    desc: "Colar delicado e luxuoso. Prata 925",
  },
  {
    id: 30,
    name: "Colar Ponto de Luz",
    price: 85,
    images: [
      "img/produtos/produto-30[1].jpeg",
      "img/produtos/produto-30[2].jpeg",
    ],
    desc: "Colar delicado e luxuoso. Prata 925",
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

function calcCartTotals(items) {
  const totalItems = items.reduce((acc, i) => acc + i.qty, 0);
  const totalValue = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  return { totalItems, totalValue };
}

function buildCartMessage(items) {
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

function safeParseJSON(str, fallback) {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

function handleSwipe(startX, endX, onSwipeLeft, onSwipeRight) {
  const diff = startX - endX;
  const minSwipeDistance = 50;

  if (Math.abs(diff) < minSwipeDistance) return;

  if (diff > 0) {
    onSwipeLeft();
  } else {
    onSwipeRight();
  }
}

// ===============================
// STORAGE
// ===============================
function loadCart() {
  const raw = localStorage.getItem(CART_STORAGE_KEY);
  const parsed = safeParseJSON(raw, []);
  // validação mínima
  if (!Array.isArray(parsed)) return [];
  return parsed
    .filter((x) => x && typeof x.id === "number" && typeof x.qty === "number")
    .map((x) => {
      // garante que name/price estejam corretos mesmo se mudar catálogo
      const p = products.find((pp) => pp.id === x.id);
      if (!p) return null;
      return {
        id: p.id,
        name: p.name,
        price: p.price,
        qty: Math.max(1, Math.floor(x.qty)),
      };
    })
    .filter(Boolean);
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
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
const drawerPrev = document.getElementById("drawerPrev");
const drawerNext = document.getElementById("drawerNext");
const drawerThumbs = document.getElementById("drawerThumbs");

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

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// Carousel
const carouselImgs = Array.from(document.querySelectorAll(".carousel-img"));
const carouselPrev = document.getElementById("carouselPrev");
const carouselNext = document.getElementById("carouselNext");
const carouselDots = document.getElementById("carouselDots");

// ===============================
// STATE
// ===============================
let cart = [];
let currentPage = 1;
let drawerSelectedProduct = null;
let drawerImageIndex = 0;

let carouselIndex = 0;
let carouselTimer = null;

let touchStartX = 0;
let touchEndX = 0;

let drawerTouchStartX = 0;
let drawerTouchEndX = 0;
// ===============================
// INIT
// ===============================
function init() {
  // ano no footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // carrinho persistente
  cart = loadCart();

  // link contato whatsapp
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

  drawerPrev.addEventListener("click", () => {
    if (!drawerSelectedProduct?.images?.length) return;
    const total = drawerSelectedProduct.images.length;
    drawerImageIndex = (drawerImageIndex - 1 + total) % total;
    updateDrawerImage();
  });

  drawerNext.addEventListener("click", () => {
    if (!drawerSelectedProduct?.images?.length) return;
    const total = drawerSelectedProduct.images.length;
    drawerImageIndex = (drawerImageIndex + 1) % total;
    updateDrawerImage();
  });

  // menu mobile
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      mobileMenu.setAttribute("aria-hidden", String(!isOpen));
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    // ao clicar no link, fecha
    mobileMenu.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a) return;
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute("aria-hidden", "true");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  }

  // fechar carrinho clicando fora + ESC
  document.addEventListener("click", (e) => {
    const clickedInsideCart =
      cartPanel.contains(e.target) || cartBtn.contains(e.target);
    if (!clickedInsideCart && cartPanel.classList.contains("open"))
      toggleCart(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (cartPanel.classList.contains("open")) toggleCart(false);
      if (productDrawer.classList.contains("open")) closeDrawer();
      if (mobileMenu?.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
        menuBtn?.setAttribute("aria-expanded", "false");
      }
    }
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

  const carouselTrackEl = document.getElementById("carouselTrack");

if (carouselTrackEl) {
  carouselTrackEl.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselTrackEl.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

handleSwipe(
  touchStartX,
  touchEndX,
  () => {
    goCarousel(1);
    if (typeof restartCarouselAuto === "function") restartCarouselAuto();
  },
  () => {
    goCarousel(-1);
    if (typeof restartCarouselAuto === "function") restartCarouselAuto();
  }
);
  }, { passive: true });
}

if (drawerImage) {
  drawerImage.addEventListener("touchstart", (e) => {
    drawerTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  drawerImage.addEventListener("touchend", (e) => {
    drawerTouchEndX = e.changedTouches[0].screenX;

    if (!drawerSelectedProduct?.images?.length) return;

    handleSwipe(
      drawerTouchStartX,
      drawerTouchEndX,
      () => {
        const total = drawerSelectedProduct.images.length;
        drawerImageIndex = (drawerImageIndex + 1) % total;
        updateDrawerImage();
      },
      () => {
        const total = drawerSelectedProduct.images.length;
        drawerImageIndex = (drawerImageIndex - 1 + total) % total;
        updateDrawerImage();
      }
    );
  }, { passive: true });
}

  // limpar carrinho
  cartClear.addEventListener("click", () => {
    cart = [];
    saveCart();
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

  pagePrev.disabled = currentPage === 1;
  pageNext.disabled = currentPage === totalPages || totalPages === 0;

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
      <img class="product-img" src="${p.images[0]}" alt="${p.name}" />
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
  drawerImageIndex = 0;

  drawerTitle.textContent = product.name;
  drawerPrice.textContent = formatBRL(product.price);
  drawerDesc.textContent = product.desc;

  updateDrawerImage();

  drawerAddToCart.onclick = () => {
    addToCart(product.id);
    toggleCart(true);
  };

  const msg = buildCartMessage([
    { id: product.id, name: product.name, price: product.price, qty: 1 }
  ]);
  drawerBuyNow.href = getWhatsLink(msg);

  productDrawer.classList.add("open");
  productDrawer.setAttribute("aria-hidden", "false");

  if (typeof drawerOverlay !== "undefined" && drawerOverlay) {
    drawerOverlay.classList.add("open");
  }

  document.body.style.overflow = "hidden";
}

function updateDrawerImage(){
  if (!drawerSelectedProduct) return;

  const images = drawerSelectedProduct.images || [];
  if (!images.length){
    drawerImage.src = "assets/p1.jpg";
    drawerImage.alt = drawerSelectedProduct.name;
    drawerThumbs.innerHTML = "";
    return;
  }

  drawerImage.src = images[drawerImageIndex];
  drawerImage.alt = `${drawerSelectedProduct.name} - imagem ${drawerImageIndex + 1}`;
  drawerImage.style.objectPosition = drawerSelectedProduct.imagePosition || "center center";

  drawerThumbs.innerHTML = "";

  images.forEach((img, index) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = `${drawerSelectedProduct.name} miniatura ${index + 1}`;
    thumb.className = "drawer-thumb" + (index === drawerImageIndex ? " active" : "");
    thumb.addEventListener("click", () => {
      drawerImageIndex = index;
      updateDrawerImage();
    });
    drawerThumbs.appendChild(thumb);
  });
}

function closeDrawer() {
  productDrawer.classList.remove("open");
  productDrawer.setAttribute("aria-hidden", "true");

  drawerOverlay.classList.remove("open");

  drawerSelectedProduct = null;
  document.body.style.overflow = "";
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
  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  saveCart();
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
  saveCart();
  renderCart();
}

function renderCart() {
  const { totalItems, totalValue } = calcCartTotals(cart);
  cartCount.textContent = String(totalItems);

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
        <button class="remove-btn" aria-label="Remover item">✕</button>
      </div>
    `;

    const btns = row.querySelectorAll("button");
    const minus = btns[0];
    const plus = btns[1];
    const remove = btns[2];

    minus.addEventListener("click", () => changeQty(item.id, -1));
    plus.addEventListener("click", () => changeQty(item.id, +1));
    remove.addEventListener("click", () => removeFromCart(item.id));

    cartItemsEl.appendChild(row);
  });

  cartTotalEl.textContent = formatBRL(totalValue);

  const msg = buildCartMessage(cart);
  cartCheckout.href = getWhatsLink(msg);
}

// ===============================
// CAROUSEL
// ===============================
function initCarousel() {
  if (!carouselImgs.length) return;

  carouselDots.innerHTML = "";
  carouselImgs.forEach((_, idx) => {
    const d = document.createElement("button");
    d.className = "dot" + (idx === 0 ? " active" : "");
    d.setAttribute("aria-label", `Ir para imagem ${idx + 1}`);
    d.addEventListener("click", () => setCarousel(idx));
    carouselDots.appendChild(d);
  });

  setCarousel(0);

  carouselTimer = setInterval(() => goCarousel(1), 4500);

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
