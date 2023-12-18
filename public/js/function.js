// Show product
const productsShow = document.getElementById("products-show");

if(productsShow) {
  productsShow.innerHTML = products
  .map((e) => {
    return `
    
    <div class="d-flex flex-column gap-2">
      <div class="product-card__media w-100">
        <img src="${e.image}" style="width: 100%;"/>
      </div>
      <div class="text-color-heading d-flex flex-column">
        <div class="font-signiko-negative text-product-heading">${e.name}</div>
        <div class="text-product-heading" style="font-size:18px;">$${e.price.toFixed(
          2,
        )}</div>
      </div>
    </div>
    
    `;
  })
  .join("");
}



// * Add item to header menu
document.getElementById("header-nav-items").innerHTML = headerNavItems
  .map((e) => {
    return `<li class="nav-item ${e.active}">
              <a href="${e.url}">${e.title}</a>
            </li>`;
  })
  .join("");

  // * Add item to header menu
document.getElementById("header-nav-items").innerHTML += `<div class="dropdown">
  <a class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Information 
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">My account</a></li>
    <li><a class="dropdown-item" href="#">Cart</a></li>
  </ul>
</div>`

const printMenuBar = () => {
  document.getElementById("offcanvas-body-header").innerHTML = headerNavItems
    .map((e) => {
      return `<li class="list-group-item">
              <a href="${e.url}">${e.title}</a>
            </li>`;
    })
    .join("");
};



