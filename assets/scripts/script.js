var BookingForm = document.querySelectorAll(".vp_booking-form");
var btnBookingDesktop = document.querySelector("button.vp_btn-booking");
var btnBookingMobile = document.querySelector("a.vp_btn-booking");
var btnGuideDesktop = document.querySelectorAll(".vp_guide-desktop");
var btnGuideMobile = document.querySelectorAll(".vp_guide-mobile");

BookingForm.forEach(el => {
    el.addEventListener("submit",function(e){
        e.preventDefault();
    })
})

function switchBtn(){
    if (window.innerWidth > 428) {
        btnBookingDesktop.style.display = "block";
        btnBookingMobile.style.display = "none";
        btnGuideDesktop.forEach(el => {
          el.style.display = "block"
        });
        btnGuideMobile.forEach(el => {
            el.style.display = "none"
          });
    } else {
        btnBookingDesktop.style.display = "none";
        btnBookingMobile.style.display = "block";
        btnGuideDesktop.forEach(el => {
            el.style.display = "none"
          });
          btnGuideMobile.forEach(el => {
              el.style.display = "block"
            });
    }
}

;

document.addEventListener("DOMContentLoaded", switchBtn);
window.addEventListener('resize', switchBtn)


