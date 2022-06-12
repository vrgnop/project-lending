const completedProjects = [{
    img: './images/image_2.1.png',
    city: 'Rostov-on-Don Admiral',
    apartmentArea: '81 m2',
    repairTime: '3.5 months',
    repairCost: 'Upon request'
}, {
    img: './images/image_2.png',
    city: 'Sochi Thieves',
    apartmentArea: '105 m2',
    repairTime: '4 months',
    repairCost: 'Upon request'
}, {
    img: './images/image_3.png',
    city: 'Rostov-on-Don Patriotic',
    apartmentArea: '93 m2',
    repairTime: '3 months',
    repairCost: 'Upon request'
}]

function initSlider () {
    const imageRightProjectsDiv = document.querySelector('.images-right-projects-div')
    const tittlesContainerRightProjects = document.querySelector('.tittles-container-right-projects')
    const cityLeftProjects = document.querySelector('.city')
    const apartmentAreaLeftProjects = document.querySelector('.apartment-area')
    const repairTimeAreaLeftProjects = document.querySelector('.repair-time')
    const repairCostAreaLeftProjects = document.querySelector('.repair-cost')
    const sliderLeftProjects = document.querySelector('.slider-left-projects')
    const pointsArrowSliderLeftProjects = document.querySelector('.points-arrow-slider-left-projects')
    const projectsContainer = document.querySelector('.projects-container')
    createElements()
    function createElements () {
        completedProjects.forEach( (element, index) => {
            let imageRightProjects = `<img src="${element.img}" class='image-right-projects n${index} ${index === 0 ? 'active' : ''}'  id='${element.city.replace(' ', '_')}' data-index = ${index} alt='${element.city}'>`
            imageRightProjectsDiv.innerHTML += imageRightProjects
            let tittleRightProjects = `<li class="h4-tittle-projects-right-projects"><a href='#${element.city.replace(' ', '_')}' class='link-tittle-projects-right-projects n${index} ${index === 0 ? 'active' : ''} ${element.city.replace(' ', '_')}'> ${element.city}</a></li>`
            tittlesContainerRightProjects.innerHTML += tittleRightProjects
            let cityCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.city}</p>`
            cityLeftProjects.innerHTML += cityCharacteristicProject
            let apartmentAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.apartmentArea}</p>`
            apartmentAreaLeftProjects.innerHTML += apartmentAreaCharacteristicProject
            let repairTimeAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.repairTime}</p>`
            repairTimeAreaLeftProjects.innerHTML += repairTimeAreaCharacteristicProject
            let repairCostAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.repairCost}</p>`
            repairCostAreaLeftProjects.innerHTML += repairCostAreaCharacteristicProject
            let pointArrowSliderLeftProjects = `<div class="point-arrow-slider-left-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}"></div>`
            pointsArrowSliderLeftProjects.innerHTML += pointArrowSliderLeftProjects
        })
    }
    arrowSlider()
    function arrowSlider () {
        sliderLeftProjects.querySelectorAll('.arrow-slider-left-projects').forEach((element) => {
            let newIndex = 0
            element.addEventListener('click', () => {
                let index = +imageRightProjectsDiv.querySelector('.active').getAttribute('data-index')
                element.classList.contains('left-arrow-slider-left-projects') ? newIndex = index > 0  ? index - 1 : completedProjects.length - 1 : newIndex = index < completedProjects.length - 1 ? index + 1 : 0
                moveSlider(newIndex)
            })
        })
    }
    pointSlider()
    function pointSlider () {
        pointsArrowSliderLeftProjects.querySelectorAll('.point-arrow-slider-left-projects').forEach( (element, index) => {
           element.addEventListener('click', () => {
               moveSlider(index)
            })
        })
    }
    function moveSlider(number) {
        projectsContainer.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
        projectsContainer.querySelectorAll('.n' + number).forEach(element => element.classList.add('active'))
    }
    function loopSlider () {
        setInterval(() => {
           let index = +imageRightProjectsDiv.querySelector('.active').getAttribute('data-index')
            let newIndex = index < completedProjects.length - 1 ? index + 1 : 0
            moveSlider(newIndex)
        }, 8000)
    }
    loopSlider()
    function tittleSlider () {
        document.querySelectorAll('.link-tittle-projects-right-projects').forEach( (element,index) => {
            element.addEventListener('click', (event) => {
                event.preventDefault()
                moveSlider(index)
            })
        })
    }
    tittleSlider()
}




document.addEventListener('DOMContentLoaded', initSlider)