let products = [];

if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"))
}

let tableBody = document.querySelector(".table .table-body");


 

for (const product of products) {
    
    

    tableBody.innerHTML += `<tr>
    <td><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td class="icone"><i class="fa-solid fa-trash"></i></td>
  </tr>`

 // <i class="fa-solid fa-trash"></i>


  
}


let deleteIcon = document.querySelectorAll(".icone");

   
deleteIcon.forEach(element => {
    element.addEventListener("click",function(){
        this.parentElement.remove() 
        document.querySelector("sup").innerText=products.length
        console.log(products.length)

    })
       
});
document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items){
    let resultCount = 0;
    for (const item of items) {
        resultCount += item.count
    }
    return resultCount;
}


// let icon = document.createElement("i");

// icon.classList.add("fa-solid");

// icon.classList.add("fa-circle-xmark");

// icon.style.float = "right";

// icon.style.color = "red";

// icon.style.cursor = "pointer"

// li.append(icon);

// icon.onclick = function(){
//   li.remove();
// }
