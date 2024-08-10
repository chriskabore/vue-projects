// script.js
const diceButton = document.getElementById('roll-dice');
const diceResult = document.getElementById('dice-result');
const categoryElement = document.getElementById('category');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer');

const categories = [
    'Maladie Rénale',
    'Dialyse',
    'Greffe',
    'Nutrition',
    'Hygiène',
    'Éducation Thérapeutique'
];

const questions = {
    'Maladie Rénale': [
        { question: "Quelle est la fonction principale des reins?", answers: ["Filtrer le sang", "Produire des hormones", "Stocker l'urine", "Réguler le glucose"], correct: 0 },
        // Plus de questions ici
    ],
    'Dialyse': [
        { question: "Qu'est-ce que la dialyse?", answers: ["Filtration du sang", "Injection de médicaments", "Chirurgie rénale", "Réhabilitation physique"], correct: 0 },
        // Plus de questions ici
    ],
    // Ajouter des questions pour les autres catégories
};

diceButton.addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    diceResult.textContent = `Résultat du dé: ${diceRoll}`;
    // Logique pour déplacer le joueur sur le plateau
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    showQuestion(randomCategory);
});

function showQuestion(category) {
    categoryElement.textContent = category;
    const questionData = questions[category][Math.floor(Math.random() * questions[category].length)];
    questionElement.textContent = questionData.question;
    answerButtons.forEach((button, index) => {
        button.textContent = questionData.answers[index];
        button.onclick = () => checkAnswer(index, questionData.correct);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) {
        alert('Bonne réponse!');
        // Logique pour ajouter un triangle dans le camembert du joueur
    } else {
        alert('Mauvaise réponse, réessayez!');
    }
}
