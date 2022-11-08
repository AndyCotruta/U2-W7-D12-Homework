const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer 563492ad6f917000010000011db1140c062e41e7b1dafd8164d7c601",
  },
};

const loadImagesButton = document.querySelector(".load-images");
loadImagesButton.addEventListener("click", () => {
  fetch("https://api.pexels.com/v1/search?query=nature", options)
    .then((response) => response.json())
    .then((response) => {
      const dataArray = response.photos;
      console.log(dataArray);
      const container = document.querySelector(".row");
      for (let data of dataArray) {
        container.innerHTML += `<div class="col-sm-6 col-md-4 col-xl-3 mt-2">
        <div class="card">
  <img src=${data.src.landscape} class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${data.alt}</p>
  </div>
</div>`;
      }
    });
});

//  <div class="col-md-4">
//    <div class="card mb-4 shadow-sm">
//      <svg
//        class="bd-placeholder-img card-img-top first-images"
//        width="100%"
//        height="225"
//        xmlns="http://www.w3.org/2000/svg"
//        preserveAspectRatio="xMidYMid slice"
//        focusable="false"
//        role="img"
//        aria-label="Placeholder: Thumbnail"
//      >
//        <title>Placeholder</title>
//        <rect width="100%" height="100%" fill="#55595c" />
//        <text x="50%" y="50%" fill="#eceeef" dy=".3em">
//          Thumbnail
//        </text>
//      </svg>
//      <div class="card-body">
//        <p class="card-text">
//          This is a wider card with supporting text below as a natural lead-in to
//          additional content. This content is a little bit longer.
//        </p>
//        <div class="d-flex justify-content-between align-items-center">
//          <div class="btn-group">
//            <button type="button" class="btn btn-sm btn-outline-secondary">
//              View
//            </button>
//            <button type="button" class="btn btn-sm btn-outline-secondary">
//              Edit
//            </button>
//          </div>
//          <small class="text-muted">9 mins</small>
//        </div>
//      </div>
//    </div>
//  </div>;
