function subsPares(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("zero!")           
        }

        else if(array[i] % 2 === 0) {
            console.log(`subst ${array[i]} por 0...`);
        array[i] = 0;
        }
    }

    return array;
}

let array = [1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(subsPares(array));
