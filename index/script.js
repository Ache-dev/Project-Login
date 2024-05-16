document.addEventListener('DOMContentLoaded', function() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let submitButton = document.getElementById('submit');

  // Arrays para almacenar usuarios y contraseñas
  let userRegister = ['admin', 'user1', 'user2'];
  let passwordRegister = ['admin', '1234', '123'];

  submitButton.addEventListener('click', validate);

  function validate() {
      let usernameValue = username.value;
      let passwordValue = password.value;

      // Verificar si el usuario y contraseña coinciden
      let valid = false;
      for (let i = 0; i < userRegister.length; i++) {
          if (usernameValue === userRegister[i] && passwordValue === passwordRegister[i]) {
              valid = true;
              break;
          }
      }

      if (valid) {
          alert("Login successfully");
          window.location.href = './/success/success.html';
      } else {
          alert("Incorrect username or password");
      }
  }
});
