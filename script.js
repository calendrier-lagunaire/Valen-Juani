# Invitación de Valen y Juani

Invitación digital responsive desarrollada con HTML, CSS y JavaScript puro.

## Publicar en GitHub

1. Crear un repositorio nuevo y vacío en GitHub.
2. Descomprimir el paquete de entrega.
3. Subir **el contenido de esta carpeta** a la raíz del repositorio. `index.html` debe quedar en el nivel principal, no dentro de otra carpeta.
4. Confirmar los archivos en la rama `main`.

La estructura debe verse así:

```text
index.html
styles.css
script.js
vercel.json
assets/
  say-you-wont-let-go.mp3
```

## Publicar en Vercel

1. Ingresar a Vercel y seleccionar **Add New → Project**.
2. Importar el repositorio de GitHub.
3. En **Framework Preset**, seleccionar `Other`.
4. Dejar vacíos **Build Command** y **Output Directory**.
5. Presionar **Deploy**.

Vercel detectará `index.html` y publicará la invitación sin compilación.

## Antes de compartirla

- Reemplazar las tres fotografías temporales del bloque `photos` en `script.js` por las fotografías definitivas.
- Verificar el enlace de Google Maps.
- Enviar una confirmación de prueba y comprobar que aparezca en la hoja de respuestas del Google Form.
- Probar reproducción de música, carrusel y formulario desde un teléfono.

## Personalización

Los datos principales están agrupados al comienzo de `script.js` dentro del bloque `INVITATION`.

El formulario está conectado al Google Form de confirmación facilitado para esta boda. La canción se encuentra en `assets/say-you-wont-let-go.mp3`.
