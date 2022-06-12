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
    createImages ()
    let linkTittlesRightProjects = document.querySelector('.link-tittle-projects-right-projects')
    function createImages () {
        completedProjects.forEach( (element, index) => {
            let imageRightProjects = `<img src="${element.img}" class='image-right-projects n${index} ${index === 0 ? 'active-img' : ''}'  id='${element.city.replace(' ', '_')}' data-index = ${index} alt='${element.city}'>`
            imageRightProjectsDiv.innerHTML += imageRightProjects
            let tittleRightProjects = `<li class="h4-tittle-projects-right-projects"><a href='#${element.city.replace(' ', '_')}' class='link-tittle-projects-right-projects n${index} ${index === 0 ? 'active-tittle' : ''} ${element.city.replace(' ', '_')}'> ${element.city}</a></li>`
            tittlesContainerRightProjects.innerHTML += tittleRightProjects
            let cityCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active-p' : ''} data-index = ${index}">${element.city}</p>`
            cityLeftProjects.innerHTML += cityCharacteristicProject
            let apartmentAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active-p' : ''} data-index = ${index}">${element.apartmentArea}</p>`
            apartmentAreaLeftProjects.innerHTML += apartmentAreaCharacteristicProject
            let repairTimeAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active-p' : ''} data-index = ${index}">${element.repairTime}</p>`
            repairTimeAreaLeftProjects.innerHTML += repairTimeAreaCharacteristicProject
            let repairCostAreaCharacteristicProject = `<p class="p-right-projects n${index} ${index === 0 ? 'active-p' : ''} data-index = ${index}">${element.repairCost}</p>`
            repairCostAreaLeftProjects.innerHTML += repairCostAreaCharacteristicProject
            // let apartmentAreaCharacteristicProject = `<p>${element.apartmentArea}</p>`
            // console.log(characteristicLeftProjects)
        })
    }



    console.log(cityLeftProjects.querySelector(".active-p"))
    function moveSlider(number) {
        imageRightProjectsDiv.querySelector('.active-img').classList.remove('active-img')
        imageRightProjectsDiv.querySelector('.n' + number).classList.add('active-img')
        cityLeftProjects.querySelector('.active-p').classList.remove('active-p')
        cityLeftProjects.querySelector('.n' + number).classList.add('active-p')
        apartmentAreaLeftProjects.querySelector('.active-p').classList.remove('active-p')
        apartmentAreaLeftProjects.querySelector('.n' + number).classList.add('active-p')
        repairTimeAreaLeftProjects.querySelector('.active-p').classList.remove('active-p')
        repairTimeAreaLeftProjects.querySelector('.n' + number).classList.add('active-p')
        repairCostAreaLeftProjects.querySelector('.active-p').classList.remove('active-p')
        repairCostAreaLeftProjects.querySelector('.n' + number).classList.add('active-p')
        tittlesContainerRightProjects.querySelector('.active-tittle').classList.remove('active-tittle')
        tittlesContainerRightProjects.querySelector('.n' + number).classList.add('active-tittle')
    }
    function loopSlider () {
        setInterval(() => {
           let index = +imageRightProjectsDiv.querySelector('.active-img').getAttribute('data-index')
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