// Nav Section
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

           // Animate Links
        navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = '';
        }else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
        }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

 
};

// Banner Text Animation for H1
const bannerTextAnimation1 = () => {
    const text1 = document.querySelector('.fancy1');
    const stringText = text1.textContent;
    const splitText = stringText.split("");
    text1.textContent = "";
    
    for(let i=0; i < splitText.length; i++){
        text1.innerHTML += "<span>" + splitText[i] + "</span>";
    };

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text1.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if(char === splitText.length){
            complete();
            return;
        }
    };
    function complete() {
        clearInterval(timer);
        timer = null;
    }
};

// Banner Text Animation for H3
const bannerTextAnimation2 = () => {
    const text3 = document.querySelector('.fancy3');
    const stringText = text3.textContent;
    const splitText = stringText.split("");
    text3.textContent = "";
    
    for(let i=0; i < splitText.length; i++){
        text3.innerHTML += "<span>" + splitText[i] + "</span>";
    };

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        const span = text3.querySelectorAll('span')[char];
        span.classList.add('fade3');
        char++;
        if(char === splitText.length){
            complete();
            return;
        }
    };
    function complete() {
        clearInterval(timer);
        timer = null;
    }
};


//app function to call all the functions
const app = () => {
    navSlide();
    bannerTextAnimation1();
    bannerTextAnimation2();
}

app();