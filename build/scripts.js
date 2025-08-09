const shareBtn = document.getElementById("share-btn");
const desktopShareMenu = document.getElementById("desktop-share-menu");
const mobileShareMenu = document.getElementById("mobile-share-menu");
const desktopWidth = window.matchMedia("(min-width: 1439px)");

shareBtn.addEventListener('click', () => {
    if(desktopWidth.matches) {
        desktopShareMenu.classList.toggle("hidden");
        shareBtn.classList.toggle("focus-share-btn");
    } else {
        mobileShareMenu.classList.toggle("hidden");
    }
});

const closeShareMenu = () => {
    if(desktopWidth.matches) {
        desktopShareMenu.classList.add("hidden");
        shareBtn.classList.remove("focus-share-btn");
    }else {
        mobileShareMenu.classList.add("hidden");
    }
}

document.addEventListener('click', (e) => {
    if(!shareBtn.contains(e.target) && !desktopShareMenu.contains(e.target) && !mobileShareMenu.contains(e.target)) {
        closeShareMenu();
    }
});

