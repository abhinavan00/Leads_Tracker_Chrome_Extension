let leads = []

const inputBtn = document.querySelector('#input-btn')
const inputEl = document.querySelector('#input-el')
const ulEl = document.querySelector('#ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
const deleteBtn = document.querySelector('#delete-btn')
const saveTabBtn = document.querySelector('#savetab-btn')

if (leadsFromLocalStorage) {
    leads = leadsFromLocalStorage
    render(leads);
}

saveTabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        leads.push(tabs[0].url)
        localStorage.setItem('myLeads', JSON.stringify(leads))
        render(leads)
    })
})

function render(myLeads) {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><img src="image/link-icon.svg" alt="link-icon"><a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener('click', function() {
    leads.push(inputEl.value);
    localStorage.setItem('myLeads', JSON.stringify(leads))
    inputEl.value = ''
    render(leads)
})

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    leads = []
    render(leads)
})


