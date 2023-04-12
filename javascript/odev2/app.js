//Ekle butonu
var add = document.querySelector('#liveToastBtn')
add.addEventListener('click',newElement)

function newElement(){
 var liDom=document.createElement('li')
 var UlDom=document.querySelector('#list')
 var task=document.getElementById('task')
 
 if(1){
   liDom.textContent=task.value;
   UlDom.append(liDom)
   task.value="";
 }
 else{
 

 }



}


function remove(){

}