let passLengthEl = 8;
const passRangeInputEl = document.getElementById('passRangeInput');
const passRangeValueEl = document.getElementById('passRangeValue');
const genBtnEl = document.getElementById("buttonSection");
const passwordEl = document.getElementById('passwordBox');
let isUpperCase = false;
let isnumbers = false;
let isSymboles = false;


const genPssword = (passLength) => {
    const lowerCaseLatter = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseLatter = isUpperCase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : '';
    const NumberCaseLatter = isnumbers ? "0123456789" : "";
    const symbolsCaseLatter = isSymboles ? "~!@#$-%^&*_+?" : "";
    const passCharecter = lowerCaseLatter + upperCaseLatter + NumberCaseLatter + symbolsCaseLatter;
    let password = "";
    for (let i = 0; i < passLength; i++) {
        const charIndex = Math.floor(Math.random() * passCharecter.length)
        password += passCharecter[charIndex];

    }
    return password;
}


passRangeInputEl.addEventListener('input', (e) => {
    passLengthEl = parseInt(e.target.value)
    passRangeValueEl.innerText = passLengthEl;
})

genBtnEl.addEventListener('click', () => {
    const upperCaseCheckEl = document.getElementById("uppercase")
    const numbersCaseCheckEl = document.getElementById("numbers")
    const symbolsCaseCheckEl = document.getElementById("symbols")

    isUpperCase = upperCaseCheckEl.checked;
    isnumbers = numbersCaseCheckEl.checked;
    isSymboles = symbolsCaseCheckEl.checked;

    const password = genPssword(passLengthEl)
    passwordEl.innerHTML = password;
    console.log('password', password);

})

passwordEl.addEventListener('click', (e) => {
   if(e.target.innerText.length > 0){
    navigator.clipboard.writeText(passwordEl.innerHTML).then(() => {
        alert('copy Too clipbord')
    }).catch((Error) => {
        alert("could not copy")
    })
   }
})