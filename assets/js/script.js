/*==================== TWEMOJI ====================*/
twemoji.parse(document.body);

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show')
        })
    }
}
showMenu('toggle','menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.link')

function linkAction(){
    const navMenu = document.getElementById('menu')
    // When we click on each link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add(`active-link`)
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove(`active-link`)
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


/*==================== TEAM ====================*/
var teamMemberArray = [
    {
        title: 'Yousuf',
        username: '🤧Stop Waffling🤧',
        discriminator: '4413',
        description: `<div class="hey">I am Yousuf, I am a bossman and no one messes with me.
        <div class="drago"><a href="#"><img src="assets/img/hoponamongus.gif" class="monkey" alt=""></a></div></div>`,
        role: 'Founder',
        avatar: 'assets/img/team/avatars/ben.png',
        banner: ''
    },
    {
        title: 'Toxic',
        username: 'Toxiic',
        discriminator: '3360',
        description: '👋 Hey, I\'m Toxic, a Discord addict and Coding enthusiast! I maintain and host the website.',
        role: 'Administrator/Developer',
        avatar: 'assets/img/team/avatars/bawwub.png',
        banner: ''
    },
    {
        title: 'SShadow',
        username: 'SShadow',
        discriminator: '9020',
        description: 'Hello I\'m SShadow, a professional <b>Meme Lord</b>.',
        role: 'Administrator/Developer',
        avatar: 'assets/img/team/avatars/dei.png',
        banner: ''
    },  
    {
        title: 'Zulaski',
        username: '🦑🐸Zulaski💖Kaitzo🧀🍊',
        discriminator: '0666',
        description: '👋 My name is Kaitzo Zulaski. Im 21 years old. I manage the Minecraft server.',
        role: 'Administrator',
        avatar: 'assets/img/team/avatars/qynx.png',
        banner: ''
    }, 
    {
        title: 'Gundam',
        username: 'GundamPilot_No7',
        discriminator: '9942',
        description: 'Gundam',
        role: 'Moderator',
        avatar: 'assets/img/team/avatars/hehe.png',
        banner: ''
    },   
    {
        title: 'Avsbot',
        username: '!_ODX',
        discriminator: '6814',
        description: 'Cracked at everything 😂',
        role: 'Moderator',
        avatar: 'assets/img/team/avatars/tunic.png',
        banner: ''
    },   
    {
        title: 'Saampiee',
        username: '',
        discriminator: '0664',
        description: 'Hi! The names Saampiee. I helped create the Bonfire Network, and will continue to moderate it. ',
        role: 'Moderator',
        avatar: 'assets/img/team/avatars/grammsay.gif',
        banner: ''
    }
];

var updateTeamMemberCard = () => {
    var teamMemberCardInformation = {
        username: document.getElementById('teamMemberCardName'),
        discriminator: document.getElementById('teamMemberCardTag'),
        title: document.getElementById('teamMemberCardTitle'),
        description: document.getElementById('teamMemberCardDescription'),
        role: document.getElementById('teamMemberCardRole'),
        avatar: document.getElementById('teamMemberCardAvatar'),
        banner: document.getElementById('teamMemberCardBanner')
    };
    
    Object.keys(teamMemberArray[currentMember]).forEach((teamMemberInformation) => {
        var teamMemberObject = teamMemberArray[currentMember];
        if (!teamMemberObject) return;

        switch(teamMemberInformation) {
            case 'username':
                teamMemberCardInformation[teamMemberInformation].innerHTML = `${teamMemberObject.username}<span class="teamMemberCardTag">#${teamMemberObject.discriminator}</span>`;
                break;
            case 'discriminator':
                break;
            case 'avatar':
                teamMemberCardInformation[teamMemberInformation].setAttribute('src', teamMemberObject.avatar);
                break;
            case 'banner':
                teamMemberCardInformation[teamMemberInformation].setAttribute('style', `background-image: url(${teamMemberObject.banner});`);
                break;
            default:
                if (teamMemberInformation == 'twemoji') return;
                teamMemberCardInformation[teamMemberInformation].innerHTML = teamMemberObject[teamMemberInformation];

                var scriptTags = teamMemberCardInformation[teamMemberInformation].getElementsByTagName("script");   
                for(var i = 0; i < scriptTags.length; i++) {  
                    eval(scriptTags[i].text);  
                }  
                break;
        }

        if (teamMemberObject.twemoji) twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
    });
};

var currentMember = -1;
var cycleTeamMember = (reverse = false) => {
    var newCurrentMember = (reverse ? currentMember - 1 : currentMember + 1);

    if (teamMemberArray[newCurrentMember]) {
        currentMember = newCurrentMember;
        updateTeamMemberCard();
    } else {
        if (reverse) {
            currentMember = teamMemberArray.length;
            updateTeamMemberCard();
        } else {
            currentMember = 0;
            updateTeamMemberCard();
        }
    };
};
cycleTeamMember();



/*==================== SCROLLREVEAL ====================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: '2600',
    // reset: true,
})

sr.reveal(`.data`,{
    origin: 'top',
    interval: 50,
})



sr.reveal(`.featureContainerImage.ar, .featureContainerText.ar`,{
    origin: 'left',
})
sr.reveal(`.featureContainerImage.al, .featureContainerText.al`,{
    origin: 'right',
})

sr.reveal(`.teamMemberCard, .sectionCenter`,{
    origin: 'top',
    interval: 50,
})

sr.reveal(`.arrowRight, .arrowLeft`,{
    origin: 'top', 
})

sr.reveal(`.arrowContainer`,{
    origin: 'top', 
})

sr.reveal(`.footer-container`,{
    origin: 'top', 
    interval: 90,
})
