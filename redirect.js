// redirect.js

function verifyCaptcha() {
    const userAnswer = document.getElementById('captcha-input').value;
    const correctAnswer = '8';  // 5 + 3 = 8 (You can change this)
    
    const errorMessage = document.getElementById('error-message');
    
    if (userAnswer === correctAnswer) {
        // Redirect to the URL defined in redirect-url.js
        window.location.href = redirectURL;
    } else {
        // Show error message if CAPTCHA is incorrect
        errorMessage.style.display = 'block';
    }
}

document.getElementById('verify-captcha').addEventListener('click', verifyCaptcha);
