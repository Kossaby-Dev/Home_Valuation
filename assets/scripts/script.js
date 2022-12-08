var BookingForm = document.querySelectorAll(".vp_booking-form");


BookingForm.forEach(el => {
    el.addEventListener("submit",function(e){
        e.preventDefault();
    })
})


