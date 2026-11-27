/* Lee SITE (config.js) y construye la página. Normalmente NO necesitas editar este archivo. */
(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const paras = (arr) => arr.map((t, i) => {
  if (i === 0 || i === 2) {
    return `<p><strong>${esc(t.replace(/<[^>]*>/g, ""))}</strong></p>`;
  }
  return `<p>${esc(t)}</p>`;
}).join("");
  const S = SITE;

  document.title = S.nombre;
  document.querySelectorAll("[data-src=logo]").forEach((i) => (i.src = S.logo));

  // Portada
  $("heroTitulo").textContent = S.hero.titulo;
  $("heroTexto").textContent = S.hero.texto;
  if (S.hero.imagen) $("heroBg").style.backgroundImage = `url("${S.hero.imagen}")`;

  // Nosotros
  $("nosTitulo").textContent = S.nosotros.titulo;
  $("nosTextos").innerHTML = paras(S.nosotros.parrafos);
  

const iconosPilares = {
  amar: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 41S5 29 5 17C5 6 18 3 24 15 30 3 43 6 43 17c0 12-19 24-19 24Z"/></svg>',

 servicio: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 27h9l5 5h13l9-9c2-2 5 1 3 3L33 38H18l-8-6H5z"/><path d="M24 23s-8-5-8-10a5 5 0 0 1 8-3 5 5 0 0 1 8 3c0 5-8 10-8 10Z"/></svg>',

  crecer: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 9c7-3 13-2 18 2v28c-5-4-11-5-18-2zM42 9c-7-3-13-2-18 2v28c5-4 11-5 18-2z"/><path d="M12 17l8 2M12 24l8 2M36 17l-8 2M36 24l-8 2"/></svg>'
};


  $("nosPilares").innerHTML = S.nosotros.pilares.map((p) => {
    const clave = p.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
    const icono = iconosPilares[clave] || iconosPilares.crecer;
    return `<li class="pillar-card"><div class="pillar-icon">${icono}</div><strong>${esc(p.titulo)}</strong><span>${esc(p.texto)}</span></li>`;
  }).join("");

 // Lo que creemos
const iconosCreencias = {
  "Adoración": `<svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 40S6 29 6 17C6 6 19 3 24 15 29 3 42 6 42 17c0 12-18 23-18 23Z"/>
  </svg>`,

  "Evangelismo": `<svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M6 10c7-3 13-2 18 2v27c-5-4-11-5-18-2z"/>
    <path d="M42 10c-7-3-13-2-18 2v27c5-4 11-5 18-2z"/>
    <path d="M24 15v12M18 21h12"/>
  </svg>`,

  "Discipulado": `<svg viewBox="0 0 48 48" aria-hidden="true">
    <circle cx="24" cy="14" r="7"/>
    <circle cx="10" cy="20" r="5"/>
    <circle cx="38" cy="20" r="5"/>
    <path d="M11 39c0-8 5-13 13-13s13 5 13 13M2 39c0-6 3-10 8-10M46 39c0-6-3-10-8-10"/>
  </svg>`,

  "Enseñanza": `<svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M5 9c7-3 13-2 19 2v28c-6-4-12-5-19-2z"/>
    <path d="M43 9c-7-3-13-2-19 2v28c6-4 12-5 19-2z"/>
  </svg>`,

  "Servicio": `<svg viewBox="0 0 48 48" aria-hidden="true">
    <path d="M24 41S5 29 5 17C5 6 18 3 24 15 30 3 43 6 43 17c0 12-19 24-19 24Z"/>
  </svg>`
};

$("beliefsGrid").innerHTML = S.creencias.map((c) => `
  <article class="belief-card">
    <div class="belief-icon">${iconosCreencias[c.titulo]}</div>
    <h3>${esc(c.titulo)}</h3>
    <p>${esc(c.texto)}</p>
    ${c.titulo === "Servicio"
      ? `<strong class="belief-motto">Aquí tus dones Importan.</strong>`
      : ""}
  </article>
`).join("");

  // Servicios
  $("servCards").innerHTML = S.servicios.map((s) =>
    `<article class="card"><h3>${esc(s.dia)}</h3><p class="time">${esc(s.hora)}</p><p>${esc(s.detalle || "")}</p></article>`).join("");

  
// Ubicación
const dirCompleta = [S.ubicacion.direccion, S.ubicacion.ciudad]
  .filter(Boolean).join(", ");

const rutaURL = S.ubicacion.mapa;

$("locDir").textContent = dirCompleta;
$("locRef").textContent = S.ubicacion.referencia;

$("locBtn").href = rutaURL;
$("heroComo").href = rutaURL;

// Abrir Google Maps en otra pestaña
$("locBtn").target = "_blank";
$("heroComo").target = "_blank";
$("locBtn").rel = "noopener noreferrer";
$("heroComo").rel = "noopener noreferrer";

// Ocultar el mapa incrustado
$("mapa").parentElement.style.display = "none";


  
  // Contacto
  const C = S.contacto;
  const wa = C.whatsapp.replace(/\D/g, "");

  const items = [
    {
      n: "WhatsApp",
      icon: "https://cdn.simpleicons.org/whatsapp/25D366",
      v: wa ? "Escribir por WhatsApp" : "",
      h: wa ? `https://wa.me/${wa}` : ""
    },
    {
      n: "Facebook",
      icon: "https://cdn.simpleicons.org/facebook/1877F2",
      v: "Visitar página",
      h: C.facebook
    },
    {
      n: "Instagram",
      icon: "https://cdn.simpleicons.org/instagram/E4405F",
      v: "Ver perfil",
      h: C.instagram
    },
    {
      n: "Correo",
      icon: "https://cdn.simpleicons.org/gmail/EA4335",
      v: C.correo,
      h: C.correo ? `mailto:${C.correo}` : ""
    }
  ];

  $("contactGrid").innerHTML = items.map((i) => i.h
    ? `<a class="contact-card" href="${esc(i.h)}" target="_blank" rel="noopener">
        <img class="contact-icon" src="${i.icon}" alt="${i.n}" width="36" height="36">
        <span>${i.n}</span>
        <strong>${esc(i.v)}</strong>
      </a>`
    : `<div class="contact-card off">
        <img class="contact-icon" src="${i.icon}" alt="${i.n}" width="36" height="36">
        <span>${i.n}</span>
        <strong>Próximamente</strong>
      </div>`).join("");

  $("fRedes").innerHTML = items.filter((i) => i.h)
    .map((i) => `<a href="${esc(i.h)}" target="_blank" rel="noopener">${i.n}</a>`)
    .join("<br>") || "Próximamente";

  // Pie de página
  $("fNombre").textContent = S.nombre;
  $("fDir").textContent = dirCompleta;
  $("fHor").innerHTML = S.servicios.map((s) => `${esc(s.dia)}: ${esc(s.hora)}`).join("<br>");
  $("fRedes").innerHTML = items.filter((i) => i.h).map((i) => `<a href="${esc(i.h)}" target="_blank" rel="noopener">${i.n}</a>`).join("<br>") || "Próximamente";
  $("copy").textContent = `© ${new Date().getFullYear()} ${S.copyright}`;

  // Menú: fondo al desplazar + menú móvil
  const header = $("header"), burger = $("burger");
  const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  burger.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav a").forEach((a) => a.addEventListener("click", () => { header.classList.remove("open"); burger.setAttribute("aria-expanded", false); }));

  // Aparición suave de las secciones al desplazarse
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.15 });
    document.querySelectorAll(".section .wrap").forEach((el) => { el.classList.add("reveal"); io.observe(el); });
  }

  // Ventana Lo que creemos
const modalCreencias = $("modalCreencias");
const abrirCreencias = $("abrirCreencias");
const cerrarCreencias = $("cerrarCreencias");

abrirCreencias.addEventListener("click", (e) => {
  e.preventDefault();
  modalCreencias.classList.add("activa");
  document.body.style.overflow = "hidden";
});

cerrarCreencias.addEventListener("click", () => {
  modalCreencias.classList.remove("activa");
  document.body.style.overflow = "";
});

// Cerrar al hacer clic fuera de la ventana
modalCreencias.addEventListener("click", (e) => {
  if (e.target === modalCreencias) {
    modalCreencias.classList.remove("activa");
    document.body.style.overflow = "";
  }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalCreencias.classList.remove("activa");
    document.body.style.overflow = "";
  }
});

})();
