// find the page name
let splitPath = location.pathname.split("/");
let pageName = splitPath[splitPath.length-1];
let navItemId = "";

// Set the nav item Id based on the page
switch (pageName) {
    case "":
        navItemId = "home";
        break;
    case "index.html":
        navItemId = "home";
        break;
    case "flipout-page.html":
        navItemId = "fo";
        break;
    case "fo-pp.html":
        navItemId = "fo";
        break;
    case "flipout-2-page.html":
        navItemId = "fo2";
        break;
    case "fo2-pp.html":
        navItemId = "fo2";
        break;
// case "about.html":
//     navItemId = "about";
//     break;
    default:
        navItemId = "home";
        break;
}

// Insert CSS reference
let navCss = "<link rel='stylesheet' href='/css/nav-menu.css'>";
let head = document.querySelector("head");
head.innerHTML += navCss;

// Insert nav menu
(function drawNavMenu() {
    let navMenu = `
        <!-- Start Menu -->
        <div id="test" class="menu-container flex-row flex-center nav-menu-font">
            <div class="nav-menu flex-row">
                <a id="home" class="menu-item" href="/index.html">Home</a>
                <a id="fo" class="menu-item" href="/flipout/flipout-page.html">Flipout</a>
                <a id="fo2" class="menu-item" href="/flipout-2/flipout-2-page.html">Flipout 2</a>
                <!-- <a id="about" class="menu-item" href="/about.html">About</a> -->
            </div>
        </div>
        <!-- End Menu -->`;
    let body = document.querySelector("body");
    body.innerHTML = navMenu.concat(body.innerHTML);
} ());

// Get all menu items and add them to an Array
let menu = document.querySelector(".menu-container");
let menuItems = menu.querySelectorAll(".nav-menu .menu-item");
menuItems = new Array(...menuItems);

// Get the element that contains the class
let item = menuItems.filter( (item) => item.id === navItemId )[0];

// Set the "active" class on the element
item.classList.add("active-menu-item");
