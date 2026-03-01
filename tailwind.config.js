
const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => alldisplayProducts(data));
};

const alldisplayProducts = (products) => {
  const productsTabContainer = document.getElementById("products-container");
  productsTabContainer.innerHTML = "";

  for (let product of products) {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    <div class="card bg-gray-200 h-[550px] shadow-sm rounded-lg gap-5">
        <figure>
      <div class="py-5 h-full">
      <img src="${product.image}" class= "h-full" alt="Bag" />
      </div>
          
        </figure>
        <div class="card-body">
            <div class="badge py-2 badge-outline bg-blue-600 text-white">${product.category}</div>

          <div class="flex justify-between">
            <h2 class="card-title">${product.title}</h2>
            <span class="text-lg"><i class="fa-solid fa-star"></i>${product.rating.rate} (${product.rating.count})</span>
          </div>
          <p class="text-lg font-bold">$${product.price}</p>
          <div class="card-actions justify-between">
            <div class="badge badge-outline btn btn-primary text-white">Products</div>
          </div>
        </div>
      </div>`;

    productsTabContainer.append(btnDiv);
  }
};

loadProducts();

const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories-container");
  categoriesContainer.innerHTML = "";
  console.log(categories);

  for (let category of categories) {
    // console.log(category);
    const onlyTextCategory = category.replace(/'/g, "\\'");
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       
       <button onClick = "showProductByCategory('${onlyTextCategory}')" class="btn btn-primary"> ${category}  </button>`;

    categoriesContainer.append(btnDiv);
  }
};

const showProductByCategory = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => displyProducts(data));

  const productsTabContainer = document.getElementById("products-container");
  productsTabContainer.innerHTML = "";
  //   console.log(categories);

  const displyProducts = (data) => {
    for (let product of data) {
      // console.log(category);

      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `
    <div class="card bg-gray-200 h-[550px] shadow-sm rounded-lg gap-5">
        <figure>
      <div class="py-5 h-full">
      <img src="${product.image}" class= "h-full" alt="Bag" />
      </div>
          
        </figure>
        <div class="card-body">
            <div class="badge py-2 badge-outline bg-blue-600 text-white">${product.category}</div>

          <div class="flex justify-between">
            <h2 class="card-title">${product.title}</h2>
            <span class="text-lg"><i class="fa-solid fa-star"></i>${product.rating.rate} (${product.rating.count})</span>
          </div>
          <p class="text-lg font-bold">$${product.price}</p>
          <div class="card-actions justify-between">
            <div class="badge badge-outline btn btn-primary text-white">Products</div>
          </div>
        </div>
      </div>`;

      productsTabContainer.append(btnDiv);
    }
  };
};

loadCategories();
