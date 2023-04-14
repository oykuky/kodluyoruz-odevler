//Ekle butonu
function newElement() {
    var liDom = document.createElement('li')  //yeni bir liste elemanı oluşturduk
    var UlDom = document.querySelector('#list') //liste etiketini seçtik
    var task = document.querySelector('#task') //input verilerimizi alacağımız ogeyi seçtik
    var toastDom = document.querySelector('#liveToast')

    if (task.value.length === 0 || task.value === "") {
        

    }
    else {

        liDom.textContent = task.value;  //input task'den gelen verileri li elementine yazdık
        UlDom.append(liDom)     //Listeye elemanımızı ekledik
        task.value = "";

    }




}


function remove() {

}


function GetToast(){
    
}