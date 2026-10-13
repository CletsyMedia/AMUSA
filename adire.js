// Product list. Prices marked confirmed:false are placeholders until the client confirms them.
const PRODUCTS = [
  {
    id: "brown-striped-three-quarter",
    name: "Brown Striped Three-Quarter Sleeve Senator",
    cat: "Senator",
    sizes: ["45"],
    price: 130,
    confirmed: true,
    imgs: ["img/p08.jpg"],
    desc: "Rich brown fabric with fine vertical stripes, three-quarter sleeves and a neat front placket. Comes with matching trousers.",
  },
  {
    id: "white-three-quarter",
    name: "White Three-Quarter Sleeve Senator",
    cat: "Senator",
    sizes: ["44"],
    price: 140,
    confirmed: true,
    imgs: ["img/p07.jpg"],
    desc: "Crisp white senator with a textured weave, pleated chest pocket and matching trousers.",
  },
  {
    id: "blue-long-sleeve",
    name: "Blue Long Sleeve Senator",
    cat: "Senator",
    sizes: ["47"],
    price: 140,
    confirmed: true,
    imgs: ["img/p06.jpg"],
    desc: "Deep blue long sleeve senator with a pleated pocket detail and matching trousers.",
  },
  {
    id: "white-striped-short-sleeve",
    name: "White Striped Short Sleeve Senator",
    cat: "Senator",
    sizes: [],
    price: 130,
    confirmed: true,
    imgs: ["img/p05.jpg"],
    desc: "Light white senator with fine stripes, short sleeves and a pocket pin detail. Comes with matching trousers.",
  },
  {
    id: "off-white-short-sleeve",
    name: "Off-White Short Sleeve Senator",
    cat: "Senator",
    sizes: ["47"],
    price: 130,
    confirmed: true,
    imgs: ["img/p04.jpg"],
    desc: "Soft off-white senator with short sleeves, button pocket detail and matching trousers.",
  },
  {
    id: "white-longline-set",
    name: "White Longline Senator Set",
    cat: "Senator",
    sizes: [],
    price: 140,
    confirmed: true,
    imgs: ["img/p03.jpg"],
    desc: "Longline white senator with fine stripes, side slits and matching trousers.",
  },
  {
    id: "plum-stone-detail-long",
    name: "Plum Stone-Detail Long Senator",
    cat: "Occasion wear",
    sizes: [],
    price: 170,
    confirmed: false,
    imgs: ["img/p01.jpg"],
    desc: "Long plum senator with stone detailing on the chest and sleeves. Made for celebrations.",
  },
  {
    id: "wine-stone-detail-set-cap",
    name: "Wine Stone-Detail Set with Cap",
    cat: "Occasion wear",
    sizes: [],
    price: 180,
    confirmed: false,
    imgs: ["img/p11.jpg"],
    desc: "Wide-sleeve wine set with gold stone detailing, matching trousers and cap.",
  },
  {
    id: "navy-embroidered-three-quarter",
    name: "Navy Embroidered Three-Quarter Senator",
    cat: "Senator",
    sizes: [],
    price: 150,
    confirmed: false,
    imgs: ["img/p15.jpg"],
    desc: "Navy senator with embroidered chest and pocket detail, three-quarter sleeves and matching trousers.",
  },
  {
    id: "grey-triple-emblem",
    name: "Grey Triple-Emblem Senator",
    cat: "Senator",
    sizes: [],
    price: 140,
    confirmed: false,
    imgs: ["img/p13.jpg"],
    desc: "Grey long sleeve senator with three embroidered emblems and matching trousers.",
  },
  {
    id: "ivory-wide-sleeve",
    name: "Ivory Wide-Sleeve Senator",
    cat: "Senator",
    sizes: [],
    price: 150,
    confirmed: false,
    imgs: ["img/p14.jpg"],
    desc: "Ivory senator with wide short sleeves, two lower pockets and matching trousers.",
  },
  {
    id: "adire-print-trousers",
    name: "Adire Print Trousers",
    cat: "Separates",
    sizes: [],
    price: 60,
    confirmed: false,
    imgs: ["img/p12.jpg"],
    desc: "Relaxed trousers in a bold indigo, orange and yellow adire print.",
  },
];
const money = (n) => "$" + n.toFixed(2);
const priceLabel = (p) => money(p.price) + (p.confirmed ? "" : "*");
const findProduct = (id) => PRODUCTS.find((p) => p.id === id);

// Cart kept in this browser only (sample). The live store handles the real cart and checkout.
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("amusa-cart") || "[]");
  } catch (e) {
    return [];
  }
}
function saveCart(c) {
  try {
    localStorage.setItem("amusa-cart", JSON.stringify(c));
  } catch (e) {}
  updateCount();
}
function updateCount() {
  const n = getCart().reduce((a, i) => a + i.qty, 0);
  document
    .querySelectorAll(".cart-count")
    .forEach((el) => (el.textContent = n));
}
function addToCart(id, size, qty) {
  const c = getCart();
  const f = c.find((i) => i.id === id && i.size === size);
  if (f) f.qty += qty;
  else c.push({ id, size, qty });
  saveCart(c);
}
function toast(html) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.innerHTML = html;
  t.classList.add("show");
  clearTimeout(t._h);
  t._h = setTimeout(() => t.classList.remove("show"), 3200);
}
document.addEventListener("DOMContentLoaded", updateCount);
