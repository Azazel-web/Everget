const headerBurger = document.querySelector('.header__burger')
const body = document.querySelector('body')
const headerMenu = document.querySelector('.header__menu')

headerBurger.addEventListener('click', function () {
    headerMenu.classList.toggle('active')
    headerBurger.classList.toggle('active')
    body.classList.toggle('clock')
})


const header = document.querySelector('.header');
let scrolled;
const menuLink = document.querySelectorAll('.menu__link');
const headerSvg = document.querySelector('.header__svg')

window.addEventListener('scroll', function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let vh = window.innerHeight * 0.01;
    if (scrolled > vh * 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
        menuLink.forEach((elem) => {
            elem.style.color = '#000'
        })
        headerSvg.style.fill = '#000'
    }
    if (vh * 100 > scrolled) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
        menuLink.forEach((elem) => {
            elem.style.color = '#fff'
        })
        headerSvg.style.fill = '#fff'
    }

})

let connectSlider = document.getElementById('slider-connect');

noUiSlider.create(connectSlider, {
    start: 0,
    step: 1000,
    connect: 'lower',
    format: wNumb({
        decimals: 0,
        suffix: '₽',
        thousand: ' '
    }),
    range: {
        'min': 0,
        'max': 200000
    }
});

let telSelector = document.querySelectorAll('input[type="tel"]');
let passportSelector = document.querySelectorAll('input[name="passport"]');
let im = new Inputmask("+7 999 999 9999");

im.mask(telSelector);
Inputmask("99 99 999999").mask(passportSelector);

let validateForms = function (selector, rules) {
    new JustValidate(selector, {
        colorWrong: '$red',
        rules: rules,
        submitHandler: function (form) {

        }
    });
}
validateForms('.popup__form', {
    passport: {
        required: true,
        minLength: 4,
    },
    tel: {
        required: true,
        minLength: 4,
    },
    name: {
        required: true,
        minLength: 4,
    },
    lastname: {
        required: true,
        minLength: 4,
    },
    middlename: {
        required: true,
        minLength: 4,
    }
})
let skipValues = document.getElementById('skip-value-lower');

connectSlider.noUiSlider.on('update', function (values, handle) {
    skipValues.innerHTML = values;
});

const tooltipIcon = document.querySelector('.calculator__tooltip-icon')
const tooltipBody = document.querySelector('.calculator__tooltip-body')
tooltipIcon.addEventListener('mousedown', function () {
    tooltipBody.style.display = tooltipBody.style.display === 'none' ? 'block' : 'none'
})
const popupInputs = document.querySelectorAll('.popup__input')
const popupInputsLabels = document.querySelectorAll('.popup__input-label')
const popupForm = document.querySelector('.popup__form')

for (let i = 0; i < popupInputs.length; i++) {
    let popupInput = popupInputs[i]
    for (let j = 0; j < popupInputsLabels.length; j++) {
        let popupInputsLabel = popupInputsLabels[j]
        popupInput.addEventListener('focus', function () {
            popupInputsLabel.style.opacity = '1'
        })
        popupInput.addEventListener('blur', function () {
            popupInputsLabel.style.opacity = '0'
        })
    }
}


