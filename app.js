const apiKey = "https://hectorabzar.com/wp-json/wp/v2/product";
const apiImg = "https://hectorabzar.com/wp-json/wp/v2/media";

async function fetchData() {
  try {
    const responseData = await fetch(apiKey);
    const data = await responseData.json();
    console.log(data);

    const container = document.getElementById("container");

    data.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const nameElement = document.createElement("h3");
      nameElement.classList.add("name");
      productElement.appendChild(nameElement);
      nameElement.textContent = product.title.rendered;

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      productElement.appendChild(descriptionElement);
      descriptionElement.textContent = product.excerpt.rendered; // جایگزین کنید با متغیر مربوط به توضیحات کالا در داده های API

      const imageElement = document.createElement("img");
      imageElement.classList.add("image");
      productElement.appendChild(imageElement);
      imageElement.src = product._links.featuredmedia; // جایگزین کنید با متغیر مربوط به عکس کالا در داده های API

      const priceElement = document.createElement("p");
      priceElement.classList.add("price");
      productElement.appendChild(priceElement);
      priceElement.textContent = product.price; // جایگزین کنید با متغیر مربوط به قیمت کالا در داده های API

      container.appendChild(productElement);
    });
  } catch (error) {
    console.log(error);
  }
}

fetchData();
