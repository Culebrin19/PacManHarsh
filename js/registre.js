document.getElementById('registerForm').addEventListener('submit', function (event) {
    let valid = true;

    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    const username = document.getElementById('username').value.trim();
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

    if (valid) {
        let usuaris = JSON.parse(localStorage.getItem('usuaris')) || [];

        const nouUsuari = {
            username: username,
            cognom: cognom,
            email: email,
            password: password
        };

        usuaris.push(nouUsuari);

        localStorage.setItem('usuaris', JSON.stringify(usuaris));

        alert('Usuari registrat correctament!');

        window.location.href = "html/login.html";
    }
});