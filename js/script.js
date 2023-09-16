document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contact-form");
    form.addEventListener("submit", function (event) {
        var isError = false;
        var errorMessage = document.querySelectorAll(".comments");

        errorMessage.forEach(function (error) {
            error.innerHTML = "";
        });

        var firstName = document.getElementById("firstname");
        if (firstName.value === "") {
            document.querySelector("#firstname + .comments").innerHTML = "I WANT TO KNOW YOUR FIRSTNAME !";
            isError = true;
        }

        var name = document.getElementById("name");
        if (name.value === "") {
            document.querySelector("#name + .comments").innerHTML = "PLEASE ENTER YOUR LAST NAME !";
            isError = true;
        }

        var email = document.getElementById("email");
        if (email.value === "") {
            document.querySelector("#email + .comments").innerHTML = "PLEASE INSERT A VALID EMAIL  !";
            isError = true;
        }

        var phone = document.getElementById("phone");
        if (phone.value === "") {
            document.querySelector("#phone + .comments").innerHTML = "ONLY NUMBERS OR SPACES ARE REQUIRED";
            isError = true;
        }

        var message = document.getElementById("message");
        if (message.value === "") {
            document.querySelector("#message + .comments").innerHTML = "WHAT DO YOU WANT TO TELL ME ??";
            isError = true;
        }

        if (isError) {
            event.preventDefault();
        }
        $.ajax({
            url: "https://zkgohst-13.github.io/portfolio/php/contact.php",
            // ...
        });
        
    });
});
