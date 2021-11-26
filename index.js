
let myLead = ["www.amizone.com","www.messaio.io"]
const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("up-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromStorage){
    myLead = leadsFromStorage
    render()
}

saveBtn.addEventListener("click",function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))

    render()
})

function render() {
    let my=""
    for(let i=0 ; i<myLead.length ; i++){

        my += `
        <li>
            <a target="_blank" href="${myLead[i]}">
                ${myLead[i]}
            </a>    
        </li>
        `
    }

ulEl.innerHTML = my
}
// Logging out the elements in myLead

deleteBtn.addEventListener("dblclick",function() {
    localStorage.clear()
    myLead = []
    render()
})