# TAHANIVO

![TAHANIVO abstract mark](brand/tahanivo-mark-ink.svg)

A responsive luxury furniture storefront built around restrained typography, tactile imagery, and focused product discovery.

## Features

- Responsive editorial storefront and furniture collection
- Animated brand introduction with reduced-motion support
- Keyboard navigation between major sections with `Arrow Up` and `Arrow Down`
- Accessible mobile navigation and quote-request form
- Private brand presentation available directly at `/icon`
- Vercel-compatible single-page application routing

> The current catalog, photography, and locally saved quote requests are presentation content. Commerce, remote quote submission, pricing, and fulfillment are not connected.

## Tech stack

- React
- Vite
- Hanken Grotesk Variable
- Phosphor Icons
- ESLint
- Node.js test runner

## Requirements

- Node.js `20.19+` or `22.12+`
- npm

## Local development

```bash
git clone https://github.com/Frank-sys486/Tahanivo.git
cd Tahanivo
npm ci
npm run dev
```

Open the local URL printed by Vite. The brand presentation is available at `/icon` and is intentionally not linked from the storefront.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run lint` | Run ESLint |
| `npm test` | Validate catalog data and image references |

## Project structure

```text
brand/             Logo assets
public/images/     Furniture and craft imagery
src/App.jsx        Main storefront
src/IconPage.jsx   Direct-access brand page
src/catalog.js     Catalog content
src/styles.css     Design system and responsive styles
DESIGN.md          Visual-system documentation
PRODUCT.md         Product brief and constraints
vercel.json        SPA route rewrites
```

## Quality checks

Run the complete local verification before opening a pull request:

```bash
npm run lint
npm test
npm run build
```

## Deployment

Import the repository into Vercel and keep the detected Vite settings. No environment variables are currently required. `vercel.json` sends direct routes such as `/icon` through the application entry point.
