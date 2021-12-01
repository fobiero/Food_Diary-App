$(document).ready(() => {
    $('#signUp').click((e) => {
        e.preventDefault();

        const uname = $('#username').val();
        const email = $('#email').val();
        const pass = $('#pass').val()
        const cPass = $('#cpass').val();

        if (uname == '') {
            alert('Username is manadatory')
        } else if (email == '') {
            // alert('email is mandatory')
        } else {
            if (pass != cPass) {
                alert("Passwords do not match.");
                return false;
            } else {
                window.location.href = "/dashboard.html"
            }

        }
    })
})