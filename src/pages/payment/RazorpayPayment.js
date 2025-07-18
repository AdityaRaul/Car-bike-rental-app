import React from "react";

const RazorpayPayment = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const callRazorPay = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_BF94q4V2hIcsnd", // ✅ Use Razorpay Test Key
      key_secret: 'ryb6YJ8vFQ69DiFF1n2TsfGQ',
      amount: 0, // ₹500.00 in paise
      currency: "INR",
      name: "DriveOn Rentals – Bhubaneswar",
      description: "Booking Payment",
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Aditya Raul",
        email: "adityaraul408@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="text-center mt-5">
      <h2>Complete Your Booking</h2>
      <button className="btn btn-success mt-3" onClick={callRazorPay}>
        Pay 
      </button>
    </div>
  );
};

export default RazorpayPayment;
