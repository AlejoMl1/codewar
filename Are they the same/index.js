function comp(array1, array2) {

    let existSquareofNumber = false;
    (array1 && array2 && array1.length == array2.length) ?
    ((array1, array2) => {
        existSquareofNumber = true;
        for (const el of array1) {
            let howManyDuplicates = array1.filter(x => x == el).length;
            // console.log(howManyDuplicates)
            let numberOfPowElements = array2.filter(x => x == Math.pow(el, 2)).length;;
            // console.log(numberOfPowElements)
            // console.log(el)
            if (howManyDuplicates !== numberOfPowElements) {
                // console.log('entre al condicional')
                existSquareofNumber = false;
                break;
            }
            // console.log('existSquareofNumber',existSquareofNumber)
            // console.log('......')
        }
        return existSquareofNumber;
    })(array1, array2) :
    existSquareofNumber = false;

    return existSquareofNumber;

}

// let array1=[10, 7, 1, 3, 0, 10, 1, 9, 9, 4] 
// let array2= [81, 50, 1, 100, 81, 0, 9, 16, 1, 100]


// let array1=[2,4,8,10,2] 
// let array2= [100,64,16,4,4]
let array2 = [];
let array1 = [];
// let array1=[0, 8, 1, 9, 0, 10, 3, 6, 2, 5, 10]
// let array2=  [1, 1, 36, 100, 4, 81, 64, 9, 25, 0, 100]
console.log(comp(array1, array2));