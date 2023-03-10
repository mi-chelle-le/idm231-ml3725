//info button ----------------------------------------------
const infoBtn = document.querySelector('.infohover');
const popupInfo = document.querySelector('.popup-info');

infoBtn.addEventListener('click', function () {
    popupInfo.style.visibility = 'visible';
});

const closeBtnInfo = document.querySelector('.close-btn-info');

closeBtnInfo.addEventListener('click', function() {
    popupInfo.style.visibility='hidden';
});

// toggle background music ------------------------------------------------
const bgMusic = new Audio('audios/onesummersday.mp3')
bgMusic.loop = true;
const toggleMusic = document.querySelector('.volumebtn');
const volumeMute = toggleMusic.src;
const volumePlay = 'imgs/volumebtn.png';

toggleMusic.addEventListener('click', () => {
    if (toggleMusic.src === volumeMute) {
        toggleMusic.src = volumePlay;
        bgMusic.play();
    } else {
        toggleMusic.src = volumeMute;
        bgMusic.pause();
    }
})

//clicking on character buttons ----------------------------------------------
const sousuke = document.getElementById('sousuke');
const chihiro = document.getElementById('chihiro');
const sophie = document.getElementById('sophie');
const totoro = document.getElementById('totoro');
const noface = document.getElementById('noface');
const kiki = document.getElementById('kiki');
const howl = document.getElementById('howl');
const haku = document.getElementById('haku');
const jiji = document.getElementById('jiji');
const calcifer = document.getElementById('calcifer');
const ponyo = document.getElementById('ponyo');
const arrietty = document.getElementById('arrietty');

sousuke.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Sousuke';
    img.src='imgs/sousuke.png';
    date.innerHTML='January 20 - February 18';
    desc.innerHTML='You are intelligent, curious and loyal. You love going on adventures and are always willing to protect those who are close to you.';
    audio.src='audios/sousuke.mp3';
    audio.play();
});

chihiro.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Chihiro';
    img.src='imgs/chihiro.png';
    date.innerHTML='February 19 - March 20';
    desc.innerHTML='You always look for the good in people, showing how considerate you are. You are sensitive to other people\'s feelings and are willing to put your fears aside to protect your friends and family.';
    audio.src='audios/chihiro.mp3';
    audio.play();
});

sophie.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Sophie';
    img.src='imgs/sophie.png';
    date.innerHTML='March 21 - April 19';
    desc.innerHTML='You are strong-willed and kind. Although you may be impulsive with your actions at times, you are compassionate and try your best to help others.';
    audio.src='audios/sophie.mp3';
    audio.play();
});

totoro.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Totoro';
    img.src='imgs/totoro.png';
    date.innerHTML='April 20 - May 20';
    desc.innerHTML='You are very friendly and kindhearted. You find yourself to be a leader at heart and many people can rely on you.';
    audio.src='audios/totoro.mp3';
    audio.play();
});

noface.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='No Face';
    img.src='imgs/noface.png';
    date.innerHTML='May 21 - June 21';
    desc.innerHTML='You are mysterious, but gentle and generous. You tend to want to please people, resulting in many flocking to you, but deep down you crave true sincerity in a friendship.';
    audio.src='audios/noface.mp3';
    audio.play();
});

kiki.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Kiki';
    img.src='imgs/kiki.png';
    date.innerHTML='June 22 - July 22';
    desc.innerHTML='You are very responsible, hardworking and outspoken. You are kindhearted and love helping people out, but can be stubborn and let your emotions taint your confidence.';
    audio.src='audios/kiki.mp3';
    audio.play();
});

howl.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Howl';
    img.src='imgs/howl.png';
    date.innerHTML='July 23 - August 22';
    desc.innerHTML='You are generous and attentive towards others. At times, you find it hard to be honest and vulnerable with yourself, but your ambition and confidence lifts you up in the end.';
    audio.src='audios/howl.mp3';
    audio.play();
});

haku.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Haku';
    img.src='imgs/haku.png';
    date.innerHTML='August 23 - September 22';
    desc.innerHTML='You are calm, supportive, and comforting towards others in tough situations. You tend to be strict and overly critical with yourself, but your hardworking personality pays off.';
    audio.src='audios/haku.mp3';
    audio.play();
});


jiji.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Jiji';
    img.src='imgs/jiji.png';
    date.innerHTML='September 23 - October 23';
    desc.innerHTML='You make a great companion who is honest and supportive. When your friends are in need, you never hesitate to lend a helping hand.';
    audio.src='audios/jiji.mp3';
    audio.play();
});

calcifer.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Calcifer';
    img.src='imgs/calcifer.png';
    date.innerHTML='October 24 - November 21';
    desc.innerHTML='You hate when others try to control your life and are hesitant with trusting people, but find yourself deeply caring about those you form connections with. You always see your promises through, proving your great sense of loyalty.'; 
    audio.src='audios/calcifer.mp3';
    audio.play();
});

ponyo.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Ponyo';
    img.src='imgs/ponyo.png';
    date.innerHTML='November 22 - December 21';
    desc.innerHTML='You love exploring new things that capture your fascination. Freedom and honesty is something you value greatly. You also really love ham.'; 
    audio.src='audios/ponyo.mp3';
    audio.play();
});

arrietty.addEventListener('click', function () {
    popup.style.visibility = 'visible';
    title.innerHTML='Arrietty';
    img.src='imgs/arrietty.png';
    date.innerHTML='December 22 - January 19';
    desc.innerHTML='You are ambitious and love going on adventures. You can be impulsive at times but you are not afraid to stand up for what you believe in.';
    audio.src='audios/arrietty.mp3';
    audio.play();
});

//defining innerHTML and character sound for popup ----------------------------------------------
const img = document.querySelector('.char-img');
const title = document.querySelector('.char-name');
const date = document.querySelector('.char-date');
const desc = document.querySelector('.char-desc'); 
const audio = document.querySelector('.char-audio');

//defining submit for date input and close button for popup ----------------------------------------------
const submit = document.querySelector('.submit-btn');
const dateInput = document.querySelector('.date-input');

const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

//zodiac algorithm ----------------------------------------------
submit.addEventListener('click', function () {
    const birthday = new Date(dateInput.value);
    const month = birthday.getMonth() + 1;
    const day = birthday.getDate();
    popup.style.visibility = "visible";
    
    if ((month === 12 && day >= 21) || (month === 1 && day <= 18)) {
        title.innerHTML='Arrietty';
        img.src='imgs/arrietty.png';
        date.innerHTML='December 22 - January 19';
        desc.innerHTML='You are ambitious and love going on adventures. You can be impulsive at times but you are not afraid to stand up for what you believe in.';
        audio.src='audios/arrietty.mp3';
        audio.play();
    } else if ((month === 11 && day >= 21) || (month === 12 && day <= 21)) {
        title.innerHTML='Ponyo';
        img.src='imgs/ponyo.png';
        date.innerHTML='November 22 - December 21';
        desc.innerHTML='You love exploring new things that capture your fascination. Freedom and honesty is something you value greatly. You also really love ham.'; 
        audio.src='audios/ponyo.mp3';
        audio.play();
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        title.innerHTML='Calcifer';
        img.src='imgs/calcifer.png';
        date.innerHTML='October 24 - November 21';
        desc.innerHTML='You hate when others try to control your life and are hesitant with trusting people, but find yourself deeply caring about those you form connections with. You always see your promises through, proving your great sense of loyalty.'; 
        audio.src='audios/calcifer.mp3';
        audio.play();
    } else if ((month === 9 && day >= 22) || (month === 10 && day <= 23)) {
        title.innerHTML='Jiji';
        img.src='imgs/jiji.png';
        date.innerHTML='September 23 - October 23';
        desc.innerHTML='You make a great companion who is honest and supportive. When your friends are in need, you never hesitate to lend a helping hand.';
        audio.src='audios/jiji.mp3';
        audio.play();
    } else if ((month === 8 && day >= 22) || (month === 9 && day <= 22)) {
        title.innerHTML='Haku';
        img.src='imgs/haku.png';
        date.innerHTML='August 23 - September 22';
        desc.innerHTML='You are calm, supportive, and comforting towards others in tough situations. You tend to be strict and overly critical with yourself, but your hardworking personality pays off.';
        audio.src='audios/haku.mp3';
        audio.play();
    } else if ((month === 7 && day >= 22) || (month === 8 && day <= 22)) {
        title.innerHTML='Howl';
        img.src='imgs/howl.png';
        date.innerHTML='July 23 - August 22';
        desc.innerHTML='You are generous and attentive towards others. At times, you find it hard to be honest and vulnerable with yourself, but your ambition and confidence lifts you up in the end.';
        audio.src='audios/howl.mp3';
        audio.play();
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        title.innerHTML='Kiki';
        img.src='imgs/kiki.png';
        date.innerHTML='June 22 - July 22';
        desc.innerHTML='You are very responsible, hardworking and outspoken. You are kindhearted and love helping people out, but can be stubborn and let your emotions taint your confidence.';
        audio.src='audios/kiki.mp3';
        audio.play();
    } else if ((month === 5 && day >= 20) || (month === 6 && day <= 21)) {
        title.innerHTML='No Face';
        img.src='imgs/noface.png';
        date.innerHTML='May 21 - June 21';
        desc.innerHTML='You are mysterious, but gentle and generous. You tend to want to please people, resulting in many flocking to you, but deep down you crave true sincerity in a friendship.';
        audio.src='audios/noface.mp3';
        audio.play();
    } else if ((month === 4 && day >= 19) || (month === 5 && day <= 20)) {
        title.innerHTML='Totoro';
        img.src='imgs/totoro.png';
        date.innerHTML='April 20 - May 20';
        desc.innerHTML='You are very friendly and kindhearted. You find yourself to be a leader at heart and many people can rely on you.';
        audio.src='audios/totoro.mp3';
        audio.play();
    } else if ((month === 3 && day >= 20) || (month === 4 && day <= 19)) {
        title.innerHTML='Sophie';
        img.src='imgs/sophie.png';
        date.innerHTML='March 21 - April 19';
        desc.innerHTML='You are strong-willed and kind. Although you may be impulsive with your actions at times, you are compassionate and try your best to help others.';
        audio.src='audios/sophie.mp3';
        audio.play();
    } else if ((month === 2 && day >= 18) || (month === 3 && day <= 20)) {
        title.innerHTML='Chihiro';
        img.src='imgs/chihiro.png';
        date.innerHTML='February 19 - March 20';
        desc.innerHTML='You always look for the good in people, showing how considerate you are. You are sensitive to other people\'s feelings and are willing to put your fears aside to protect your friends and family.';
        audio.src='audios/chihiro.mp3';
        audio.play();
    } else if ((month === 1 && day >= 19) || (month === 2 && day <= 18)) {
        title.innerHTML='Sousuke';
        img.src='imgs/sousuke.png';
        date.innerHTML='January 20 - February 18';
        desc.innerHTML='You are intelligent, curious and loyal. You love going on adventures and are always willing to protect those who are close to you.';
        audio.src='audios/sousuke.mp3';
        audio.play();
    } 
});

closeBtn.addEventListener('click', function() {
    popup.style.visibility='hidden';
});

