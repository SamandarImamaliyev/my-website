// for navbar
window.addEventListener("DOMContentLoaded", event => {
    var navbarMobile = function () {
        const nCollapsible = document.body.querySelector("#mainNavbar");
        if (!nCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            nCollapsible.classList.remove("navbar-mobile");
        } else {
            nCollapsible.classList.add("navbar-mobile");
        }
    };
    navbarMobile();
    document.addEventListener("scroll", navbarMobile);
    const myNavbar = document.body.querySelector("#mainNavbar");
    if (myNavbar) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNavbar",
            offset: 74,
        });
    }
});

var btnCanvas = document.querySelectorAll(".btn-close-canvas");
for (let i = 0; i < btnCanvas.length; i++) {
    btnCanvas[i].addEventListener("click", function () {
        document.querySelector('[data-bs-dismiss="offcanvas"]').click();
    });
}

(function () {
    'use strict'
    var myName = document.querySelector("#name");
    var myEmail = document.querySelector("#email");
    var myPhone = document.querySelector("#phone");
    var myMessage = document.querySelector("#message");
    var myBtn = document.querySelector("#btnContact");

    if (myMessage.value.length == 0) {
        myBtn.disabled = true;
    }

    const spacePattern = /^\S*$/; // bosluq olub-olmadigini yoxlayir
    const NumericPattern = /^([^0-9]*)$/; // reqem olmagini istemirik
    const EmailPattern = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
    const OnlyNumberPattern = /^[0-9]*$/; // reqem olmasini isteyirik

    myName.addEventListener("blur", controlName);
    myEmail.addEventListener("blur", controlEmail);
    myPhone.addEventListener("blur", controlPhone);
    myMessage.addEventListener("blur", controlMessage);

    function controlName() {
        var myErr = document.querySelector("#ErrName");
        if (myName.value.length == 0) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myErr.textContent = "You must add a name";
            return false;
        } else if (myName.value.length < 3) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myErr.textContent = "Your name must contain at least 3 character";
            return false;
        } else if (myName.value.length > 30) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myErr.textContent = "Your name must contain maximum 30 character";
            return false;
        } else if (!spacePattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myErr.textContent = "You cant add a gap in your name";
            return false;
        } else if (!NumericPattern.test(myName.value)) {
            myName.classList.remove("is-valid");
            myName.classList.add("is-invalid");
            myErr.textContent = "Your name can't be included a number";
            return false;
        } else {
            myName.classList.remove("is-invalid");
            myName.classList.add("is-valid");
            return true;
        }
    }

    function controlEmail() {
        var myErr = document.querySelector("#ErrEmail");
        if (myEmail.value.length == 0) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myErr.textContent = "You must add an email";
            return false;
        } else if (!spacePattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myErr.textContent = "You cant add a gap in your email";
            return false;
        } else if (!EmailPattern.test(myEmail.value)) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myErr.textContent = "Invalid email format";
            return false;
        } else if (myEmail.value.length > 40) {
            myEmail.classList.remove("is-valid");
            myEmail.classList.add("is-invalid");
            myErr.textContent = "Your email must contain maximum 30 character";
            return false;
        } else {
            myEmail.classList.remove("is-invalid");
            myEmail.classList.add("is-valid");
            return true;
        }
    }

    function controlPhone() {
        var myErr = document.querySelector("#ErrPhone");
        if (myPhone.value.length == 0) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myErr.textContent = "You must add a phone number";
            return false;
        } else if (!spacePattern.test(myPhone.value)) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myErr.textContent = "You cant add a gap in your phone number";
            return false;
        } else if (!OnlyNumberPattern.test(myPhone.value)) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myErr.textContent = "Phone number must contain only numbers";
            return false;
        } else if (myPhone.value.length != 10) {
            myPhone.classList.remove("is-valid");
            myPhone.classList.add("is-invalid");
            myErr.textContent = "Phone number must contain 10 digits ( example: 050xxxxxxx )";
            return false;
        } else {
            myPhone.classList.remove("is-invalid");
            myPhone.classList.add("is-valid");
            return true;
        }
    }

    function controlMessage() {
        var myErr = document.querySelector("#ErrMessage");
        if (myMessage.value.length == 0) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myErr.textContent = "You must add a message";
            return false;
        } else if (myMessage.value.length < 10) {
            myMessage.classList.remove("is-valid");
            myMessage.classList.add("is-invalid");
            myErr.textContent = "Message must contain at least 10 character";
            return false;
        } else {
            myMessage.classList.remove("is-invalid");
            myMessage.classList.add("is-valid");
            return true;
        }
    }

    myMessage.addEventListener("keyup", function () {
        document.getElementById("current-character").textContent = myMessage.value.length;

        if (myMessage.value.length >= 10) {
            myBtn.disabled = false;
        } else {
            myBtn.disabled = true;
        }
    });

    var myForm = document.querySelector(".needs-validation");
    myForm.addEventListener("submit", function (event) {
        if (!myForm.checkValidity() || !controlName() || !controlEmail() || !controlPhone() || !controlMessage()) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, false);

})();