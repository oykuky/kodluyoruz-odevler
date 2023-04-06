//1.SORU
//let dizi = [2,5,8,11,15,17];

let newl=dizi.filter((x)=>x>10).map((y)=>y*5)
console.log(newl);

/************************/

//2.SORU
//let dizi = [3,6,9,14,16];
function myFunction(dizi) {

    if (dizi.some((x) => x > 5)) {
        console.log('var')
    }

    else {
        console.log('yok')
    }
}
myFunction(dizi);

/************************/


//3.SORU
//let dizi = [2,3,4];

// Uygun dizi metodunu kullanarak yukarıda verilen dizinin elemanlarının çarpımının sonucunu (24) veren bir fonksiyon yazınız.

function carpimYap(ac, sayi) {
    return ac * sayi;
}

const sonuc = dizi.reduce(carpimYap, 1);
console.log(sonuc)