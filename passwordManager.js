// passwordManager.js
let savedPasswords = [];

function savePassword(password) {
  if (password == [""]){
    window.alert("Gere Uma Senha Antes De Salvar!")  
  }else{
    savedPasswords.push(password)
  }
  
  
}

function getSavedPasswords() {
  return savedPasswords;
}

export { savePassword, getSavedPasswords };
