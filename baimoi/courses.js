const overview = document.querySelector('.overview')
const curriculum =document.querySelector(".curriculum")
const instructor =document.querySelector(".instructor")
const reviews =document.querySelector(".reviews")

if(overview) {
    overview.addEventListener("click", function(){
        document.querySelector(".overview-child").style.display = "block"
        overview.classList.add('overview-1')
        curriculum.classList.remove('overview-1')
        instructor.classList.remove('overview-1')
        reviews.classList.remove('overview-1')
        document.querySelector(".curriculum-child").style.display = "none"
        document.querySelector(".instructor-child-0").style.display = "none"
        document.querySelector(".reviews-child-0-0").style.display = "none"
    })
}
if(curriculum) {
    curriculum.addEventListener("click", function(){
        document.querySelector(".overview-child").style.display = "none"
        document.querySelector(".curriculum-child").style.display = "block"
        curriculum.classList.add('overview-1')
        overview.classList.remove('overview-1')
        instructor.classList.remove('overview-1')
        reviews.classList.remove('overview-1')
        document.querySelector(".instructor-child-0").style.display = "none"
        document.querySelector(".reviews-child-0-0").style.display = "none"
    })
}
if(instructor) {
    instructor.addEventListener("click", function(){
        document.querySelector(".overview-child").style.display = "none"
        document.querySelector(".curriculum-child").style.display = "none"
        document.querySelector(".reviews-child-0-0").style.display = "none"
        document.querySelector(".instructor-child-0").style.display = "block"
        instructor.classList.add('overview-1')
        curriculum.classList.remove('overview-1')
        overview.classList.remove('overview-1')
        reviews.classList.remove('overview-1')

    })
}
if(reviews) {
    reviews.addEventListener("click", function(){
        document.querySelector(".overview-child").style.display = "none"
        document.querySelector(".curriculum-child").style.display = "none"
        document.querySelector(".instructor-child-0").style.display = "none"
        document.querySelector(".reviews-child-0-0").style.display = "block"
        instructor.classList.remove('overview-1')
        curriculum.classList.remove('overview-1')
        overview.classList.remove('overview-1')
        reviews.classList.add('overview-1')
    })
}