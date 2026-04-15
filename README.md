# LAALT Overview

> Capa publica de contexto general del ecosistema LAALT.

Este repositorio funciona como punto de entrada publico para entender que problema aborda el ecosistema, como se relacionan sus capas y por que existe una separacion deliberada entre lo publico y lo privado.

No es la sede canonica del metodo ni una documentacion completa del sistema interno. Su funcion es orientar, posicionar y dar contexto sin regalar propiedad intelectual ni exponer activos sensibles.

## Enlaces publicos

- Sitio: `https://mgodoylegal-tech.github.io/laalt-overview/`
- Demo visual publica: `https://mgodoylegal-tech.github.io/laalt-mini-lab-public/`
- Guia publica recortada: `https://mgodoylegal-tech.github.io/laalt-auditor-guide-public/`

## Que explica

- el problema profesional que LAALT intenta resolver
- la relacion entre demo visual, guia publica y capas privadas
- el criterio general de separacion entre portfolio publico y metodo protegido
- una arquitectura conceptual de alto nivel

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
| `laalt-overview` | Contexto publico, mapa y posicionamiento |
| `laalt-mini-lab-public` | Showcase visual y lectura ejecutiva |
| `laalt-auditor-guide-public` | Guia publica recortada |
| `cyber-audit-core-lab` | Sistema central privado |

## Uso local

Abrir `index.html` con Live Server o servir la carpeta como sitio estatico.

```bash
npx serve .
```

## Publicacion

Este repo incluye workflow de GitHub Pages para desplegar el sitio estatico desde la rama `main`.

## Politica publica

La regla central de este overview es simple: debe explicar la arquitectura del ecosistema sin permitir reconstruir el metodo privado.
