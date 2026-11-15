// n = 3
// *
// * *
// * * *

let n = 3; // rows

for (let i = 0; i < n; i++){
    for (let j=0; j <= i ; j++) {
       process.stdout.write("*");
       
    }
    console.log("") // for this every print will come to next line
}