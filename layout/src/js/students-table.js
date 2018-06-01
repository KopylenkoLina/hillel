$('#table-st-btn').click(function() {
  var form = $("<form></form>");
  form.append (
    $("<input/>",{ 
    type: 'text', 
    name: 'firstName', 
    placeholder: 'Enter first name'}).addClass('input-wrap'),
    $("<input/>",{ 
    type: 'text', 
    name: 'lastName', 
    placeholder: 'Enter last name'}).addClass('input-wrap'),
    $("<input/>",{ 
    type: 'number', 
    name: 'age', 
    placeholder: 'Enter age'}).addClass('input-wrap'),
    $("<input/>",{ 
    type: 'text', 
    name: 'faculty', 
    placeholder: 'Enter faculty'}).addClass('input-wrap'),
    $("<input/>",{ 
    type: 'number', 
    name: 'course', 
    placeholder: 'Enter course'}).addClass('input-wrap'),
    $("<input/>",{ 
    type: 'text', 
    name: 'site', 
    placeholder: 'Enter web-site'}).addClass('input-wrap'),
    $("<button>Add</button>").addClass('add-btn')
  ).addClass('form')
  
  $("#table").append(form);
}) 

$('add-btn').click(function(){
  
})