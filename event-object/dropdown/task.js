const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active')
})

dropdownItems.forEach( dropdownItem => {
    dropdownItem.addEventListener('click', event => {
        event.preventDefault()
        dropdownValue.innerHTML = event.target.textContent
        dropdownList.classList.remove('dropdown__list_active')
    })
})