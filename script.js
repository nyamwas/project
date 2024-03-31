/* @Author: nyamwas
 * @Date: 30 March 2024 14:05:00 EAT
 * @LastModifiedBy: nyamwas
 * @LastModifiedTime: 30 March 2024 14:10:00 EAT
 */
let addItem = `<form action="" method="_post" id="form_3" >
<h1>Add item</h1><br><hr><br>
<label for="item_id">Id</label><input type="number" id="item_id"/><br>
<label for="item_name">Name</label><input type="text" id="item_name"/><br>
<label for="item_description">Description</label><input type="text" id="item_description"/><br>
<input type="submit"/><br>
</form>`

const body = document.querySelector("body")
const form = document.querySelector("form#form_3")

body.innerHTML += `<img src="./res/logo.png" width="150" height"150" alt="logo"/>`
body.innerHTML += `<div>${addItem}</div>`
class Item{
    constructor(id, name, description){
        this.id = id
        this.name = name
        this.description = description
    }
}

let items = new Array()
body.innerHTML += `<div id="myItems" style=""></div>`
function displayItems(){
    items.forEach((item) => {
        document.querySelector("div#myItems").innerHTML += `<div class="card"><p>${item.name}</p><p>${item.description}</p></div>`
    })
    return
}
displayItems()
document.querySelector("form#form_3").addEventListener('submit', (e) => {
    e.preventDefault()
    items.push(new Item(e.target[0].value, e.target[1].value, e.target[2].value))
    document.querySelector("div#myItems").innerHTML = ""
    displayItems()
    document.querySelector("form#form_3").reset()
})



