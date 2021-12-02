$(document).ready(() => {
    $('#btnReg').click(() => {
        const user = $('#username').val();
        const email = $('#email').val();
        const pass = $('#pass').val();
        const cpass = $('#cpass').val();

        if (pass == '' || cpass == '') {
            alert("Empty fields")
        } else if (pass != cpass) {
            alert('Passwords does not match!')
        } else {
            alert('registration Sucessful.!');
            localStorage.setItem("pass", pass);
            window.location.href = "./login.html";
        }
    });

    $('#btnLog').click(() => {
        const lEmail = $('#l-email').val();
        const lPass = $('#l-pass').val();

        // localStorage.getItem("pass")
        const getPass = localStorage.getItem("pass");
        if (lPass == getPass) {
            // alert('Login Successful');
            window.location.href = "./dashboard.html";
        } else {
            alert('Could not Login. Check password!');
        }
    });
});