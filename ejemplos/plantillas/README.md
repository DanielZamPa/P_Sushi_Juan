# Ejemplos de plantillas HTML

## 01-template-al-dom-con-js.html

La plantilla vive dentro del mismo archivo HTML:

```html
<template id="plantilla-producto">
  <article>
    <h2></h2>
  </article>
</template>
```

JavaScript la clona con `template.content.cloneNode(true)`, llena sus datos y la agrega al DOM con `appendChild`.

## 02-usar-plantilla-html-externa.html

La plantilla vive en un archivo aparte:

```text
02-plantilla-producto.html
```

La página `02-usar-plantilla-html-externa.html` la carga con `fetch`, la convierte en documento con `DOMParser`, clona el `<template>` y lo inserta en el DOM.

Importante: los navegadores modernos no tienen un `include` HTML nativo para traer un `<template>` desde otro archivo y renderizarlo automáticamente. Para usar una plantilla externa desde el cliente se necesita JavaScript, un componente, o una solución del servidor.
