const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!'), 2000)
            : reject(new Error('Error!'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync()
    console.log(something)
    console.log('Hola!')
}

console.log('Antes')
anotherFn()
console.log('Después')