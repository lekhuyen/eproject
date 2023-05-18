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


// ........................................................
let listelements = document.querySelectorAll(".link")
listelements.forEach(listelement => {
    listelement.addEventListener("click", ()=>{
        if(listelement.classList.contains('active')){
            listelement.classList.remove('active')
        }else {
            listelements.forEach(liste => {
                liste.classList.remove('active')
            })
            listelement.classList.toggle('active')
        }
    })
})


const video1 = document.querySelector('.video-1-0')
const video2 = document.querySelector('.video-1-2')

if(video1) {
    video1.addEventListener('click', function(){
        document.querySelector('.modal-video-1').style.display= 'block'
        document.querySelector('.none-icon').style.display='block'
        document.querySelector('.none-icon-1').style.display='none'
        document.querySelector('.modal-video-2').style.display= 'none'
        video1.classList.add('video-background')
        video2.classList.remove('video-background')
    })
}
if(video2) {
    video2.addEventListener('click', function(){
        document.querySelector('.modal-video-1').style.display= 'none'
        document.querySelector('.modal-video-2').style.display= 'block'
        document.querySelector('.none-icon').style.display='none'
        document.querySelector('.none-icon-1').style.display='block'
        video1.classList.remove('video-background')
        video2.classList.add('video-background')

    })
}


const giaotrinhs = document.querySelectorAll('.giaotrinh')
const modal = document.querySelector('.modal-1')
const btnClose = document.querySelector('.modal-body-close')
const modalbody = document.querySelector('.modal-body-111')
for(const giaotrinh of giaotrinhs) {
    giaotrinh.addEventListener('click', function(){
        modal.classList.add('open')
    })
}
btnClose.addEventListener('click', function(){
    modal.classList.remove('open')
})
modal.addEventListener('click', function(){
    modal.classList.remove('open')
})
modalbody.addEventListener('click', function(e){
    e.stopPropagation()
})

