$(document).ready(() => {
    $('#btnReg').click(() => {
        const user = $('#username').val();
        const email = $('#email').val();
        const pass = $('#pass').val();
        const cpass = $('#cpass').val();

        if (pass == cpass) {
            alert('Registration Sucessful! Login')
            localStorage.setItem("pass", pass);
        } else {
            alert('Password do not match');
        }
    })

    $('#btnLog').click(() => {
        const lEmail = $('#l-email').val();
        const lPass = $('#l-pass').val();

        // localStorage.getItem("pass")
        const getPass = localStorage.getItem("pass");
        if (lPass == getPass) {
            // alert('Login Successful');
            window.location.href = "../dashboard.html";
        } else {
            alert('Could not Login. Check password!');
        }

    });


});