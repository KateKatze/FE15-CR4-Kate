var arr = JSON.parse(array);

for (let ind in arr) {
    document.getElementById("result").innerHTML += `
    <div class="card col-lg-3 col-md-4 col-sm-9 m-1 shadow p-3 mb-5 bg-white rounded">
        <div class="card-header rounded bg-dark text-light p-2 mb-1 d-flex justify-content-between ">
            <h6>Task</h6>
            <i class="fa fa-bookmark-o" style="font-size:18px"></i> 
        </div>

        <img src="${arr[ind].image}" class="card-img-top" alt="${arr[ind].taskName}">

        <div class="card-body">
            <h4 class="card-title">${arr[ind].taskName}</h4>
            <hr>
            <p class="card-text">${arr[ind].description}</p>
            <hr>

            <div class="d-flex text-align justify-content-start">
                <button class="priorlvl btn btn-md mb-1 bg-transparent"><i class="fa fa-hand-peace-o" style="font-size:20px;"></i></button>
                <h6 class="mt-3">Priority level: </h6>
                <p id="importn${ind}" class="card-text rounded bg-success px-3 py-2 mt-1 ms-2 mb-2">${arr[ind].importance}</p>
            </div>

            <div class="d-flex">
                <button class="importance btn btn-md mb-1 bg-transparent"><i class="fa fa-bomb" style="font-size:20px;"></i></button>
                <h6 class="mt-2">Due time: </h6>
                <p class="card-text pt-1 ms-2">${arr[ind].dueTime}</p>
            </div>
        </div>

        <div class="card-footer">
            <button class="btn btn-sm bg-danger text-light me-2">
                <i class="fa fa-trash-o me-1"></i>Delete
            </button>
            <button class="btn btn-sm bg-success text-light">
                <i class="fa fa-check me-1"></i>Done
            </button>
        </div>

    </div>
    `;
}


for (let ind in arr) {

    document.getElementsByClassName("priorlvl")[ind].addEventListener("click", function() {
        var counting = document.getElementById(`importn${ind}`);

        if (counting.innerHTML < 5) {
            counting.innerHTML++;
        }

        if (counting.innerHTML <= 1) {
            counting.classList.add("bg-success");
        } else if (counting.innerHTML <= 3) {
            counting.classList.add("bg-warning");
        } else {
            counting.classList.add("bg-danger");
        }
    })
}


// Sort priority level / at least I tried!

// 1. var arr (line 1) is already one array
// 2. arr.sort(function(${arr[ind].importance}, ${arr[ind + 1].importance}){return ${arr[ind + 1].importance} - ${arr[ind].importance}});


// Another sorting idea:
// var priorlvl = document.getElementsByClassName("priorlvl");
// 
// if (priorlvl[i].innerHTML > priorlvl[i + 1].innerHTML)
//     priorlvl[i].innerHTML = `Priority level: ${count}`;
// Bubble Sort



// Priority level buttons:


// First solution, buttons had an issue (count number was directly in the button, but colors didn´t change (only at the first loop)


// for (let val of arr) {
//     document.getElementById("result").innerHTML += `
//     <div class="card col-lg-3 col-md-4 col-sm-11 m-1 shadow p-3 mb-5 bg-white rounded">
//     <div class="card-header ">Task</div>
//     <img src="${value.image}" class="card-img-top" alt="${value.taskName}">
//     <div class="card-body">
//       <h5 class="card-title">${value.taskName}</h5>
//       <hr>
//       <p class="card-text">${value.description} <br></p>
//       <hr>
//       <p class="card-text">${value.dueTime} <br></p>
//       <hr>
//       <p 
//       <button id="importance" class="impBut btn btn-md border pt-1 pb-1 mb-3 bg-success "><i class="fa fa-hand-peace-o"></i> Priority level:</button> <p class="impBut card-text">${value.importance}</p>
//       <p class="card-text float-end">
//       <button class="btn btn-sm bg-danger text-light me-2"><i class="fa fa-trash-o me-1"></i>Delete</button><button class="btn btn-sm bg-success text-light"><i class="fa fa-check me-1"></i>Done</button>
//       </p>
//     </div>
//   </div>

// second loop makes button stay red
// var count = 0;
// var impBut = document.getElementsByClassName("impBut");

// for (let i in arr) {
//     impBut[i].onclick = function() {
//         count++;
//         if (count <= 5) {
//             impBut[i].innerHTML = `Priority level: ${count}`;
//         }

//         switch (true) {
//             case (count >= 0 && count <= 1):
//                 impBut[i].classList.add("bg-success");
//                 break;
//             case (count >= 2 && count <= 3):
//                 impBut[i].classList.add("bg-warning");
//                 break;
//             case (count >= 4 && count <= 5):
//                 impBut[i].classList.add("bg-danger");
//                 break;
//             case (count > 5):
//                 count = 0;
//         }
//     }
// }