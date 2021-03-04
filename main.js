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
    while (x % y){
        x+=1;
    }
    return x;
}

module.exports = {
    numberDoubler,
    stringRepeater,
    makeDivisible
};