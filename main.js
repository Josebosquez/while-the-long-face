function numberDoubler(num) {
    // Your code here

    let output = num;
    while (output <= 100){
        output = output *2;
}   
        return output;
}

function stringRepeater(str) {
    // Your code here
    let rep = "";
    while (rep.length < 10){
        rep += str;
    }
        return rep;
}

function makeDivisible(x, y) {
    // Your code here
    let sum = x;
    while (sum < y){
        sum = sum*2;
    }
    return sum;

}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};