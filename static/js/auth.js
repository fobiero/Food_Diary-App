$(document).ready(() => {
    $('.btn-reg').click((e) => {
        e.preventDefault();

        const user = $('#username').val();
        const email = $('#email').val();
        const password = $('#pass').val();
        const cPassword = $('#cpass')

        if (password !== cPassword) {
            alert('Password do not match')
        } else(
            alert('Registration successful')
        )
    })
})