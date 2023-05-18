const kapat = `<span class="close" onclick="deleteItem(event)" aria-label="Close" aria-hidden="true">&times;</span>`;
var UlDom = document.querySelector('#list') //liste etiketini seçilir
var task = document.querySelector('#task') //input verilerimizi alacağımız ogeyi seçilir
let listItems = [];

// localStoragedan verileri alma
const storedIt = localStorage.getItem("items")
if (storedIt) {
    try {
        listItems = JSON.parse(storedIt)
    } catch (error) {
        console.error("Geçersiz JSON formatı :", storedIt)
    }
}

//toggle ile sınıfa geçiş yapma
function liClicked() {
    this.classList.toggle("checked")
}
//Ekle butonu
function newElement() {

    if (task.value.trim() == "") {
        $('.error').toast('show');   //burada index dosyamızdaki Toast bölümündeki error class seçilir
    } else {
        let liDom = document.createElement('li')  //yeni bir liste elemanı oluşturma
        liDom.innerHTML = `${task.value}${kapat}`;
        liDom.addEventListener("click", liClicked)
        UlDom.append(liDom)     //Listeye elemanı ekleme
        listItems.push(task.value)
        console.log(listItems)
        localStorage.setItem("items", JSON.stringify(listItems)); //arrayi update etme
        $('.success').toast('show');
        task.value = "";
    }
}

function deleteItem(event) {
    let node = event.target; //olayın gerçekleştiği öge
    let index = listItems.indexOf(node.parentNode.childNodes[0].nodeValue);  //eğer value listede yoksa -1 döner
    listItems.splice(index, 1)   // index değerine sahip 1 ögeyi kaldırır
    localStorage.setItem("items", JSON.stringify(listItems))
    node.parentNode.remove(); //olayın gerçekleştiği ögenin ebeveynini kaldırır böylece tam bir öge silinir
    console.log(listItems)

}
//event.target nesnesi olayın tetiklendiği HTML ögesidir. Olayın hedef ögesidir















