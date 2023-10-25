// passwordGenerator.js
function generatePassword(length, useSpecialChars) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (useSpecialChars) {
      charset += '!@#$%^&*()_+';
    }
    const passwordArray = Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]);
    if (length > 7) {
    return passwordArray.join('')}
    else{
      window.alert("A senha Deve conter no mínimo 8 caracteres!")
    }
   }
  
  export { generatePassword };