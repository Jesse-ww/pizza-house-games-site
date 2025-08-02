
(function drawFooter() {
    var footer = `
    <!-- Start Footer -->
    <div class="footer-container">
        <div class="p-l footer flex-col justify-end align-end">
            <a class="kdam-thmor-pro-regular page-footer-link" href="/flipout/privacy-policy/fo-pp.html">Flipout Privacy Policy</a>
        </div>
    </div>
    <!-- End Footer -->`;
    
    var body = document.querySelector("body");
    body.innerHTML = body.innerHTML.concat(footer);
} ());