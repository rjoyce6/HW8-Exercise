// Step 3. Using javascript, putting some text into the element created in index

document.getElementById('idText1').innerHTML = "<p> Welcome to this page</p>";

// step 4. Making a string variable and using that to put some text into an H1 using JavaScript.
var strg = 'Hello';
document.getElementById('idText2').innerHTML = "<h1>"+strg+"</h1>";

// Step 5. Making a function that takes a user's input (value) and then console.logs the value.
// Initializing the function (make it start) when you click a button.
document.getElementById('clickMe').onclick = function (){userName()};

function userName (){
  var name = document.getElementById('name').value;
  name = "How are you," + name +"?";
  console.log(name);
}

// Step 6. Makingan array with five entries. Using a loop, console.log each entry.
var arr = ['name1', 'name2', 'name3', 'name4', 'name5']
for ( var i = 0 ; i < arr.length; i++){
  console.log(arr[i]);
}

// Step 7 Creating an object with at least three properties. Console.log each property.
var student1 = {
  name: 'Ann',
  grade: 'A',
  age: 19
}

for (var i in student1){
  console.log(i + ":" +student1[i]);
}


//step 8.
var student2 = {
  name: 'Josh',
  grade: 'A+',
  age: 20
}

var arrStudent = [student1, student2];

for (var i =0; i < arrStudent.length; i++)
console.log(arrStudent[i].grade)
