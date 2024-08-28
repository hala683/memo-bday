const giftBox = document.getElementById('giftBox');
const question = document.getElementById('question');

giftBox.addEventListener('click', () => {
    giftBox.classList.add('hidden');
    question.classList.remove('hidden');
});

function goToWebsite() {
    window.location.href = 'index.html'; // Redirects to the main website
}
