// Write your code here!
let main = document.querySelector('main');
main.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory")
newHeader.innerHTML= "YOUR-NAME is the champion";
document.body.append(newHeader);
