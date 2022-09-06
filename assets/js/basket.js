let products = [];

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
}

let tableBody = document.querySelector(".table .table-body");

for (const product of products) {
  tableBody.innerHTML += `<tr>
    <td data-id="${product.id}"><img src="${product.image}" height="100px" width="100px" class="card-img-top" alt="..."></td>
    <td>${product.name}</td>
    <td>${product.desc}</td>
    <td>${product.count}</td>
    <td class="icone"><i class="fa-solid fa-trash"></i></td>
  </tr>`;
}

let deleteIcon = document.querySelectorAll(".icone");

deleteIcon.forEach((element) => {
  element.addEventListener("click", function () {
    let id = parseInt(this.parentNode.firstElementChild.getAttribute("data-id"));
    products = products.filter(m=>m.id != id);
    localStorage.setItem("products", JSON.stringify(products));
    this.parentNode.remove();
    document.querySelector("sup").innerText = getProductsCount(products);
    
  });
});
document.querySelector("sup").innerText = getProductsCount(products);

function getProductsCount(items) {
  let resultCount = 0;
  for (const item of items) {
    resultCount += item.count;
  }
  return resultCount;
}

// document.querySelector("sup").innerText = getDeleteCount(products);
// function getDeleteCount(items) {
//     let deleteCount = 0;
//     for (const item of items) {
//         deleteCount = getProductsCount(products) - item.count;
//     }
//     return deleteCount;
//   }
