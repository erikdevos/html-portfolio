// Animate on scroll init
AOS.init();

// Smooth scrolling function
function smoothScroll(element, target) {
    element.scrollTo({ left: target, behavior: "smooth" })
}

// ScrollTo element function
function scrollToElement(id) {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

// Projects slider
document.querySelector(".projects-slider .paging-next").addEventListener("click", function() {
    console.log("Next")
    
    const slider = document.querySelector(".projects-slider ul")
    const parentWidth = document.querySelector(".projects-slider").offsetWidth
    const currentScroll = slider.scrollLeft
    const maxScroll = slider.scrollWidth - parentWidth

    if (currentScroll >= maxScroll) {
        smoothScroll(slider, 0) // Scroll back to the first item
    } else {
        smoothScroll(slider, currentScroll + parentWidth / 2) // Scroll to the next item
    }
})