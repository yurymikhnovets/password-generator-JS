const keys = {
    default: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*_-+=',
}

const passwordInput = document.querySelector('#password-input');
const upperCaseCheckBox = document.querySelector('#uppercase');
const numbersCheckBox = document.querySelector('#numbers');
const symbolsCheckBox = document.querySelector('#symbols');
const lengthRange = document.querySelector('#password-length');
const generatePassword = document.querySelector('#generate-password');
const copyPasswordBtn = document.querySelector('#copy-password');

lengthRange.addEventListener('input', event => {
    const lengthSpan = document.querySelector('#password-length-number');
    const totalLength = event.target.value;
    lengthSpan.innerHTML = totalLength;
});

generatePassword.addEventListener('click', () => {
    let charset = keys.default;
    upperCaseCheckBox.checked ? (charset += keys.uppercase) : '';
    numbersCheckBox.checked ? (charset += keys.numbers) : '';
    symbolsCheckBox.checked ? (charset += keys.symbols) : '';
    passwordInput.value = genPass(lengthRange.value, charset);
    copyPasswordBtn.innerHTML = 'Copy Password';
})

const genPass = (length, char) => {
    let password = '';
    for(let i = 0; i < length; i++) {
        password += char.charAt(Math.floor(Math.random() * char.length));
    };
    return password;
}

copyPasswordBtn.addEventListener('click', () => {
    if(!passwordInput.value) return;
    passwordInput.select();
    navigator.clipboard.writeText(passwordInput.value);
});