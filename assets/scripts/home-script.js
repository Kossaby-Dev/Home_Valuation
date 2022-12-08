var HeaderForm = document.querySelector(".vp_header-form");
var btnDefault= document.querySelector(".vp_btn-default");
var btnLoading= document.querySelector(".vp_btn-loading");



HeaderForm.addEventListener("submit", function(e){
    e.preventDefault();
    btnDefault.style.display = "none"
    btnLoading.style.display = "block"
    setTimeout(() => {
        window.location.href = "/map.html";
    },3000)
});