//Second Task

// angular.module('todoApp', [])
// .controller('TodoListController', function() {
//   var todoList=this;
//   todoList.x = ["Some Task 1","Some Task 2"];
 
// });

//Third-Fourth-Fifth Task

// angular.module('todoApp', [])
// .controller('TodoListController', function() {
//   var todoList = this;
//   todoList.taskAndStatus = [
//     {text:'Some Task 1', done:true},
//     {text:'Some Task 2', done:false}
//   ];
// });

//Sixth - Seventh Task

// angular.module('todoApp', [])
// .controller('TodoListController', function() {
//   var todoList = this;
//   todoList.taskAndStatus = [
//     {text:'Some Task 1', done:true},
//     {text:'Some Task 2', done:false}
//   ];

//   todoList.addTask =function(){
//     todoList.taskAndStatus.push({text:todoList.thisBoxInput, done:false});
//   };
// });


//Eighth Task

// angular.module('todoApp', [])
// .controller('TodoListController', function() {
//   var todoList = this;
//   todoList.taskAndStatus = [
//     {text:'Some Task 1', done:true},
//     {text:'Some Task 2', done:false}
//   ];

//   todoList.addTask =function(){
//     todoList.taskAndStatus.push({text:todoList.thisBoxInput, done:false});
//   };

//   todoList.deleteCompletedTask=function(){
//     var oldList=todoList.taskAndStatus;
//     todoList.taskAndStatus=[];
//     angular.forEach(oldList, function(obj) {
//               if (!obj.done) todoList.taskAndStatus.push(obj);
//             });
//   };

// });

//Nineth Task

angular.module('todoApp', [])
.controller('TodoListController', function() {
  var todoList = this;
  todoList.taskAndStatus = [
    {text:'Some Task 1', done:true},
    {text:'Some Task 2', done:false}
  ];

  todoList.addTask =function(){
    todoList.taskAndStatus.push({text:todoList.thisBoxInput, done:false});
  };

  todoList.deleteCompletedTask=function(){
    var oldList=todoList.taskAndStatus;
    todoList.taskAndStatus=[];
    angular.forEach(oldList, function(obj) {
              if (!obj.done) todoList.taskAndStatus.push(obj);
            });
  };

  todoList.countTask=function() {
    var count = 0;
    angular.forEach(todoList.taskAndStatus, function(obj) {
      count += obj.done ? 0 : 1;
    });
    return count;
  };

});
 