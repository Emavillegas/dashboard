
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
