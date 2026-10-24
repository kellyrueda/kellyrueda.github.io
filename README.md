# Kelly Rueda · Arquitecta

Sitio web del portafolio de Kelly Rueda, arquitecta y diseñadora de interiores.
Publicado gratis con GitHub Pages en **https://kellyrueda.github.io/**

Es un sitio estático: solo HTML, CSS, JavaScript e imágenes. No necesita servidor ni base de datos.
Cada cambio que se sube a la rama `main` se publica solo en uno o dos minutos.

## Estructura

```
/
├── index.html                       Inicio: portada, proyectos y contacto
├── conoce-a-tu-arquitecta/
│   └── index.html                   Página "Conoce a tu arquitecta"
├── proyectos/
│   ├── casa-loma-hermosa/           Una carpeta por proyecto (index.html)
│   ├── casa-horizontes-130/
│   ├── diseno-de-cocina/
│   ├── apartamento-los-balsos/
│   └── *.html                       Redirecciones de las direcciones antiguas (no borrar)
├── styles.css                       Estilos, organizados por secciones numeradas
├── app.js                           Menú, menú de proyectos, animaciones y visor de imágenes
├── img/                             Imágenes en tamaño grande (2000 px), usadas en el visor
│   ├── m/                           Las mismas imágenes en tamaño medio (1100 px), usadas en la página
│   └── og/                          Imágenes de vista previa al compartir el enlace (1200 × 630)
├── Portafolio-Kelly-Rueda-Arquitecta.pdf   Portafolio descargable
├── sitemap.xml                      Lista de páginas para Google
├── robots.txt                       Permite a los buscadores leer el sitio
└── .nojekyll                        Indica a GitHub Pages que publique los archivos tal cual
```

Cada página usa direcciones limpias: `/proyectos/casa-loma-hermosa/` en lugar de `.../casa-loma-hermosa.html`.

## Cómo cambiar cosas

**Textos.** Están directamente en el `index.html` de cada página. Basta con buscar la frase y cambiarla.
Si cambias el nombre o la descripción de un proyecto, revisa también el `<title>` y la
`<meta name="description">` del encabezado de esa página, que son lo que muestra Google.

**Imágenes.** Para reemplazar una imagen sin tocar el HTML, sube un archivo con el mismo nombre
en `img/` (versión grande) y en `img/m/` (versión media). Usa JPG y procura que pese menos de 400 KB.

**Colores.** Están al inicio de `styles.css`, en la sección *1. Variables y colores*.
Cada proyecto tiene su tono suave y su tono acento (`c1` Loma Hermosa, `c2` Horizontes 130,
`c3` Cocina, `c4` Los Balsos).

**Contacto.** El correo y el WhatsApp están al final de `index.html`, en la sección `#contacto`.

**PDF.** Para actualizar el portafolio descargable, reemplaza `Portafolio-Kelly-Rueda-Arquitecta.pdf`
por el nuevo archivo con el mismo nombre.

**Nueva página.** Si agregas una página, súmala también a `sitemap.xml` para que Google la encuentre.

Después de cambiar `styles.css` o `app.js`, cambia el número `?v=` donde se enlazan en el HTML
para que los navegadores no muestren la versión vieja guardada.

## Buscadores (SEO)

Cada página tiene título, descripción, dirección canónica, vista previa para redes sociales
y datos estructurados (schema.org) que describen a Kelly y sus proyectos.
El sitio se registra en Google Search Console y se envía el `sitemap.xml`.
