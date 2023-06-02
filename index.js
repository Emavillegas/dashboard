// // Obtén los elementos necesarios del DOM
// const logoutButton = document.getElementById("logout-button");
// const profilePictureUploadElement = document.getElementById("profile-picture-upload");
// const channelPartnerIdElement = document.getElementById("channel-partner-id");
// const currentPasswordElement = document.getElementById("current-password");
// const newPasswordElement = document.getElementById("new-password");
// const confirmPasswordElement = document.getElementById("confirm-password");
// const updateButton = document.getElementById("update-button");

// // Setea los valores de prueba para Channel Partner ID y Profile Picture (puedes reemplazarlos con datos reales)
// const channelPartnerId = "123456789";
// // Simulando la carga de una imagen de perfil
// const profilePictureUrl = "ruta_de_la_imagen";

// // Función para cerrar sesión
// function logout() {
//   // Agrega aquí la lógica para cerrar sesión
//   console.log("User logged out");
// }

// // Función para actualizar la imagen de perfil
// function updateProfilePicture() {
//   // Agrega aquí la lógica para actualizar la imagen de perfil
//   console.log("Profile picture updated");
// }

// // Función para actualizar la contraseña
// function updatePassword() {
//   const currentPassword = currentPasswordElement.value;
//   const newPassword = newPasswordElement.value;
//   const confirmPassword = confirmPasswordElement.value;

//   // Agrega aquí la lógica para procesar el cambio de contraseña
//   if (newPassword === confirmPassword) {
//     console.log("Password updated");
//   } else {
//     console.log("Passwords do not match");
//   }
// }

// // Agrega eventos a los elementos
// logoutButton.addEventListener("click", logout);
// profilePictureUploadElement.addEventListener("click", updateProfilePicture);
// updateButton.addEventListener("click", updatePassword);

// // Actualiza los elementos del DOM con los valores correspondientes
// channelPartnerIdElement.textContent = 'My Channel Partner ID*: ' + channelPartnerId;
// profilePictureUploadElement.style.backgroundImage = `url('${profilePictureUrl}')`;




// Upload Photo

const imgDiv = document.getElementById('profile-picture-upload');
const img = document.getElementById('photo-profile');
const file = document.getElementById('file');
const uploadBtn = document.getElementById('uploadBtn');


// choose photo

file.addEventListener('change', () =>{
  const choosedFile = file.files[0];
    if(choosedFile){
      const reader = new FileReader();

      reader.addEventListener('load', () =>{
          img.setAttribute('src', reader.result);
      });

      reader.readAsDataURL(choosedFile);

    }

});