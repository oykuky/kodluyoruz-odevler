const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "./img/tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "./img/chicken-ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "./img/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "./img/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "./img/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "./img/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "./img/Jajangmyeon-Korean-Noodle.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "./img/MaYi.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "./img/Dorayaki.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const btnContainer = document.querySelector(".btn-container");
const section = document.querySelector(".section-center");

//Kategorileri listeleme
const reducer = function (arr, item) {
  if (!arr.includes(item.category))
    arr.push(item.category);
  return arr;
}
let reducedCategory = menu.reduce(reducer, ['ALL'])

function List() {

  // Butonları oluşturma
  // data-id ile kategoriye benzersiz kimlik atanır ve daha kolay erişilip filtreleme yapılabilir
  const btns = reducedCategory.map(function (category) {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category} > ${category} </button>`;
  }).join('');
  btnContainer.innerHTML = btns;

  //menü filtreleme
  const btnsF = document.querySelectorAll('.btn-item');
  btnsF.forEach(function (itmBtn) {
    itmBtn.addEventListener("click", function (e) {
      const category = e.target.dataset.id; // seçilen kategori butonun data-id karakteri alınır
      const filteredMenu = menu.filter((item) => {
        return category === "ALL" || item.category === category;
      });
      menuList(filteredMenu);

    })
  })
}


const menuList = (category) => {
  section.innerHTML = ""; //section içeriğini önce temizle
  category.forEach((food) => {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add('menu-items', 'col-lg-6', 'col-sm-12')
    foodDiv.innerHTML = `
    <img src =${food.img} class = "photo">
    <div class = "menu-info">
      <div class = "menu-title"
        <h4>${food.title}</h4>
        <h4>${food.price}</h4>
      </div>
        <p class = "menu-text">${food.desc}</p>
    </div>

    `;
    section.appendChild(foodDiv);

  });
};


List();
