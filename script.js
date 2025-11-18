document.addEventListener('DOMContentLoaded', () => {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const letterContainer = document.getElementById('letterContainer');
    const unfoldButton = document.getElementById('unfold-button');
    const greetingTextElement = document.getElementById('greetingText');

    envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        setTimeout(() => {
            step1.classList.remove('active');
            step2.classList.add('active');
            setTimeout(() => letterContainer.classList.add('show'), 100);
        }, 700);
    });

    unfoldButton.addEventListener('click', () => {
        step2.classList.remove('active');
        step3.classList.add('active');
        startFinalAnimations();
    });

    function startFinalAnimations() {
        const greeting = "Happy Birthday,";
        let i = 0;
        greetingTextElement.innerHTML = '';
        const cursor = document.createElement('span');
        cursor.className = 'typewriter-cursor';
        greetingTextElement.appendChild(cursor);

        const typing = setInterval(() => {
            if (i < greeting.length) {
                greetingTextElement.insertBefore(document.createTextNode(greeting.charAt(i)), cursor);
                i++;
            } else {
                clearInterval(typing);
                cursor.style.animation = 'none';
                cursor.style.display = 'none';
            }
        }, 100);

        createBalloons(18);
    }

    function createBalloons(count) {
        const colors = ['#e94560', '#f0e68c', '#00d8d6', '#8e44ad', '#3498db'];
        for (let i = 0; i < count; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = `${Math.random() * 100}vw`;
            balloon.style.animationDuration = `${Math.random() * 6 + 8}s`;
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.appendChild(balloon);
        }
    }
});