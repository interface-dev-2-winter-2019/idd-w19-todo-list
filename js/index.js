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
  { id: 0, name: `Write a "print" function`, complete: true },
  { id: 1, name: `Add new tasks`, complete: true },
  { id: 2, name: `Complete/checking tasks`, complete: true },
  { id: 3, name: `Store the tasks somewhere`, complete: false },
];



// SELECTING DOCUMENT ELEMENTS TO CHANGE
const allTasks = document.getElementById('alltasks');  // our list of tasks (ol)


// OUTPUT THE RESULTS
// Map runs once for each Object in the Array
allTasks.innerHTML = tasks.map(oneTask => 
  `<li class="task${(oneTask.complete) ? ' complete' : ''}">
    <label>
      <input type="checkbox" name="task${oneTask.id}" ${(oneTask.complete) ? ' checked' : ''}>
      ${oneTask.name}
    </label>
  </li>` ).join('');


// var name = "George Brown";
// My friend's name is Geroge Brown, he's great!
// "My friend's name is " + name + ", he's great!";
// `My friend's name is ${name}, he's great!`