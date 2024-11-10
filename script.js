const answers = {
    1: "password123", // Example answer for Level 1
    2: "data_extracted" // Example answer for Level 2
    // Add more level answers here
};

function checkAnswer(level) {
    const input = document.getElementById(`input${level-1}`).value;
    const feedback = document.getElementById(`feedback${level-1}`);

    if (input === answers[level]) {
        feedback.textContent = "Correct! Moving to the next level...";
        feedback.style.color = "lime";

        // Move to the next level after a brief delay
        setTimeout(() => {
            document.getElementById(`level${level-1}`).style.display = "none";
            document.getElementById(`level${level }`).style.display = "block";
        }, 1000);
    } else {
        feedback.textContent = "Incorrect. Try again.";
        feedback.style.color = "red";
    }
}

