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

