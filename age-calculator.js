function calculateAge() {
    var dobInput = document.getElementById('dob').value;
    var dob = new Date(dobInput);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (today.getMonth() < dob.getMonth() || 
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    var resultElement = document.getElementById('result');
    resultElement.innerText = "Your age is " + age + " years.";
}