function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next()); // 1
console.log(g.next()); // 2
console.log(g.next()); // 3
console.log(g.next());