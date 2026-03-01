
const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
};

const displayProducts = (products) => {
  const homeProducts = products.slice(0, 3);
  console.log(homeProducts);
  const lproductContainer = document.getElementById("latestProducts");
  lproductContainer.innerHTML = "";

  for (let product of homeProducts) {
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

    lproductContainer.append(btnDiv);
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

  for (let category of categories) {
    console.log(categories);

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       
       <button class="btn btn-outline btn-primary">  </button>`;

    categoriesContainer.append(btnDiv);
  }
};

loadCategories();

