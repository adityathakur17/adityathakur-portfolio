// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//elemnts linking projects, blogs experiences
document.getElementById('projects-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = '/projects';
});


//dropdown menu
document.getElementById('menu').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown-wrap');
    if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});

window.addEventListener('click', function(event) {
    if (!event.target.matches('#menu')) {
        var dropdown = document.getElementById('dropdown-wrap');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
});




function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".bounding-elem",{
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
            
        })
        .from('#herofooter',{
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
} 



//circle flatten code
var timeout;

function circleFlatten(){
    var xscale = 1;
    var yscale = 1;
    
    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);


        xscale = gsap.utils.clamp(0.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(0.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;


        circleMouseFollower(xscale, yscale)
        timeout = setTimeout(() => {
            document.querySelector(
                "#mini-circle"
            ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${1}, ${1})`;
        }, 100);
    })
}


function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(
            "#mini-circle"
        ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}


circleFlatten();
circleMouseFollower();
firstPageAnim();

 

 function updateTime() {
    const timeDiv = document.querySelector('.time');
    const now = new Date();
    const hours = now.getHours().toString();
    const minutes = now.getMinutes().toString();
    const currentTime = `${hours}:${minutes}`;
    timeDiv.textContent = currentTime;
}

// Update the time immediately on page load
updateTime();

// Update the time every second
setInterval(updateTime, 1000);

//select all three elements and then add a amouse move over all three elements,
// when mouse moves figure out what is the position of mouse whihc means figure out mouse's x and y position
//now instead of mouse x y pos show that image, and move that image, while moving that image rotate it, and
// whehn the mouse moves faster rotate the image faster and slower vice versa

// document.querySelectorAll(".elem").forEach(function(elem){
//     elem.addEventListener("mousemove", function(dets){
//      var diff = dets.clientY - elem.getBoundingClientRect().top;

//      gsap.to(elem.querySelector("img"),{
//         opacity: 1,
//         ease: Power1,
//         top: diff,
//         left: dets.clientX,
//      })
//     })
// })

