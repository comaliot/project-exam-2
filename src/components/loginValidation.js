import { API } from '../constants/api';

export function loginValidation() {
  const form = document.querySelector('#form');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const message = document.querySelector('.message-container');

  if (form) {
    form.addEventListener('submit', submitForm, false);
  }

  function submitForm(event) {
    event.preventDefault();

    message.innerHTML = '';

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue.length === 0 || passwordValue.length === 0) {
      console.log('Invalid values');
    }

    doLogin(usernameValue, passwordValue);
  }

  async function doLogin(username, password) {
    const url = API + '/auth/local';

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);
      const json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }
}
