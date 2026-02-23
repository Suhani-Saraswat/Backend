// let n = 5;

// for(let i=0; i<n; i++){
//     console.log("hello, i = ", i);
// }

// console.log("Bye!");

// let args = process.argv;

// for(let i=2; i<args.length; i++) {
//     console.log("hello to ", args[i]);
// }

// console.log("Bye!");

// const math = require("./math");

// console.log(math.sum(2, 2));
// console.log(math.PI);

// let info = require("./Fruits");

// console.log(info[0]);
// console.log(info[0].name);
// console.log(info[0].color);
// console.log(info[1]);
// console.log(info[1].name);
// console.log(info[1].color);
// console.log(info[2]);
// console.log(info[2].name);
// console.log(info[2].color);

import {sum, PI} from "./math.js";
import { generate } from "random-words";

// console.log(PI);
console.log(generate());