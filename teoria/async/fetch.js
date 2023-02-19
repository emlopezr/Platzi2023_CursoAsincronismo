import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

const getData1 = async urlApi => {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const getData2 = async urlApi => {
    try {
        const products = await getData1(`${urlApi}/products`)
        const product = await getData1(`${urlApi}/products/${products[0]?.id}`)
        const category = await getData1(`${urlApi}/categories/${product?.category?.id}`)

        console.log(products)
        console.log(product?.title)
        console.log(category?.name)
    } catch (error) {
        console.error(error)
    }
}

getData2(API)