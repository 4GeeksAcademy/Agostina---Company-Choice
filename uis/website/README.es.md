# Sitio web de TrackFlow

Sitio corporativo B2B estático de TrackFlow. La landing, el formulario comercial y sus validaciones se incorporarán en las siguientes fases. El formulario será una demostración local: no enviará ni almacenará datos.

## Requisitos

- Node.js y npm disponibles en el entorno.
- Acceso al registro de npm para instalar las dependencias de desarrollo.

## Preparación y compilación

Desde esta carpeta:

```bash
npm install
npm run build:css
```

Para recompilar automáticamente los estilos durante el desarrollo:

```bash
npm run dev:css
```

El CSS compilado se genera en `assets/css/tailwind.css`. El servidor estático y la vista de la web se documentarán al incorporar las páginas.

## Alcance

- HTML estático, Tailwind CSS local y JavaScript vanilla.
- Sin backend, APIs, bases de datos, tracking de consumidores ni envío real del formulario.
- El contenido empresarial debe limitarse a la información documentada en `../../CONTEXT.es.md`.
