
// Fade effect when scrolling to profile
const checkpointProfile = 200;
window.addEventListener("scroll", () => {
    const current = window.pageYOffset;
    if (current >= checkpointProfile && current / checkpointProfile <= 2) {
        opacity = current / checkpointProfile - 1;
    } else if(current < checkpointProfile){
        opacity = 0;
    } else {
        opacity = 1;
    }
    document.querySelector(".profile").style.opacity = opacity;
});


// Fade effect when scrolling to interast
const checkpointInterest = 375;
window.addEventListener("scroll", () => {
    const current = window.pageYOffset;
    if (current >= checkpointInterest && current / checkpointInterest <= 2) {
        opacity = current / checkpointInterest - 1;
    } else if(current < checkpointInterest){
        opacity = 0;
    } else {
        opacity = 1;
    }
    document.querySelector(".interest").style.opacity = opacity;
});