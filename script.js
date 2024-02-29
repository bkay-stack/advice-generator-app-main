const adviceList = [
    "Take risks.",
    "Be kind to yourself.",
    "Embrace change.",
    "Practice gratitude.",
    "Trust your instincts.",
    "Stay focused and never give up.",
    "Learn from your mistakes.",
    "Believe in yourself.",
    "Listen to your inner voice.",
    "Take one step at a time.",
    "Don't compare yourself to others.",
    "Seek feedback and learn from it.",
    "Stay curious and keep learning.",
    "Stay positive and keep smiling.",
];

const adviceElement = document.getElementById('advice');
const generateButton = document.getElementById('generate-btn');

generateButton.addEventListener('click', generateAdvice);

function generateAdvice() {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    const randomAdvice = adviceList[randomIndex];
    adviceElement.textContent = randomAdvice;
}
