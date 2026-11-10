# Sitio web de TrackFlow

Sitio corporativo B2B estático de TrackFlow. Incluye una landing en `index.html` y un formulario comercial de demostración en `application.html`, validado en el navegador mediante `validation.js`. El formulario no envía ni almacena datos.

## Requisitos

- Node.js y npm disponibles en el entorno.
- Acceso al registro de npm para instalar las dependencias de desarrollo.

## Preparación y compilación

Desde esta carpeta, compila los estilos:

```bash
npm install
npm run build:css
```

Para recompilar automáticamente los estilos durante el desarrollo:

```bash
npm run dev:css
```

El CSS compilado se genera en `assets/css/tailwind.css`.

## Vista previa

Desde esta carpeta, inicia un servidor estático:

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```

Abre `http://localhost:8000` para la landing o `http://localhost:8000/application.html` para el formulario. En Codespaces, también puedes abrir el puerto 8000 desde la pestaña **Ports**.

## Alcance

- HTML estático, Tailwind CSS local y JavaScript vanilla.
- Sin backend, APIs, bases de datos, tracking de consumidores ni envío real del formulario.
- El contenido empresarial debe limitarse a la información documentada en `../../CONTEXT.es.md`.
