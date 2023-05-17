const kapat = `<span class="close" onclick="remove(parentNode)" aria-label="Close" aria-hidden="true">&times;</span>`;
var UlDom = document.querySelector('#list') //liste etiketini seçtik
var task = document.querySelector('#task') //input verilerimizi alacağımız ogeyi seçtik
let listItems = [];

// localStoragedan verileri alma
const storedIt = JSON.parse("listItems")
if (storedIt) {
    try {
        listItems = JSON.parse(storedIt)
    } catch (error) {
        console.error("Geçersiz JSON formatı", storedIt)
    }
}


//toggle ile sınıfa geçiş yaparız
function liClicked() {
    this.classList.toggle("checked")
}
//Ekle butonu
function newElement() {

    if (task.value.trim() == "") {
        $('.error').toast('show');   //burada index dosyamızdaki Toast bölümündeki error class seçilir
    }else {
        let liDom = document.createElement('li')  //yeni bir liste elemanı oluşturduk
        liDom.innerHTML = `${task.value}${kapat}`;
        liDom.addEventListener("click", liClicked)
        UlDom.append(liDom)     //Listeye elemanımızı ekledik
        listItems.push(task.value)
        console.log(listItems)
        localStorage.setItem("items", JSON.stringify(listItems)); //arrayi update etme
        $('.success').toast('show');
        task.value = "";
    }
}


function remove(parentNode) {
    parentNode.remove();

    const value = parentNode.innerText;
    const index = listItems.indexOf(value)
    if (index !== -1){
        listItems.splice(index,1)
        localStorage.setItem("listItems",JSON.stringify(listItems))
    }

}


