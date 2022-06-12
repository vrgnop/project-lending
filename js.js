//Представим, что мы получаем такой объект с бэка. Ссылки вероятно будут другими, но по идее слайдер будет работать и с обычными ссылками
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

//Вводим все необходимые элементы в которых будет работать эффект слайдера
function initSlider () {
    const imageRightProjectsDiv = document.querySelector('.images-right-projects-div') //Блок картинок
    const tittlesContainerRightProjects = document.querySelector('.tittles-container-right-projects') //Блок Заголовков
    const cityLeftProjects = document.querySelector('.city') // Город
    const apartmentAreaLeftProjects = document.querySelector('.apartment-area') // Плошадь
    const repairTimeAreaLeftProjects = document.querySelector('.repair-time') //Сроки
    const repairCostAreaLeftProjects = document.querySelector('.repair-cost') // Стоимость
    const sliderLeftProjects = document.querySelector('.slider-left-projects') // Блок слайдера (стрелки+точки)
    const pointsArrowSliderLeftProjects = document.querySelector('.points-arrow-slider-left-projects') // Блок точек
    const projectsContainer = document.querySelector('.projects-container') // Весь блок целиком. Он понадобится для упрощения функции слайдера

    //Создаем нужные элементы внутри блоков внутри блоков
    createElements()
    function createElements () {
        completedProjects.forEach( (element, index) => {
            //Картинки
            let imageRightProjects = `<img src="${element.img}" class='image-right-projects n${index} ${index === 0 ? 'active' : ''}'  id='${element.city.replace(' ', '_')}' data-index = ${index} alt='${element.city}'>`
            imageRightProjectsDiv.innerHTML += imageRightProjects
            //Заголовки
            let tittleRightProjects = `<li class="h4-tittle-projects-right-projects"><a href='#${element.city.replace(' ', '_')}' class='link-tittle-projects-right-projects n${index} ${index === 0 ? 'active' : ''} ${element.city.replace(' ', '_')}'> ${element.city}</a></li>`
            tittlesContainerRightProjects.innerHTML += tittleRightProjects
            // Город
            let cityCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.city}</p>`
            cityLeftProjects.innerHTML += cityCharacteristicProject
            // Площадь
            let apartmentAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.apartmentArea}</p>`
            apartmentAreaLeftProjects.innerHTML += apartmentAreaCharacteristicProject
            // Сроки
            let repairTimeAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.repairTime}</p>`
            repairTimeAreaLeftProjects.innerHTML += repairTimeAreaCharacteristicProject
            // Стоимость
            let repairCostAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}">${element.repairCost}</p>`
            repairCostAreaLeftProjects.innerHTML += repairCostAreaCharacteristicProject
            // Точки
            let pointArrowSliderLeftProjects = `<div class="point-arrow-slider-left-projects n${index} ${index === 0 ? 'active' : ''} data-index = ${index}"></div>`
            pointsArrowSliderLeftProjects.innerHTML += pointArrowSliderLeftProjects
        })
    }

    // Создаем функцию, которая будет добавлять/убирать класс active сразу для всех элементов блока
    function moveSlider(number) {
        projectsContainer.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
        projectsContainer.querySelectorAll('.n' + number).forEach(element => element.classList.add('active'))
    }

    // Создаем функцию, смены слайда на заголовках
    tittleSlider()
    function tittleSlider () {
        document.querySelectorAll('.link-tittle-projects-right-projects').forEach( (element,index) => {
            element.addEventListener('click', (event) => {
                event.preventDefault()
                moveSlider(index)
            })
        })
    }

    // Создаем функцию, смены слайда на стрелках
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

    // Создаем функцию, смены слайда на точках
    pointSlider()
    function pointSlider () {
        pointsArrowSliderLeftProjects.querySelectorAll('.point-arrow-slider-left-projects').forEach( (element, index) => {
           element.addEventListener('click', () => {
               moveSlider(index)
            })
        })
    }

    // Создаем функцию, смены слайда в заданный интервал
    loopSlider()
    function loopSlider () {
        setInterval(() => {
           let index = +imageRightProjectsDiv.querySelector('.active').getAttribute('data-index')
            let newIndex = index < completedProjects.length - 1 ? index + 1 : 0
            moveSlider(newIndex)
        }, 8000)
    }
}


// Активируем функцию слайдера при загрузке дома
document.addEventListener('DOMContentLoaded', initSlider)