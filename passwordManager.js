// passwordManager.js
let savedPasswords = [];

function savePassword(password) {
  savedPasswords.push(password);
}

function getSavedPasswords() {
  return savedPasswords;
}

export { savePassword, getSavedPasswords };
