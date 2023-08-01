import getData from "./index.js";

(async () => {
    console.log(await getData(1));
})();

//package.json dosyasına type :"module" ekle