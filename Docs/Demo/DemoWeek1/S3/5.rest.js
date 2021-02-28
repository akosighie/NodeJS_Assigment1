
function total(value1, ...values) {
    let sum = value1;

    values.forEach(function(val) {
        sum += val;
    });

    return sum;
    //array.reduce
}

const sum = total(1, 2, 3, 4,5,6,7,8,9,10);
const sum2 = total(1, 2, 3);

console.log(sum);
console.log(sum2);

