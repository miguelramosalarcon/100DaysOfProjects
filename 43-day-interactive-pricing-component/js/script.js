const slider = document.querySelector('input[type="range"]');
let dynamicPrice = document.querySelector(".container__dynamic-price");
let dynamicPageViews = document.querySelector(".dynamic-page-views");
const monthlyYearlyCheckbox = document.querySelector(".monthly-yearly-checkbox");

monthlyYearlyCheckbox.checked = false
dynamicPrice.innerHTML = `$${slider.value}.00`

monthlyYearlyCheckbox.addEventListener('change', () => {
    if (monthlyYearlyCheckbox.checked === true) {
        dynamicPrice.innerHTML = `$${slider.value * .75}.00`;    
        
    } else {
        dynamicPrice.innerHTML = `$${slider.value}.00`;
           
    }
});

slider.oninput = function () {
    if (monthlyYearlyCheckbox.checked === true) {
        dynamicPrice.innerHTML = `$${slider.value * .75}.00`;        
    } else {
        dynamicPrice.innerHTML = `$${slider.value}.00`;        
    }
};

slider.addEventListener("input", function () {
    var x = ((slider.value - slider.min) / (slider.max - slider.min)) * 100; // When it's not a 1 to 100 range input
    var color = `linear-gradient(90deg, #10d5c2 ${x}%, #eaeefb ${x}%)`;
    slider.style.background = color;
    
    switch (slider.value) {
        case "8":
            dynamicPageViews.innerHTML = "10k";
            break;
        case "12":
            dynamicPageViews.innerHTML = "25k";
            break;
        case "16":
            dynamicPageViews.innerHTML = "50k";
            break;
        case "20":
            dynamicPageViews.innerHTML = "100k";
            break;
        case "24":
            dynamicPageViews.innerHTML = "300k";
            break;
        case "28":
            dynamicPageViews.innerHTML = "500k";
            break;
        case "32":
            dynamicPageViews.innerHTML = "750k";
            break;
        case "36":
            dynamicPageViews.innerHTML = "1M";
            break;
        default:
            break;
    }
});