const cows = 9;

const countCows = new Promise((resolve, reject) => {
    if(cows > 10) {
        resolve(`Tenemos ${cows} vacas!`)
    } else {
        reject('No hay vacas suficientes :(')
    }
})

countCows
    .then(result => console.log(result)) // Si resolve
    .catch(error => console.log(error)) // Si reject
    .finally(() => console.log('Terminó')) // Siempre se ejecuta al final