const password = document.querySelector('#password');
const confirm = document.querySelector('#confirmPass')
const passwordDiv = document.querySelector('.passwordDiv');
const errorMsg = document.querySelector('.errorMsg');
const submit = document.querySelector('.submitButton');



confirm.addEventListener('change', () => {
    console.log(confirm.value)
    if (confirm.value != password.value) {
        console.log('error')
        password.classList.add('error')
        confirm.classList.add('error')
        errorMsg.style.display = 'inline';
    }
    else {
        console.log('success')
        password.classList.remove('error')
        confirm.classList.remove('error')
        errorMsg.style.display = 'none';
    }
})


submit.addEventListener('click', (e) => {

    if (confirm.value != password.value) {
        e.preventDefault()
        console.log('error')
        password.classList.add('error')
        confirm.classList.add('error')
        errorMsg.style.display = 'inline';
    }

})


