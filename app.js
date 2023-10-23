// app.js
import { generatePassword } from './passwordGenerator.js';
import { savePassword, getSavedPasswords } from './passwordManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const generateButton = document.getElementById('generateButton');
  const saveButton = document.getElementById('saveButton');
  const passwordDisplay = document.getElementById('passwordDisplay');
  const savedPasswordsList = document.getElementById('savedPasswordsList');

  generateButton.addEventListener('click', () => {
    const length = parseInt(document.getElementById('passwordLength').value, 10);
    const useSpecialChars = document.getElementById('useSpecialChars').checked;
    const newPassword = generatePassword(length, useSpecialChars);
    passwordDisplay.textContent = newPassword;
  });

  saveButton.addEventListener('click', () => {
    const newPassword = passwordDisplay.textContent;
    savePassword(newPassword);
    refreshSavedPasswordsList();
  });

  function refreshSavedPasswordsList() {
    const passwords = getSavedPasswords();
    savedPasswordsList.innerHTML = '';

    // Utilize Array.map() para criar elementos dinâmicos
    const passwordElements = passwords.map((password, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Senha ${index + 1}: ${password}`;
      return listItem;
    });

    // Utilize Array.reduce() para anexar elementos à lista
    const passwordList = passwordElements.reduce((list, listItem) => {
      list.appendChild(listItem);
      return list;
    }, document.createDocumentFragment());

    savedPasswordsList.appendChild(passwordList);
  }
});
