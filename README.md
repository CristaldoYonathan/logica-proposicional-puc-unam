# Lógica Proposicional · PUC UNaM

Actividades interactivas de **lógica proposicional** para el **Profesorado Universitario en Computación** de la Universidad Nacional de Misiones.

**Demo en vivo:** [logica-proposicional-puc-unam.vercel.app](https://logica-proposicional-puc-unam.vercel.app)

## Contenido

1. **Presentación** — Conceptos básicos y conectores lógicos (∧, ∨, ¬, ⇒, ↔, ⊻).
2. **Actividad 1** — Emparejar enunciados en lenguaje natural con expresiones simbólicas. Corrección automática al enviar.
3. **Actividad 2** — Completar tablas de verdad. Corrección automática al enviar.

## Autoras

Lucrecia Soutus · Daniela Olesnek

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando        | Descripción              |
| -------------- | ------------------------ |
| `npm run dev`  | Servidor de desarrollo   |
| `npm run build`| Build de producción      |
| `npm start`    | Servir build             |
| `npm run lint` | Linter                   |

## Stack

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Estructura

```
src/
├── app/          # Rutas y layout
├── domain/       # Datos y tipos
├── features/     # Vistas por actividad
├── hooks/        # Lógica de estado
└── ui/           # Componentes reutilizables
```

## Licencia

Proyecto educativo — UNaM · Facultad de Ciencias Exactas, Químicas y Naturales.
