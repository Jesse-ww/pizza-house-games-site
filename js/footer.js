(function drawFooter() {
    var footer = `
    <!-- Start Footer -->
    <div class="footer-container">
        <div class="p-l footer flex-col">
            <a class="vt323-regular page-footer-link fb" href="/support/superport.html">Support</a>
            <a class="vt323-regular page-footer-link fb" href="/flipout/privacy-policy/fo-pp.html">Flipout Privacy Policy</a>
        </div>
    </div>
    <!-- End Footer -->`;
    
    var body = document.querySelector("body");
    body.innerHTML = body.innerHTML.concat(footer);
} ());