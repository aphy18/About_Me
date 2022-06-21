let locationOne = document.getElementById('location-one')
let locationTwo = document.getElementById('location-two')
let locationThree = document.getElementById('location-three')
let locationFour = document.getElementById('location-four')
let locationLine = document.querySelector('.location-line')
let locationArr = document.querySelectorAll('.location')
let about = document.getElementById('about-link')
let projects = document.getElementById('projects-link')
let goals = document.getElementById('goals-link')
let locationCounter = []

// about animation

let hobbies = document.querySelector('.hobbies')
let description = document.querySelector('.description')

// this is for the goals list animation
let listOne = document.querySelector('#list-1')
let listTwo = document.querySelector('#list-2')
let listThree = document.querySelector('#list-3')
let listFour = document.querySelector('#completed-goals-list')

// function aboutAnimation() {
//     description.style.opacity = 1;
//     description.style.transform = 'translateY(5px)'

//     setTimeout(() => {
//         hobbies.style.opacity = 1;
//         hobbies.style.transform = 'translateX(-1px)'
//     }, 750)
// }


function goalListAnimation() {
    listOne.style.opacity = 1;
    listOne.style.transform = 'translateY(-5px)';

    listTwo.style.opacity = 1;
    listTwo.style.transform = 'translateY(-5px)';

    listThree.style.opacity = 1;
    listThree.style.transform = 'translateY(-5px)';

    listFour.style.opacity = 1;
    listFour.style.transform = 'translateY(-5px)';
}



const changeLineHeight = () => {
    if (locationCounter.length < 4) {
        locationLine.style.height = ((locationCounter.length / locationArr.length) * 125) + '%'
    }
}

function changeProperties(index, keyword, location) {
    locationCounter[index] = keyword;
    location.style.borderColor = '#8139ED'
}



about.addEventListener('click',() => {
    locationCounter.splice(1,3)
})

projects.addEventListener('click',() => {
    locationCounter.splice(1,3)
})

goals.addEventListener('click', () => {
    locationCounter.splice(2,1)
})




window.addEventListener('scroll',() => {


    if (window.scrollY > 100) {
        changeProperties(0,'about',locationOne)
        changeLineHeight()
         
    } else {
        locationOne.style.borderColor = '#9570DD'
        locationCounter = []
        changeLineHeight()
        
    }

    if (window.scrollY > 580) {
        changeProperties(1,'projects',locationTwo)
        changeLineHeight()
    
         
    } else {
        locationTwo.style.borderColor = '#bca0dc'
        locationCounter.splice(1,1)
        changeLineHeight()
    }

    if (window.scrollY > 900) {
        changeProperties(2,'goals',locationThree)
        changeLineHeight()
        goalListAnimation()
    
       
    } else {
        locationThree.style.borderColor = '#9570DD'
        locationCounter.splice(2,1)
        changeLineHeight()
    }

    if (window.scrollY >= 1010) {
        setTimeout(() => {
            changeProperties(3,'contact',locationFour)
        }, 120)
        
      
    } else {
        locationFour.style.borderColor = '#bca0dc'
        locationCounter.splice(3,1)
    
    }


    console.log('scroll y -->',window.scrollY)

    console.log('location counter -->', locationCounter)
})

