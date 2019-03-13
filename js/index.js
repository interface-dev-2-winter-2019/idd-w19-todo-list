// let tasks = ["walk the dog", "feed the fish", "finish homework"];
// tasks.push("make dinner")

// console.log(tasks)

//let task = { id: 0, name: "walk the dog", complete: false }


// if (tasks[0].complete) {
//   console.log("This task IS complete");
// }
// else {
//   console.log("This task IS NOT complete")
// }


// DATA SET
let tasks = [
  { id: 0, name: "this is live", complete: false },
  { id: 1, name: "feed the fish", complete: true },
  { id: 2, name: "finish homework", complete: false }
];

// SELECTING DOCUMENT ELEMENTS TO CHANGE
const allTasks = document.getElementById('alltasks');  // our list of tasks (ol)


// OUTPUT THE RESULTS
allTasks.innerHTML = tasks.map(t => `<li class="task">${t.name}</li>` ).join('');