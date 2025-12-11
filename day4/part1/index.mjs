import { data } from "./data.mjs";

console.log("length", data.length);

for (let i = 0; i < data.length; i++) {
  for (let j = 0; j < data[i].length; j++) {
    console.log("run");
  }
}
