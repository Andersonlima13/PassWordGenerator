// passwordGenerator.js
function generatePassword(length, useSpecialChars) {
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    if (useSpecialChars) {
      charset += '!@#$%^&*()_+';
    }
    const passwordArray = Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]);
    return passwordArray.join('');
  }
  
  export { generatePassword };