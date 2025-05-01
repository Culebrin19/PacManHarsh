// import { ErrorPacman } from "./classes/ErrorPacman.js";

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let valid = true;

    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    const username = document.getElementById('username').value.trim();
    if (username === '') {
        document.getElementById('error-username').textContent = 'El nom és obligatori.';
        valid = false;
    } else if (username.length < 3) {
        document.getElementById('error-username').textContent = 'El nom ha de tenir almenys 3 caràcters.';
        valid = false;
    }

    const cognom = document.getElementById('cognom').value.trim();
    if (cognom === '') {
        document.getElementById('error-cognom').textContent = 'El cognom és obligatori.';
        valid = false;
    } else if (cognom.length < 3) {
        document.getElementById('error-cognom').textContent = 'El cognom ha de tenir almenys 3 caràcters.';
        valid = false;
    }

    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
    if (!emailPattern.test(email)) {
        document.getElementById('error-email').textContent = 'El correu electrònic no és vàlid.';
        valid = false;
    }

    const password = document.getElementById('password').value.trim();
    if (password.length < 6) {
        document.getElementById('error-password').textContent = 'La contrasenya ha de tenir almenys 6 caràcters.';
        valid = false;
    }

    const dataNaixement = document.getElementById('dataNaixement').value.trim();
    if (dataNaixement === '') {
        document.getElementById('error-dataNaixement').textContent = 'La data de naixement és obligatòria.';
        valid = false;
    } else {
        const dataActual = new Date();
        const dataNaix = new Date(dataNaixement);
        if (dataNaix >= dataActual) {
            document.getElementById('error-dataNaixement').textContent = 'La data de naixement no pot ser futura.';
            valid = false;
        }
    }

    if (valid) {
        let usuaris = JSON.parse(localStorage.getItem('usuaris')) || [];

        const nouUsuari = {
            username: username,
            cognom: cognom,
            email: email,
            password: password,
            dataNaixement: dataNaixement
        };

        usuaris.push(nouUsuari);

        localStorage.setItem('usuaris', JSON.stringify(usuaris));

        alert('Usuari registrat correctament!');

        // window.location.href = "../index.html";
    }
});