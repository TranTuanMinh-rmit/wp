/* Insert your javascript here */
function myFunction(e) {
    if (document.querySelector('#navList a.active') !== null) {
      document.querySelector('#navList a.active').classList.remove('active');
    }
    e.target.className = "active";
  }

function changeCost() {
  //Input call//
  var inputSTA = document.getElementById("seats[STA]").value;
  var inputSTP = document.getElementById("seats[STP]").value;
  var inputSTC = document.getElementById("seats[STC]").value;
  var inputFCA = document.getElementById("seats[FCA]").value;
  var inputFCP = document.getElementById("seats[FCP]").value;
  var inputFCC = document.getElementById("seats[FCC]").value;
  //Prices//
  var priceSTA = 19.80;
  var priceSTP = 17.50;
  var priceSTC = 15.30;
  var priceFCA = 30.00;
  var priceFCP = 27.00;
  var priceFCC = 24.00;
  //Calculation//
  var payment = ((inputSTA * priceSTA) + (inputSTP * priceSTP) + (inputSTC * priceSTC) + (inputFCA * priceFCA) + (inputFCP * priceFCP)+ (inputFCC * priceFCC)).toFixed(2);
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  document.getElementById('total-price').innerHTML = payment;
}

function myReadFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}