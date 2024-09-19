const emailInput = document.getElementById("email-input");
const tooltip = document.getElementById("tooltip");

emailInput.addEventListener("input", function(){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(this.value);

    if (!isValidEmail) {
        tooltip.classList.add('active');
        emailInput.classList.add('invalid');
    }else{
        tooltip.classList.remove('active');
        emailInput.classList.remove('invalid')
    }
})