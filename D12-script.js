const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 563492ad6f917000010000011db1140c062e41e7b1dafd8164d7c601",
  },
};

let loadSecondaryImagesButton = document.querySelector(
  ".load-secondary-images"
);
loadSecondaryImagesButton.addEventListener("click", () => {
  let searchedValue = search.value;
  searchedText.innerHTML = `This is what you see: Clouds Photos`;
  let container = document.querySelector(".row");
  search.value = "";
  fetch(`https://api.pexels.com/v1/search?query=clouds`, options)
    .then((response) => response.json())
    .then((response) => {
      let dataArray = response.photos;
      for (let data of dataArray) {
        console.log(dataArray);
        container.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-4 mt-2">
      
      <div class="card">
                                    <img src=${data.src.landscape} class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${data.alt}</h5>
                                      <p class="card-text">Photographer: ${data.photographer}</p>
                    
                                      <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
         </div>
          <small class="text-muted">${data.id}</small>
        </div>
                                    </div>
                                  </div>
                                  </div>
                                  </div>
                                  
                                  `;
      }
    })
    .catch((err) => console.error(err));
  container.innerHTML = "";
});

let loadImagesButton = document.querySelector(".load-images");
loadImagesButton.addEventListener("click", () => {
  let searchedValue = search.value;
  searchedText.innerHTML = `This is what you see: Nature Photos`;
  let container = document.querySelector(".row");
  search.value = "";
  fetch(`https://api.pexels.com/v1/search?query=nature`, options)
    .then((response) => response.json())
    .then((response) => {
      let dataArray = response.photos;
      for (let data of dataArray) {
        console.log(dataArray);
        container.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-4 mt-2">
      
      <div class="card">
                                    <img src=${data.src.landscape} class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${data.alt}</h5>
                                      <p class="card-text">Photographer: ${data.photographer}</p>
                    
                                      <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
         </div>
          <small class="text-muted">${data.id}</small>
        </div>
                                    </div>
                                  </div>
                                  </div>
                                  </div>
                                  
                                  `;
      }
    })
    .catch((err) => console.error(err));
  container.innerHTML = "";
});

let search = document.querySelector(".search");
let searchButton = document.querySelector(".search-button");
let searchedText = document.querySelector(".searched-text");
searchButton.addEventListener("click", () => {
  let searchedValue = search.value;
  searchedText.innerHTML = `This is what you searched for: ${searchedValue}`;
  let container = document.querySelector(".row");
  search.value = "";
  fetch(`https://api.pexels.com/v1/search?query=${searchedValue}`, options)
    .then((response) => response.json())
    .then((response) => {
      let dataArray = response.photos;
      for (let data of dataArray) {
        console.log(dataArray);
        container.innerHTML += `
      <div class="col-sm-6 col-md-4 col-xl-4 mt-2">
      
      <div class="card">
                                    <img src=${data.src.landscape} class="card-img-top" alt="...">
                                    <div class="card-body">
                                      <h5 class="card-title">${data.alt}</h5>
                                      <p class="card-text">Photographer: ${data.photographer}</p>
                    
                                      <div class="d-flex justify-content-between align-items-center">
         <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Hide
            </button>
         </div>
          <small class="text-muted">${data.id}</small>
        </div>
                                    </div>
                                  </div>
                                  </div>
                                  </div>
                                  
                                  `;
      }
    })
    .catch((err) => console.error(err));
  container.innerHTML = "";
});
