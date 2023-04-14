const kapat = `<span class="close" onclick="remove(parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;
var UlDom = document.querySelector('#list') //liste etiketini seçtik
var task = document.querySelector('#task') //input verilerimizi alacağımız ogeyi seçtik

//toggle ile sınıfa geçiş yaparız
function liClicked(){
    this.classList.toggle("checked")
}
//Ekle butonu
function newElement() {
   
   
    if (task.value.length === 0 || task.value === "") {
        $('.error').toast('show');   //burada index dosyamızdaki Toast bölümündeki error class seçilir
    }
    else {
        let liDom = document.createElement('li')  //yeni bir liste elemanı oluşturduk
        // liDom.textContent = task.value;  
        // UlDom.innerHTML+=`${kapat}`
        liDom.innerHTML = `${task.value}${kapat}`;
        liDom.addEventListener("click",liClicked)
        UlDom.append(liDom)     //Listeye elemanımızı ekledik

        $('.success').toast('show');
        task.value = "";

    }
}


function remove(parentNode) {
    
}

