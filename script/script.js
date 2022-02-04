var arr = JSON.parse(array);

console.table(arr);

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
      <button id="importance" class="impBut btn btn-md border pt-1 pb-1 mb-3 ">Priority level: ${value.importance}</button><br>
      <button class="btn btn-sm bg-danger text-light me-2">Delete</button><button class="btn btn-sm bg-success text-light">Done</button>
    </div>
  </div>
    `;
}

var count = 0;
var impBut = document.getElementsByClassName("impBut");

for (let i in arr) {
    impBut[i].onclick = function() {
        count++;
        if (count <= 5) {
            impBut[i].innerHTML = `Priority level: ${count}`;
        }

        switch (true) {
            case (count <= 1):
                impBut[i].style.background = "green";
                break;
            case (count >= 2 && count <= 3):
                impBut[i].style.background = "yellow";
                break;
            case (count >= 4 && count <= 5):
                impBut[i].style.background = "red";
                break;
            case (count > 5):
                count = 0;
            default:
                impBut[i].style = "white";
        }

    }
}

if (impBut[i].innerHTML > impBut[i + 1].innerHTML)
    impBut[i].innerHTML = `Priority level: ${count}`;

Bubble Sort


// Try #2 

// for (let value in arr) {
//     document.getElementById("result").innerHTML += `
//     <div class="card cardDetails col-lg-3 col-md-4 col-sm-11 m-1 shadow p-3 mb-5 bg-white rounded">
//     <img src="${arr[value].image}" class="card-img-top" alt="${arr[value].taskName}">
//     <div class="card-body">
//       <h5 class="card-title">${arr[value].taskName}</h5>
//       <hr>
//       <p class="card-text">${arr[value].description} <br></p>
//       <hr>
//       <p class="card-text">${arr[value].dueTime} <br></p>
//       <hr>
//       <button id="importance${value}" class="impBut btn btn-md border pt-1 pb-1 mb-3 bg-${color} ">Priority level: ${arr[value].importance}</button><br>
//       <button class="btn btn-sm bg-danger text-light me-2">Delete</button><button class="btn btn-sm bg-success text-light">Done</button>
//     </div>
//   </div>
//     `;
// }

// for (let index in data) {
//     document.getElementsByClassName("impBut")[index].addEventListener("click", function() {
//         document.getElementById(`importance${value}`).innerHTML++;
//     })
// }

// Try #3

// let countEl = document.getElementById("importance");
// console.log(countEl);

// let count = 0;
// countEl.addEventListener("click", increment);

// function increment() {
//     count = count + 1;
//     countEl.innerText = `Priority level: ${count}`;;
// }