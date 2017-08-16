import { Matrix } from './matrix';
let n:number;
if (process.argv[2]) {
    n = parseInt(process.argv[2]);
}
console.log(Matrix(n));


