let fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://avatars.mds.yandex.net/get-pdb/905548/17f27a51-9b7c-4677-a803-5c3704075b67/s1200?webp=false'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://avatars.mds.yandex.net/get-pdb/964102/682da809-0980-4ca1-be09-7301c96312aa/s1200?webp=false'},
  {id: 3, title: 'Манго', price: 40, img: 'https://avatars.mds.yandex.net/get-zen_doc/1710676/pub_5e14954ea3f6e400b6cd5cf7_5e1497aa3d5f6900b6bfb8f2/scale_1200'}
]

// передаю options
const modal = $.modal({
  title: 'Nastya Modal',
  closable: true,
  content: `
    <p>Lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked');
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      console.log('Danger btn clicked');
      modal.close()
    }},
  ]
})
