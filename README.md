# FSV-ReactJS

Proyecto de ejemplo creado con Vite + React.

## Requisitos

- Node.js 18+ (recomendado)
- npm (v8+)

## Instalación

Clonar el repositorio e instalar dependencias:

```bash
git clone https://github.com/shini66/FSV-ReactJS
cd FSV-ReactJS
npm install
```

## Comandos útiles

- `npm run dev` — Inicia servidor de desarrollo (HMR). Por defecto en http://localhost:5173
- `npm run build` — Genera la versión de producción en `dist`
- `npm run preview` — Previsualiza la versión de producción localmente
- `npm run lint` — Ejecuta ESLint sobre el proyecto

Ejemplo para desarrollo:

```bash
npm run dev
# abrir http://localhost:5173
```

## Alias y configuración

Este proyecto usa el alias `@` apuntando a la carpeta `src`. La configuración está en `vite.config.js`:

```js
// vite.config.js
resolve: { alias: { '@': '/src' } }
```

Si tenés imports como `@/styles/index.css` y aparecen errores, verificá que la carpeta `src` tenga `styles/` y que el alias exista.

## Estructura del proyecto (resumen)

- `index.html` — punto de entrada HTML
- `src/app/` — componentes principales y punto de arranque
- `src/assets/` — imágenes y recursos estáticos
- `src/components/` — componentes React
- `src/styles/` — hojas de estilo (`index.css`, `App.css`)

## Resolución de problemas

- Puerto ocupado: Vite puede elegir otro puerto automáticamente; revisá la salida al ejecutar `npm run dev`.
- Alias no resuelto: verificá `vite.config.js` y reiniciá el servidor.

