// Récupérez l'élément img de l'ordinateur
const iconeOrdinateur = document.querySelector('.icone_ordinateur');

// Récupérer toutes les icônes
const iconeKeyboard = document.querySelector('.icone_keyboard');
const iconeWebcam = document.querySelector('.icone_webcam');
const iconeMicro = document.querySelector('.icone_micro');
const iconeMouse = document.querySelector('.icone_mouse');
const iconeUsb = document.querySelector('.icone_usb');
const formation = document.querySelector('.partie_one_block_two');
const description = document.querySelector('.partie_zero');
const information = document.querySelector('.partie_one_block_one');
const experience = document.querySelector('.experience');
const soft_skills = document.querySelector('.soft_skills_containeur');
const tech_skills = document.querySelector('.technical_skill_containeur');

// Ajoutez un gestionnaire d'événements pour le clic sur l'icône de l'ordinateur
iconeOrdinateur.addEventListener('click', function() {

    setTimeout(function() {
        iconeKeyboard.style.display = 'block';
        function moveIcon(i) {
            if (i <= 0) {
                iconeKeyboard.style.transform = `translateX(${i}px)`;
                setTimeout(function() {
                    moveIcon(i + 10);
                }, 50);
            }
        }
        moveIcon(-800);
    }, 500);

    setTimeout(function() {
        iconeWebcam.style.display = 'block';
        function moveIcon(i) {
            if (i <= 20) {
                iconeWebcam.style.transform = `translateY(${i}px)`;
                setTimeout(function() {
                    moveIcon(i + 20);
                }, 50);
            }
        }
        moveIcon(-1500);
    }, 500);

    setTimeout(function() {
        iconeMicro.style.display = 'block';
        function moveIcon(i) {
            if (i >= 0) {
                iconeMicro.style.transform = `translateX(${i}px)`;
                setTimeout(function() {
                    moveIcon(i - 10);
                }, 50);
            }
        }
        moveIcon(800);
    }, 500);

    setTimeout(function() {
        iconeMouse.style.display = 'block';
        function moveIcon(i) {
            if (i >= 0) {
                iconeMouse.style.transform = `translateX(${i}px)`;
                setTimeout(function() {
                    moveIcon(i - 10);
                }, 50);
            }
        }
        moveIcon(800);
    }, 500);
    
    setTimeout(function() {
        iconeUsb.style.display = 'block';
        function moveIcon(i) {
            if (i <= 0) {
                iconeUsb.style.transform = `translateX(${i}px)`;
                setTimeout(function() {
                    moveIcon(i + 10);
                }, 50);
            }
        }
        moveIcon(-800);
    }, 500);
});

iconeKeyboard.addEventListener('click', function() {
    formation.style.display = 'block'
})
iconeWebcam.addEventListener('click', function() {
    description.style.display = 'block'
})
iconeMicro.addEventListener('click', function() {
    information.style.display = 'block'
})
iconeUsb.addEventListener('click', function() {
    setTimeout(function(){
        experience.style.display = 'block'
    }, 500)
    setTimeout(function(){
        soft_skills.style.display = 'block'
    }, 1000)
})
iconeMouse.addEventListener('click', function() {
    tech_skills.style.display = 'block'
})
