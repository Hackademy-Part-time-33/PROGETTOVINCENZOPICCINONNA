
let input="i topi non avevano nipoti";

// space= input.replace(/\W/g, "");
// array=space.split();
// contrario=array.reverse();
// console.log(array);
// console.log(contrario);


function palindroma( name ){
    space= name.replace(/\W/g, "");
    array=space.split("").reverse().join("");
    
    return space==array

}

console.log(palindroma(input));


let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

let filtered = mixArray.filter(el => typeof el === "string" );

console.log(filtered)

let a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4];
let b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5];


function operazioni (operatore) {
    let c= [];
    if (operatore == '+') {

        for (let i = 0; i < a.length; i++) 
            c.push(a[i]+b[i])
            



    } else if (operatore == '-') {

        for (let i = 0; i < a.length; i++) 
            c.push(a[i]-b[i])

            

    } else if (operatore == '*'){

        for (let i = 0; i < a.length; i++) 
            c.push(a[i]*b[i])

        



} else if (operatore == '/') {

    for (let i = 0; i < a.length; i++) 
        c.push(a[i]/b[i])

        

}

 return c
}

console.log(operazioni('/'));







