document.getElementById('menuSm').addEventListener("click" , function () {
    document.querySelector('nav ul').style.transform = "translate(0)"
})

document.addEventListener("click" , function (e) {
    if (e.target != document.querySelector('nav ul') && e.target != document.getElementById('menuSm') && window.innerWidth < 992) {
        document.querySelector('nav ul').style.transform = "translate(300px)"
    }
})

window.onresize = function () {
    if (window.innerWidth > 992) {
        document.querySelector('nav ul').removeAttribute("style")
    }
}

window.onscroll = function () {
    if (window.scrollY > 500) {
        document.querySelector("header").style.cssText = "background-color:#fff;position:fixed;top:0;left:0;width:100%;z-index:6"
    }
    else {
        document.querySelector("header").style.cssText = ""
    }
}