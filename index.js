let leads = []

const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads);
}

inputBtn.addEventListener('click', function() {
    leads.push(inputEl.value);
    localStorage.setItem('myLeads', JSON.stringify(leads))
    inputEl.value = ''
    render(leads)
})

function render(myLeads) {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems;
}

