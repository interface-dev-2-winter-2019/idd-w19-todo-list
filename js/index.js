// SAMPLE DATA SET
let tasks = [
  { id: 0, name: `Write a "print" function`, complete: false },
  { id: 1, name: `Add new tasks`, complete: false },
  { id: 2, name: `Complete/checking tasks`, complete: false },
  { id: 3, name: `Store the tasks somewhere`, complete: false },
];



// DOCUMENT ELEMENTS TO CHANGE
const allTasks = document.getElementById('alltasks');  // our list of tasks (ol)
const theTaskForm = document.getElementById('newtask');  // our new task input



// WHEN THE "NEW TASK" FORM IS SUBMIT
theTaskForm.addEventListener('submit', event => {
  // Yes the form was submit!!

  // Add the new task as an object to the tasks Array
  tasks.push({ 
    id: tasks.length,
    name: theTaskForm.task.value,
    complete: false
  });

  // Clear out the input field so we can use it again
  theTaskForm.task.value = '';

  // Reprint the new list
  printAllTasks();

  // prevent the submit from leaving the page
  event.preventDefault(); 
});



// WHEN A TASK CHECKLIST IS CLICKED
allTasks.addEventListener('click', event => {

  // Check if the item clicked within the "allTasks" was actually an input item (checkbox!)
  if (event.target.matches('input')) {
    
    // Store the "data-id" value from the checkbox we clicked
    let theId = event.target.dataset.id;

    // Run once for each task in our "tasks" Array
    tasks.forEach(oneTask => {
      // For each one, check if the id from this task (oneTask.id) matches "theId"
      if (oneTask.id == theId) {
        oneTask.complete = !oneTask.complete;
      }
    })

    // Reprint the whole list again to reflect the new changes to our dataset
    printAllTasks();
  }

  /* **NOTE**: In general, it's considered _"bad practice"_ to modify datasets in multiple places
    in code. A better pattern would be to create a function that specifically meant to modify the 
    data and pass it a copy of the array with modifications and let that one function overwrite
    the data and refresh the interface. This prevents having data manipulation happening all over
    the code, which would be really hard to trace if we had some kind of sync issue. */

});



// OUTPUT THE RESULTS
function printAllTasks() {
  // "map()" runs once for each Object in the Array
  allTasks.innerHTML = tasks.map(oneTask => 
    `<li class="task${  (oneTask.complete) ? ' complete' : ''  }">
      <label>
        <input type="checkbox"
               data-id="${ oneTask.id }"
               name="task${ oneTask.id }"
               ${  (oneTask.complete) ? ' checked' : ''  }>
        ${ oneTask.name }
      </label>
    </li>` ).join('');

  // Note we used the shortcut "ternary" operator to add "if" conditions into the output above.
  // Ternary format:
  //    ( trueOrFalseVariableOrCondition ) ? 'condition was true!' : 'condition was false!'
  // These can go right into our template evaluation blocks: ${ }
}



// START THE APPLICATION
// Pring the task list for the first time
printAllTasks();