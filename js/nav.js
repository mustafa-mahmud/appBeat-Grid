document.addEventListener("DOMContentLoaded", function () {
	let logoNavMobile = document.querySelector(".logoNav__mobile");
	let mobileBar = document.querySelector(".mobileBar");

	//toggle class
	logoNavMobile.addEventListener("click", function () {
		mobileBar.classList.toggle("animateNav");
	});

});