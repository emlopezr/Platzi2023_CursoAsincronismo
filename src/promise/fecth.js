import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';
const fetchData = urlApi => fetch(urlApi);

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => fetchData(`${API}/products/${products[0]?.id}`))
    .then(response => response.json())
    .then(product => fetchData(`${API}/categories/${product?.category?.id}`))
    .then(response => response.json())
    .then(category => console.log(category?.name))
    .catch(error => console.log(error))
    .finally(() => console.log('Fetch terminado!'))