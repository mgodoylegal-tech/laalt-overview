# LAALT Overview

> Referencia publica de contexto general del ecosistema LAALT.

Este repositorio funciona como punto de entrada publico para entender que problema aborda el ecosistema, como se relacionan sus capas y como se organiza su presencia visible.

Su funcion es orientar, ordenar el recorrido y dar contexto general sobre las capas visibles del ecosistema.

## Enlaces publicos

- Sitio: `https://mgodoylegal-tech.github.io/laalt-overview/`
- Demo visual publica: `https://mgodoylegal-tech.github.io/laalt-mini-lab-public/`
- Guia publica recortada: `https://mgodoylegal-tech.github.io/laalt-auditor-guide-public/`

## Punto de entrada recomendado

Si vas a compartir una sola URL del ecosistema en una presentacion o referencia general, la recomendada es:

- `https://mgodoylegal-tech.github.io/laalt-overview/`

Esa referencia funciona como entrada principal porque:

- da contexto antes de abrir detalles
- explica la arquitectura publica del ecosistema
- enlaza a la demo visual y a la guia publica
- evita que la primera impresion dependa de una sola capa

## Que explica

- el problema profesional que LAALT intenta resolver
- la relacion entre demo visual, guia publica y capas privadas
- el criterio general de separacion entre capas publicas y capas internas
- una arquitectura conceptual de alto nivel

## Que justifica este repo publicamente

- ordenar el recorrido entre las otras capas
- explicar por que no cumplen la misma funcion
- dar una entrada clara al ecosistema sin depender de una sola pieza

## Que no explica

- taxonomia canonica completa
- matriz completa de traduccion
- flujo operativo completo
- plantillas privadas
- scoring sensible
- configuraciones internas no necesarias

## Mapa del ecosistema

| Repositorio o capa | Funcion |
| --- | --- |
| `laalt-overview` | Contexto publico y mapa general |
| `laalt-mini-lab-public` | Vista publica y lectura ejecutiva |
| `laalt-auditor-guide-public` | Guia publica introductoria |
| `cyber-audit-core-lab` | Sistema central privado |

## Uso local

Abrir `index.html` con Live Server o servir la carpeta como sitio estatico.

```bash
npx serve .
```

## Publicacion

Este repo incluye workflow de GitHub Pages para desplegar el sitio estatico desde la rama `main`.

## Politica publica

La regla central de este overview es simple: debe explicar la arquitectura del ecosistema con claridad, sobriedad y alcance acotado.
