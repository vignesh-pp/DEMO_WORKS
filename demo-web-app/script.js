document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});
dash = () => {
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("dashboard").style.textAlign = "center";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "none";

}
user = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "block";
    document.getElementById("users").style.textAlign = "center";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "none";
}
message = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "block";
    document.getElementById("messages").style.textAlign = "center";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "none";
}
bookmark = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "block";
    document.getElementById("bookmark").style.textAlign = "center";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "none";
}
files = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "block";
    document.getElementById("files").style.textAlign = "center";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "none";
}
stats = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "block";
    document.getElementById("status").style.textAlign = "center";
    document.getElementById("out").style.display = "none";
}
out = () => {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("messages").style.display = "none";
    document.getElementById("bookmark").style.display = "none";
    document.getElementById("files").style.display = "none";
    document.getElementById("status").style.display = "none";
    document.getElementById("out").style.display = "block";
    document.getElementById("out").style.textAlign = "center";
}

themes=()=>{
    var element = document.getElementById("body-pd");
    var head = document.getElementById("header");
    var side = document.getElementById("nav-bar");
    side.classList.toggle("gray-mode");
   element.classList.toggle("dark-mode");
   head.classList.toggle("dark-mode");
}