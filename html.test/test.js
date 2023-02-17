 var teacher={
 firstname:"musab",
 lastname :"ali",
 lang:["javaScript","css","html"]
 }
  var viewt = document.getElementById('viewteacher')

function viewtaceh(teacher){
 var firstNameelem= document.getElementById('fname');
 var lastNameelem = document.getElementById('lname');
 var teachername = document.getElementById('teachername');
 var langugestext= document.getElementById('languges');

  firstNameelem.value  = teacher.firstname;
  lastNameelem.value  = teacher.lastname ; 
  teachername.innerText=`${teacher.firstname } ${ teacher.lastname}`;
  langugestext.innerHTML='';
  teacher.lang.forEach(lan => {
     var node = document.createElement('li');
     var el = document.createTextNode(lan);
     node.appendChild(el);
     langugestext.appendChild(node);
  });
}


function addskil(){
   var addskils = document.getElementById('skil');
   teacher.lang.push(addskils.value);
   if(addskils.value == ''){return}; 
   addskils.value='';
   viewtaceh(teacher);

   }
  function saveteacher(ev){
    var firstNameelem= document.getElementById('fname');
    var lastNameelem = document.getElementById('lname');

   teacher.firstname=firstNameelem.value;
   teacher.lastname=lastNameelem.value;


   viewtaceh(teacher);

  }


   viewtaceh(teacher);