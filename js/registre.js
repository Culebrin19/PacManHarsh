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

    const edat = document.getElementById('edat').value.trim();
    if (edat === '') {
        document.getElementById('error-edat').textContent = 'El edat és obligatori.';
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

    const pais = document.getElementById('pais').value.trim();
    if (pais === '') {
        document.getElementById('error-pais').textContent = 'La pais és obligatòria.';
        valid = false;
    } 

    if (valid) {
        // let usuaris = JSON.parse(localStorage.getItem('usuaris')) || [];

        const nouUsuari = {
            username: username,
            edat: edat,
            email: email,
            password: password,
            pais: pais
        };

        fetch('http://localhost/harsh/v1/create_user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nouUsuari)
        })
        .then(response => {
            if(response.ok) {
                alert('Usuari registrat correctament');
                window.location.href = "../index.html";
            }else {
                alert('Error al fer registre');
            }
        })

        // usuaris.push(nouUsuari);

        // localStorage.setItem('usuaris', JSON.stringify(usuaris));

        // alert('Usuari registrat correctament!');

        // window.location.href = "../index.html";
    }
});