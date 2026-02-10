const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const form = document.getElementById("bookingForm");
const checkinDate = document.getElementById("checkin");
const checkoutDate = document.getElementById("checkout");
const male = document.getElementById("male");
const female = document.getElementById("female");
const kids = document.getElementById("kids");
const errorMsg = document.getElementById("errorMsg");

// get input fields
const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

// ===== Disable past dates for Checkin =====
const today = new Date().toISOString().split("T")[0];
checkin.setAttribute("min", today);

// ===== When checkin date changes =====
checkin.addEventListener("change", function () {

  // checkout date must be after checkin
  let checkinDate = new Date(this.value);

  // add 1 day
  checkinDate.setDate(checkinDate.getDate() + 1);

  let minCheckout = checkinDate.toISOString().split("T")[0];

  checkout.setAttribute("min", minCheckout);

  // clear old checkout value if invalid
  if (checkout.value <= this.value) {
    checkout.value = "";
  }
});



form.addEventListener("submit", function (e) {
    e.preventDefault();

    const totalGuests =
        parseInt(male.value) +
        parseInt(female.value) +
        parseInt(kids.value);

    if (totalGuests === 0) {
        errorMsg.textContent = "Please select at least one guest.";
        return;
    }

    if (checkout.value <= checkin.value) {
        errorMsg.textContent = "Check-out date must be after check-in date.";
        return;
    }

    errorMsg.textContent = "";
    alert("Booking Successful!");
    form.reset();
});

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});
