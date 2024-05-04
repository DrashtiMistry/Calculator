let ans = document.querySelector(".ans");
let nums = document.querySelectorAll(".num");
let inputs = document.querySelector(".inputs");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let devide = document.querySelector("#devide");
let multi = document.querySelector("#multi");
let add = document.querySelector("#add");
let clear = document.querySelector("#clear");
let equal = document.querySelector("#equal");
let substract = document.querySelector("#substract");
let dot = document.querySelector("#dot");
let del = document.querySelector("#del");

let a;
let b;
let c;
let d;

one.addEventListener("click",()=> {
    console.log("one was clicked!");
    if(a==null) {
        a=1;
        ans.innerText = `${a}`;
        console.log("1st letter is 1");
    } else if(a!=null && b==null) {
        a=a*10+1;
        ans.innerText = `${a}`;
        console.log("2nd letter is 1");
    } else if(a!=null && b!=null && c==null) {
        c=1;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 1");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+1;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 1");
    }
});

two.addEventListener("click",()=> {
    console.log("two was clicked!");
    if(a==null) {
        a=2;
        ans.innerText = `${a}`;
        console.log("1st letter is 2");
    } else if(a!=null && b==null) {
        a=a*10+2;
        ans.innerText = `${a}`;
        console.log("2nd letter is 2");
    } else if(a!=null && b!=null && c==null) {
        c=2;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 2");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+2;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 2");
    }
});

three.addEventListener("click",()=> {
    console.log("three was clicked!");
    if(a==null) {
        a=3;
        ans.innerText = `${a}`;
        console.log("1st letter is 3");
    } else if(a!=null && b==null) {
        a=a*10+3;
        ans.innerText = `${a}`;
        console.log("2nd letter is 3");
    } else if(a!=null && b!=null && c==null) {
        c=3;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 3");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+3;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 3");
    }
});

four.addEventListener("click",()=> {
    console.log("four was clicked!");
    if(a==null) {
        a=4;
        ans.innerText = `${a}`;
        console.log("1st letter is 4");
    } else if(a!=null && b==null) {
        a=a*10+4;
        ans.innerText = `${a}`;
        console.log("2nd letter is 4");
    } else if(a!=null && b!=null && c==null) {
        c=4;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 4");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+4;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 4");
    }
});

five.addEventListener("click",()=> {
    console.log("five was clicked!");
    if(a==null) {
        a=5;
        ans.innerText = `${a}`;
        console.log("1st letter is 5");
    } else if(a!=null && b==null) {
        a=a*10+5;
        ans.innerText = `${a}`;
        console.log("2nd letter is 5");
    } else if(a!=null && b!=null && c==null) {
        c=5;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 5");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+5;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 5");
    }
});

six.addEventListener("click",()=> {
    console.log("six was clicked!");
    if(a==null) {
        a=6;
        ans.innerText = `${a}`;
        console.log("1st letter is 6");
    } else if(a!=null && b==null) {
        a=a*10+6;
        ans.innerText = `${a}`;
        console.log("2nd letter is 6");
    } else if(a!=null && b!=null && c==null) {
        c=6;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 6");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+6;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 6");
    }
});
 
seven.addEventListener("click",()=> {
    console.log("seven was clicked!");
    if(a==null) {
        a=7;
        ans.innerText = `${a}`;
        console.log("1st letter is 7");
    } else if(a!=null && b==null) {
        a=a*10+7;
        ans.innerText = `${a}`;
        console.log("2nd letter is 7");
    } else if(a!=null && b!=null && c==null) {
        c=7;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 7");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+7;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 7");
    }
});

eight.addEventListener("click",()=> {
    console.log("eight was clicked!");
    if(a==null) {
        a=8;
        ans.innerText = `${a}`;
        console.log("1st letter is 8");
    } else if(a!=null && b==null) {
        a=a*10+8;
        ans.innerText = `${a}`;
        console.log("2nd letter is 8");
    } else if(a!=null && b!=null && c==null) {
        c=8;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 8");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+8;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 8");
    }
});

nine.addEventListener("click",()=> {
    console.log("nine was clicked!");
    if(a==null) {
        a=9;
        ans.innerText = `${a}`;
        console.log("1st letter is 9");
    } else if(a!=null && b==null) {
        a=a*10+9;
        ans.innerText = `${a}`;
        console.log("2nd letter is 9");
    } else if(a!=null && b!=null && c==null) {
        c=9;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 9");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+9;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 9");
    }
});

zero.addEventListener("click",()=> {
    console.log("zero was clicked!");
    if(a==null) {
        a=0;
        ans.innerText = `${a}`;
        console.log("1st letter is 0");
    } else if(a!=null && b==null) {
        a=a*10+0;
        ans.innerText = `${a}`;
        console.log("2nd letter is 0");
    } else if(a!=null && b!=null && c==null) {
        c=0;
        ans.innerText = `${a}${b}${c}`;
        console.log("3rd letter is 0");
    } else if(a!=null && b!=null && c!= null) {
        c=c*10+0;
        ans.innerText = `${a}${b}${c}`;
        console.log("4th letter is 0");
    }
});

// dot.addEventListener("click", () => {
//     if(a!=null) {
//         ans.innerText = a + ".";

//     }
// });

// del.addEventListener ("click", () => {
//     ans.value.toString.slice(0,-1);
// })

clear.addEventListener ("click",() => {
    a=null;
    b=null;
    c=null;
    d=null;
    ans.innerText = "";
    console.log("clear was clicked!");
    console.log("Clear the ans screen");
});

add.addEventListener ("click", () => {
    console.log("add operation!");
    if(a!=null && b==null){
        b="+";
        ans.innerText = `${a}${b}`;
    }
});

substract.addEventListener ("click", () => {
    console.log("substract operation!");
    if(a!=null && b==null){
        b="-";
        ans.innerText = `${a}${b}`;
    }
});

multi.addEventListener ("click", () => {
    console.log("multiplication operation!");
    if(a!=null && b==null){
        b="*";
        ans.innerText = `${a}${b}`;
    }
});

devide.addEventListener ("click", () => {
    console.log("division operation!");
    if(a!=null && b==null){
        b="/";
        ans.innerText = `${a}${b}`;
    }
});

equal.addEventListener ("click", () => {
    console.log("equal was clicked!");
    if(b==="+"){
        d=a+c;
    }
    if(b==="-"){
        d=a-c;
    }
    if(b==="/"){
        d=a/c;
    }
    if(b==="*"){
        d=a*c;
    }
    if(b==null){
        d=a;
    }
    ans.innerText = `${d}`;
    console.log("answer = ",d);
    a=null;
    b=null;
    c=null;
    d=null;
});
