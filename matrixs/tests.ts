import { Matrix } from './matrixs';
let n:number,sep:number;
if (process.argv[2] && process.argv[3]) {
    n = parseInt(process.argv[2]);
    sep = parseInt(process.argv[3]);    
}
console.log(Matrix(n,sep));


