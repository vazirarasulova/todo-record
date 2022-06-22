var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elAdd = document.querySelector(".form__add");
var elRecord = document.querySelector(".form__record");
var elList = document.querySelector(".todo__list");
var record = new webkitSpeechRecognition();
var todos = [];

record.lang = "uz-UZ";

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  elList.innerHTML = "";
  
  var elInputVal = elInput.value.trim();
  
  elInput.value = "";
  
  var todo = {
    title:elInputVal
  }

  todos.push(todo);

  for (var item of todos)  {
    
    var elItem = document.createElement("li");
    
    elItem.textContent = item.title;
    
    elItem.setAttribute("class", "mb-2 text-center")
    elList.appendChild(elItem);
  }
})


elRecord.addEventListener("click", function(){
  record.start();
});

record.onerror = function(){
  console.log("Error");
};

record.onend = function(){
  console.log("End");
};

record.onresult = function(evt){
  var result = evt.results[0][0].transcript;
 
  elList.innerHTML = "";

  var resultTodo = {
    title:result
  }

  todos.push(resultTodo);

  for (var item of todos) {
    var elItem = document.createElement("li");

    elItem.textContent = item.title;

    elItem.setAttribute("class", "mb-2 text-center")

    elList.appendChild(elItem);
  }
}  
