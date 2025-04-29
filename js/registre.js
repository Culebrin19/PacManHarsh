import { ErrorPacman } from "./classes/ErrorPacman.js";

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    let valid = true;

    document.querySelectorAll('.error').forEach(e => e.textContent = '');

//     try {
//         const username = document.getElementById('username').value.trim();
//         if (username === '') {
//             throw new ErrorPacman(1, 'El nom és obligatori.');
//         } else if (username.length < 3) {
//             throw new ErrorPacman(2, 'El nom ha de tenir almenys 3 caràcters.');
//         }

//         const cognom = document.getElementById('cognom').value.trim();
//         if (cognom === '') {
//             throw new ErrorPacman(3, 'El cognom és obligatori.');
//         } else if (cognom.length < 3) {
//             throw new ErrorPacman(4, 'El cognom ha de tenir almenys 3 caràcters.');
//         }

//         const email = document.getElementById('email').value.trim();
//         const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
//         if (!emailPattern.test(email)) {
//             throw new ErrorPacman(5, 'El correu electrònic no és vàlid.');
//         }

//         const password = document.getElementById('password').value.trim();
//         if (password.length < 6) {
//             throw new ErrorPacman(6, 'La contrasenya ha de tenir almenys 6 caràcters.');
//         }

//         const dataNaixement = document.getElementById('dataNaixement').value.trim();
//         if (dataNaixement === '') {
//             throw new ErrorPacman(7, 'La data de naixement és obligatòria.');
//         } else {
//             const dataActual = new Date();
//             const dataNaix = new Date(dataNaixement);
//             if (dataNaix >= dataActual) {
//                 throw new ErrorPacman(8, 'La data de naixement no pot ser futura.');
//             }
//         }
//         let usuaris = JSON.parse(localStorage.getItem('usuaris')) || [];

//         const nouUsuari = {
//             username: username,
//             cognom: cognom,
//             email: email,
//             password: password,
//             dataNaixement: dataNaixement
//         };

//         usuaris.push(nouUsuari);
//         localStorage.setItem('usuaris', JSON.stringify(usuaris));

//         alert('Usuari registrat correctament!');
//         window.location.href = "html/login.html";

//     } catch (error) {
//         if (error instanceof ErrorPacman) {
//             console.error(error.toString());
//             mostrarErrorAlFormulari(error);
//             valid = false;
//         } else {
//             console.error('Error desconegut', error);
//         }
//     }
// });

function mostrarErrorAlFormulari(error) {
    switch (error.code) {
        case 1:
        case 2:
            document.getElementById('error-username').textContent = error.message;
            break;
        case 3:
        case 4:
            document.getElementById('error-cognom').textContent = error.message;
            break;
        case 5:
            document.getElementById('error-email').textContent = error.message;
            break;
        case 6:
            document.getElementById('error-password').textContent = error.message;
            break;
        case 7:
        case 8:
            document.getElementById('error-dataNaixement').textContent = error.message;
            break;
        default:
            console.log("Codi d'error desconegut");
    }
}
    if (username === '') {
        document.getElementById('error-username').textContent = 'El nom és obligatori.';
        valid = false;
    }else if (username.length < 3) {
        document.getElementById('error-username').textContent = 'El nom ha de tenir almenys 3 caràcters.';
        valid = false;
    }

    const cognom = document.getElementById('cognom').value.trim();
    if (cognom === '') {
        document.getElementById('error-cognom').textContent = 'El cognom és obligatori.';
        valid = false;
    }else if (cognom.length < 3) {
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

        window.location.href = "../html/login.html";
    }
});