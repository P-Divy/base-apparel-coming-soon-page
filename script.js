let email = document.getElementById("email");
let errorIcon = document.getElementById("error-button");
let errorText = document.getElementById("error-text");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if(email.value.length == 0)
    {
        e.preventDefault();
        alert("empty")
    }
    else if (email.validity.typeMismatch) {
        e.preventDefault();
        errorIcon.style.opacity =1;
        errorText.style.opacity =1;
    }

    else{
        errorIcon.style.opacity =0;
        errorText.style.opacity =0;
        document.body.innerHTML = '<div style="display: flex; align-items: center; justify-content: center;"><h1>Thank You!</h1></div>';
    }
    
});
