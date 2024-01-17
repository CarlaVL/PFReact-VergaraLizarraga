const products =[
    {
        id: '1',
        name: 'Manzana',
        price: 500,
        category: 'Fruta',
        img: '',
        stock: 80,
        description: 'Descrpcion Manzana'
    },
    {id:'2', name:'Frutilla', price:1025, category: 'fruta', img:'', stock: 30, description:'Descripciòn Frutilla'},
    {id:'3', name:'Banana', price:450, category: 'fruta', img:'', stock: 80, description:'Descripciòn Banana'}
]

export const getProducts =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}