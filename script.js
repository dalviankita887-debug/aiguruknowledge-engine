
document.addEventListener("DOMContentLoaded", function () {

  const payBtn = document.getElementById("payBtn");

  payBtn.addEventListener("click", function () {

    // plink_Rsl6CgWQjBqzg5
    const razorpayLink = "PASTE_YOUR_RAZORPAY_LINK_HERE";

    window.open(razorpayLink, "_blank");

    // Demo unlock (payment verify नंतर पुढच्या phase मध्ये)
    setTimeout(() => {
      document.getElementById("answer").style.display = "block";
    }, 3000);
  });

});
