var btn = document.querySelector("button");
var inputfilled = document.querySelector("input");
var container = document.querySelector(".todos");
var count = 0;
btn.addEventListener('click', AddTodo);
function AddTodo() {
    var para = document.createElement("p");
    para.setAttribute("key", count);
    count += 1
    var node = document.createTextNode("New todolist!")
    para.appendChild(node)
    container.appendChild(para)
    para.addEventListener("click", deleteItem);
    para.innerHTML = inputfilled.value;
    inputfilled.value = ""
    function deleteItem() {
        container.removeChild(para)

    }
}