let input = document.querySelector('.text-box');
const button = document.querySelector('.button-3');
let checkbox= document.querySelectorAll('li .checkbox');
let para = document.querySelectorAll('li p');
button.onclick=displayData;
let size=2;
function getData(){
  let data = input.value;
  return data;

}

function displayData(){
 
  let data = getData();

  document.querySelector('ul').innerHTML += ` 
   <li class="list-item">
           <p>${data}</p>
            <input type="checkbox"  class="checkbox">
          </li>`;

          checkbox = document.querySelectorAll('li .checkbox');  
          para = document.querySelectorAll('li p');  
          console.log(para);
          attachCheckboxListeners();
}


function attachCheckboxListeners(){
for(let i=0; i<checkbox.length; i++){
  console.log(checkbox.length);
  checkbox[i].onclick=function(e){
    
  if(checkbox[i].checked){
   para[i].classList.add('checkedd');
  }
  else{
    para[i].classList.remove('checkedd');
  }
}
}
}