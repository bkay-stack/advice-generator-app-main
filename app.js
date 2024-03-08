const adviceContent = document.querySelector(".advice-content p");
const iconBtn = document.querySelector(".icon-btn");

const adviceMessages = [
    "Take risks – if you win, you will be happy; if you lose, you will be wise.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "The best way to predict the future is to create it.",
    "Don't watch the clock; do what it does. Keep going.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "If you want to lift yourself up, lift up someone else."
    // Add more advice messages as needed
];

const adviceGen = () => {
    const randomIndex = Math.floor(Math.random() * adviceMessages.length);
    return adviceMessages[randomIndex];
};

const updateAdvice = () => {
    adviceContent.textContent = adviceGen();
    console.log('btn')
};

iconBtn.addEventListener('click', updateAdvice);
