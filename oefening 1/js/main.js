document.querySelector(".checkAge").addEventListener("click", function () {
    const age = document.querySelector(".ageInput").value;
    const message = document.querySelector(".message");
    
    if (age >= 18) {
        message.textContent = "Je bent oud genoeg!";
    } else {
        message.textContent = "Sorry, je bent te jong.";
    }
});