function presentation(){
    console.log("Hello Je suis Ali");
    //....
}

function presentation2(nom){
    let txt=`Hello Je suis ${nom}`
    return txt;
}

function sum(a, b){
    console.log("la somme: ");
    return a+b;
}

presentation();
let message= presentation2("Ali"); // s'excute mais on ne vois pas ce qu'elle return
console.log(message)
console.log(sum(4,2));