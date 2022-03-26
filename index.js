    let starterBill = document.getElementById("Starter-bill");
    let starterPerMonth = document.getElementById("Starter-perMonth");
    let starterPerUser=  document.getElementById("Starter-perUser");
    let proBill = document.getElementById("Pro-bill");
    let proPerMonth= document.getElementById("Pro-perMonth");
    let proPerUser=  document.getElementById("Pro-perUser");
    let enterpriseBill = document.getElementById("Enterprise-bill");
    let enterprisePerMonth= document.getElementById("Enterprise-perMonth");
    let enterprisePerUser=  document.getElementById("Enterprise-perUser");
    let monthly=document.getElementById("classmonth")
    let yearly=document.getElementById("classyear")


let slideIndex = 1;

nextSlide = (n) => {
	slideIndex += n;
	let slides = document.getElementsByClassName("customer-review__slide");
    console.log(slides)

	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	if (slideIndex < 1) {
		slideIndex = slides.length;
	}

	let indicator = document.getElementById("customer-review__indicator");
	indicator.innerText = slideIndex + '/' + slides.length;
	for (i = 0; i < slides.length; i++) {
		slides[i].classList.remove("viewSlide");
	}
	slides[slideIndex - 1].classList.add("viewSlide");
    console.log("clicked")
};



function choosePlan() {
    
    if (starterBill.textContent === "$49") {
      starterBill.textContent = "$39";
      starterPerMonth.textContent="$468 billed annually";
      starterPerUser.textContent="+$39 per User";
      proBill.textContent = "$79";
      proPerMonth.textContent="$948 billed annually";
      proPerUser.textContent="+$79 per User";
      enterpriseBill.textContent = "$63";
      enterprisePerMonth.textContent="$3,792 billed annually";
      enterprisePerUser.textContent="+$59 per User";
      monthly.className="duration_monthly";
      yearly.className="duration_yearly";
    }
    else if (starterBill.textContent === "$39") {
      starterBill.textContent = "$49";
      starterPerMonth.textContent="billed monthly";
      starterPerUser.textContent="+$49 per User";
      proBill.textContent = "$99";
      proPerMonth.textContent="billed monthly";
      proPerUser.textContent="+$89 per User";
      enterpriseBill.textContent = "$79";
      enterprisePerMonth.textContent="billed monthly";
      enterprisePerUser.textContent="+$69 per User";
      monthly.className="duration_yearly";
      yearly.className="duration_monthly";
    } 
  }

const items = document.querySelectorAll(".faq-container__wrapper .faq-container__item-list");
console.log(items)
 
function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));


$( document ).ready(function () {
    $(".faq-container__item").slice(0, 3).show();
    if ($(".blogbox:hidden").length != 0) {
        $("#showMore").show();
    }		
    $("#showMore").on('click', function (e) {
        e.preventDefault();
        $(".faq-container__item:hidden").slice(0, 6).slideDown();
        if ($(".faq-container__item:hidden").length == 0) {
            $("#showMore").show();
        }
    });
});
  
  