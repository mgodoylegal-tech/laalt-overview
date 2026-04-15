const dashboardViews = {
  ecosystem: {
    stats: [
      { label: "Capas publicas", value: "3", sub: "Overview, Mini Lab Public y Auditor Guide Public" },
      { label: "Capas internas", value: "1", sub: "El sistema central se mantiene como una capa independiente" },
      { label: "Enfoque", value: "Contexto", sub: "Mostrar criterio, claridad y arquitectura en una presencia publica ordenada" },
      { label: "Principio", value: "Delimitar", sub: "Cada capa cumple una funcion distinta dentro del conjunto" },
    ],
    cards: [
      {
        badge: "Publico",
        badgeClass: "public",
        title: "LAALT Overview",
        body: "Punto de entrada para entender el ecosistema, el problema que resuelve y como se ordenan sus capas visibles.",
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
        body: "Guia recortada para mostrar el tipo de pensamiento profesional que acompana una auditoria legal-tecnica.",
        bullets: [
          "Rol profesional",
          "Criterio de alto nivel",
          "Casos sinteticos",
        ],
        meta: ["Pedagogia", "Posicionamiento"],
      },
      {
        badge: "Interno",
        badgeClass: "private",
        title: "Core metodologico y operativo",
        body: "La doctrina completa, la instrumentacion y la capa operativa se mantienen en un entorno de trabajo separado.",
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
      { label: "Alcance interno", value: "Nucleo", sub: "Taxonomia, matriz, flujo, plantillas, scoring y logica detallada" },
      { label: "Criterio", value: "Coherencia", sub: "Cada repositorio debe sostener una funcion clara y complementaria" },
    ],
    cards: [
      {
        badge: "Control",
        badgeClass: "",
        title: "Lo que si conviene mostrar",
        body: "Una presencia publica solida requiere mostrar valor visible, recorrido claro y buena organizacion del contenido.",
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
        body: "Criterios de lectura, impacto organizacional y relacion entre evidencia y decision pueden mostrarse en una version breve e introductoria.",
        bullets: [
          "Criterios generales de lectura",
          "Relaciones entre hallazgo y decision",
          "Impacto de negocio en nivel alto",
        ],
        meta: ["Resumido"],
      },
      {
        badge: "Interno",
        badgeClass: "private",
        title: "Lo que no debe publicarse",
        body: "Los componentes de trabajo detallados deben mantenerse fuera de la capa publica para conservar un alcance claro.",
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
      { label: "Lenguaje", value: "Claro", sub: "Cada capa debe explicarse con un tono sobrio y directo" },
      { label: "Recorrido", value: "Simple", sub: "El ecosistema debe poder leerse desde overview hacia demo y guia" },
      { label: "Estructura", value: "Ordenada", sub: "Las piezas publicas deben complementarse sin superponerse" },
      { label: "Resultado", value: "Coherencia", sub: "Cada repo cumple una funcion distinta dentro de una misma narrativa" },
    ],
    cards: [
      {
        badge: "Criterio",
        badgeClass: "",
        title: "Lenguaje de presentacion",
        body: "El ecosistema debe mostrar pensamiento estructurado, arquitectura de informacion y narrativa consistente en todas sus capas.",
        bullets: [
          "README claros",
          "Framing consistente",
          "Capas bien delimitadas",
        ],
        meta: ["Presentacion"],
      },
      {
        badge: "Criterio",
        badgeClass: "",
        title: "Equilibrio de alcance",
        body: "La capa publica debe transmitir juicio profesional y mantener una proporcion adecuada entre contexto, demo y guia.",
        bullets: [
          "Lenguaje serio",
          "Demos entendibles",
          "Recorrido entre capas",
        ],
        meta: ["Alcance"],
      },
      {
        badge: "Criterio",
        badgeClass: "",
        title: "Gobernanza editorial",
        body: "La capa publica tiene que orientar sobre el ecosistema sin perder claridad, tono ni delimitacion entre piezas.",
        bullets: [
          "Mapa conceptual",
          "Reglas de publicacion",
          "Delimitacion de alcance",
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
