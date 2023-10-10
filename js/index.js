"use strict";
function $(tag) {
  return document.querySelector(tag);
}

var products = [
  {
    product_image: "ghs__product__2.png",
    product_name: "Beautiful Babies Top Dress",
    product_price: "350$",
  },
  {
    product_image: "ghs__product__4.png",
    product_name: "Silver Color Hands Wrestling",
    product_price: "80$",
  },
  {
    product_image: "ghs__product__3.png",
    product_name: "Best Hands Wrestling Girls",
    product_price: "30$",
  },
  {
    product_image: "ghs__product__5.png",
    product_name: "Navy Blue Girls Sweater",
    product_price: "300$",
  },
  {
    product_image: "ghs__product__7.png",
    product_name: "Light Orange Color T-shirt",
    product_price: "220$",
  },
  {
    product_image: "ghs__product__6.png",
    product_name: "Beautiful Stylish Cap For Winter Season",
    product_price: "120$",
  },
  {
    product_image: "ghs__product__9.png",
    product_name: "Lower Price Clothes For Girls ",
    product_price: "160$",
  },
  {
    product_image: "ghs__product__8.png",
    product_name: "Warming Sweater For Winter Season",
    product_price: "260$",
  },
  {
    product_image: "ghs__product__10.png",
    product_name: "Warming Nighty For Girls",
    product_price: "140$",
  },
  {
    product_image: "ghs__product__11.png",
    product_name: "Pink And Purple Color Lipstick",
    product_price: "40$",
  },
  {
    product_image: "ghs__product__12.png",
    product_name: "Hot Red Color Lipstick",
    product_price: "70$",
  },
];

function loadProducts(products) {
  var productArea = $(".products");
  products.forEach((data) => {
    productArea.innerHTML += `
     <div class="product">
          <img src="images/${data.product_image}" />
          <div class="name">
            <strong id="product_name">${data.product_name}</strong>
            <span><b>Price : </b><p1>${data.product_price}</p1></span>
          </div>
        </div>
    `;
  });
}

window.onload = () => {
  setTimeout(() => {
    $(".loading").style.display = "none";
    loadProducts(products);
  }, 2000);
};

var searchbox = $("#search");
$("#search").addEventListener("input", (e) => {
  var allProducts = document.querySelectorAll("#product_name");
  var search = searchbox.value.trim().toLocaleLowerCase();
  for (var i = 0; i < allProducts.length; i++) {
    var searchData = allProducts[i];
    var searchTerm = searchData.textContent.toLocaleLowerCase();
    if (searchTerm.includes(search)) {
      searchData.parentElement.parentElement.style.display = "";
    } else {
      searchData.parentElement.parentElement.style.display = "none";
    }
  }
});
