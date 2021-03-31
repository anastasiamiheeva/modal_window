let fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://avatars.mds.yandex.net/get-pdb/905548/17f27a51-9b7c-4677-a803-5c3704075b67/s1200?webp=false'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://avatars.mds.yandex.net/get-pdb/964102/682da809-0980-4ca1-be09-7301c96312aa/s1200?webp=false'},
  {id: 3, title: 'Манго', price: 40, img: 'https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5e14954ea3f6e400b6cd5cf7_5e1497aa3d5f6900b6bfb8f2/scale_1200'}
];

const toHTML = fruit => `
  <div class="col">
    <div class="card">
      <img style="height: 300px;" class="card-img-top" src="${fruit.img}" alt="${fruit.title}">
      <div class="card-body">
        <h5 class="card-title">${fruit.title}</h5>
        <a href="#" class="btn btn-primary" data-btn="price" data-id=${fruit.id}>Посмотреть цену</a>
        <a href="#" class="btn btn-danger" data-btn="remove" data-id=${fruit.id}>Удалить</a>
      </div>
    </div>
  </div>
`;

function render() {
  const html = fruits.map(toHTML).join('');
  document.querySelector('#fruits').innerHTML = html;
};
render();

// передаю options
const priceModal = $.modal({
  title: 'Цена на Товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {text: 'Закрыть', type: 'primary', handler() {
      priceModal.close();
    }},
  ],
});

// const confirmModal = $.modal({
//   title: 'Вы уверены?',
//   closable: true,
//   width: '400px',
//   footerButtons: [
//     {text: 'Отменить', type: 'secondary', handler() {
//       confirmModal.close();
//     }},
//     {text: 'Удалить', type: 'danger', handler() {
//       confirmModal.close();
//     }},
//   ],
// })

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn;
  const id = +event.target.dataset.id;
  const fruit = fruits.find(f => f.id === id);
  
  if(btnType === 'price') {
    priceModal.setContent(`
      <p>Цена на ${fruit.title}: <strong>${fruit.price}$</strong></p>
    `);
    priceModal.open();
  } else if (btnType === 'remove') {
    $.confirm({
      title: 'Вы уверены?',
      content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
    }).then(() => {
      fruits = fruits.filter(f => f.id !== id); // удаляем fruit
      render() //чтобы обновить отображение
    }).catch(() => {
      console.log('cancel');
    })
    // confirmModal.setContent(`
    //   <p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>
    // `)
    // confirmModal.open();
  }
})
