let prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    if (window.pageYOffset === 0) {
        document.querySelector("header").style.boxShadow = "none";
    } else {
        document.querySelector("header").style.boxShadow = "0 5px 10px 0 #000";
    }
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        if (window.pageYOffset >= 200) {
            document.querySelector("header").style.top = "-80px";
        }
    }
    prevScrollpos = currentScrollPos;
};
