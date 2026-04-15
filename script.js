const dashboardViews = {
  ecosystem: {
    stats: [
      { label: "Capas publicas", value: "3", sub: "Overview, Mini Lab Public y Auditor Guide Public" },
      { label: "Capas privadas", value: "1", sub: "El core metodologico y operativo queda fuera del perimetro publico" },
      { label: "Objetivo", value: "Portfolio", sub: "Mostrar criterio, claridad y arquitectura sin regalar propiedad intelectual" },
      { label: "Principio", value: "Separar", sub: "Lo publico orienta; lo privado define y opera" },
    ],
    cards: [
      {
        badge: "Publico",
        badgeClass: "public",
        title: "LAALT Overview",
        body: "Punto de entrada para entender el ecosistema, el problema que resuelve y por que existe una separacion deliberada entre capas publicas y privadas.",
        bullets: [
          "Contexto general",
          "Mapa del ecosistema",
          "Politica publica de alto nivel",
        ],
        meta: ["Contexto", "Arquitectura conceptual"],
      },
      {
        badge: "Publico",
        badgeClass: "public",
        title: "LAALT Mini Lab Public",
        body: "Showcase visual para leer prioridad, estado, owner y vencimiento sobre un dataset reducido y seguro.",
        bullets: [
          "Demo visual ejecutiva",
          "Seguimiento visible",
          "Sin scoring ni datasets internos",
        ],
        meta: ["Demo", "Visualizacion"],
      },
      {
        badge: "Publico",
        badgeClass: "public",
        title: "LAALT Auditor Guide Public",
        body: "Guia recortada para mostrar el tipo de pensamiento profesional detras de una auditoria legal-tecnica sin convertirlo en sede canonica.",
        bullets: [
          "Rol profesional",
          "Criterio de alto nivel",
          "Casos sinteticos",
        ],
        meta: ["Pedagogia", "Posicionamiento"],
      },
      {
        badge: "Privado",
        badgeClass: "private",
        title: "Core metodologico y operativo",
        body: "La doctrina completa, la taxonomia, la matriz, el flujo canonico y la capa operativa viven fuera del perimetro publico.",
        bullets: [
          "Metodo completo",
          "Instrumentacion privada",
          "Operacion real",
        ],
        meta: ["Doctrina", "Operacion"],
      },
    ],
  },
  exposure: {
    stats: [
      { label: "Puede quedar publico", value: "Alto nivel", sub: "Conceptos, demos, narrativa y arquitectura general" },
      { label: "Solo resumido", value: "Criterio", sub: "Lectura de hallazgos y ejemplos, siempre en forma recortada" },
      { label: "No publicable", value: "Core", sub: "Taxonomia, matriz, flujo, plantillas, scoring y logica sensible" },
      { label: "Riesgo principal", value: "Combinacion", sub: "Varios repos chicos pueden revelar demasiado si se pisan entre si" },
    ],
    cards: [
      {
        badge: "Control",
        badgeClass: "",
        title: "Lo que si conviene mostrar",
        body: "Una presencia publica solida no requiere publicar el sistema entero. Requiere mostrar valor profesional visible.",
        bullets: [
          "Demos visuales acotadas",
          "Casos sinteticos",
          "Arquitectura conceptual",
          "Lenguaje profesional seguro",
        ],
        meta: ["Publicable"],
      },
      {
        badge: "Control",
        badgeClass: "",
        title: "Lo que solo debe aparecer resumido",
        body: "Criterios de lectura, impacto organizacional y relacion entre evidencia y decision pueden mostrarse, pero nunca como sistema completo.",
        bullets: [
          "Criterios generales de lectura",
          "Relaciones entre hallazgo y decision",
          "Impacto de negocio en nivel alto",
        ],
        meta: ["Resumido"],
      },
      {
        badge: "Bloqueado",
        badgeClass: "private",
        title: "Lo que no debe publicarse",
        body: "Cuando una pieza ayuda a reconstruir el core, deja de ser portfolio y pasa a ser fuga de metodo.",
        bullets: [
          "Taxonomia completa",
          "Matriz completa",
          "Flujo completo",
          "Plantillas T1-T6",
          "Scoring y datasets internos",
        ],
        meta: ["Protegido"],
      },
    ],
  },
  audience: {
    stats: [
      { label: "Reclutadores", value: "Claridad", sub: "Necesitan entender posicionamiento, criterio y madurez de producto" },
      { label: "Clientes", value: "Confianza", sub: "Necesitan ver enfoque, lenguaje y valor sin entrar al sistema interno" },
      { label: "Colaboradores", value: "Mapa", sub: "Necesitan entender donde termina lo publico y donde empieza lo privado" },
      { label: "Resultado", value: "Coherencia", sub: "Cada repo cumple una funcion distinta y complementaria" },
    ],
    cards: [
      {
        badge: "Audiencia",
        badgeClass: "",
        title: "Para reclutadores",
        body: "El ecosistema debe mostrar pensamiento estructurado, criterio de arquitectura de informacion y narrativa profesional consistente.",
        bullets: [
          "README claros",
          "Framing consistente",
          "Capas bien delimitadas",
        ],
        meta: ["Portfolio"],
      },
      {
        badge: "Audiencia",
        badgeClass: "",
        title: "Para clientes potenciales",
        body: "La capa publica debe transmitir juicio profesional, no exponer activos internos ni invitar a inspeccionar el core.",
        bullets: [
          "Lenguaje serio",
          "Demos entendibles",
          "Separacion publico / privado",
        ],
        meta: ["Confianza"],
      },
      {
        badge: "Audiencia",
        badgeClass: "",
        title: "Para colaboradores",
        body: "Lo publico tiene que orientar sobre el ecosistema sin convertirse en documentacion suficiente para reconstruir el metodo.",
        bullets: [
          "Mapa conceptual",
          "Reglas de publicacion",
          "Perimetro bien definido",
        ],
        meta: ["Gobernanza editorial"],
      },
    ],
  },
}

const statsRoot = document.getElementById("dashboardStats")
const gridRoot = document.getElementById("dashboardGrid")
const toggleButtons = Array.from(document.querySelectorAll(".toggle-btn"))

function renderDashboard(viewKey) {
  const view = dashboardViews[viewKey]
  if (!view) return

  statsRoot.innerHTML = view.stats.map((item) => `
    <article class="stat-card">
      <p class="stat-label">${item.label}</p>
      <p class="stat-value">${item.value}</p>
      <p class="stat-sub">${item.sub}</p>
    </article>
  `).join("")

  gridRoot.innerHTML = view.cards.map((card) => `
    <article class="dash-card">
      <div class="dash-top">
        <span class="dash-badge ${card.badgeClass || ""}">${card.badge}</span>
      </div>
      <h3>${card.title}</h3>
      <p>${card.body}</p>
      <ul class="dash-list">
        ${card.bullets.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="dash-meta">
        ${card.meta.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `).join("")

  toggleButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === viewKey)
  })
}

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    renderDashboard(button.dataset.view)
  })
})

renderDashboard("ecosystem")
