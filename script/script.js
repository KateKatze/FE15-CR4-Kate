// getting stuff from the JSON

var arr = JSON.parse(array);

// table for the info made

console.table(arr);

// extract info in the cards

for (let value of arr) {
    document.getElementById("result").innerHTML += `
    <div class="card cardDetails col-lg-3 col-md-4 col-sm-11 m-1 shadow p-3 mb-5 bg-white rounded">
    <img src="${value.image}" class="card-img-top" alt="${value.taskName}">
    <div class="card-body">
      <h5 class="card-title">${value.taskName}</h5>
      <hr>
      <p class="card-text">${value.description} <br></p>
      <hr>
      <p class="card-text">${value.dueTime} <br></p>
      <hr>
      <p>Priority level:<button class="btn btn-sm pt-1 pb-1">${value.importance}</button></p><br>
      <button class="btn btn-sm bg-danger text-light me-2">Delete</button><button class="btn btn-sm bg-success text-light">Done</button>
    </div>
  </div>
    `;
}