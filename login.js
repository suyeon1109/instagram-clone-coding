const idInput = document.getElementById('userID');
const pwInput = document.getElementById('userPW');
const loginBtn = document.getElementById('loginBtn');
const linkToMain = document.getElementByTagName('a')[0];

idInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "https://www.instagram.com";
    }
    else {
        loginBtn.disabled = true;
        linkToMain = "#none";
    }
})

pwInput.addEventListener('keyup', function(event) {
    if (idInput.value && pwInput.value) {
        loginBtn.disabled = false;
        linkToMain.href = "https://www.instagram.com";
    }
    else {
        loginBtn.disabled = true;
        linkToMain = "#none";
    }
})

document.addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        document.getElementById('loginBtn').click()
    }
})