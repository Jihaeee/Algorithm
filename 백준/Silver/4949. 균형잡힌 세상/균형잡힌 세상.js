const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (const line of input) {
  if (line === ".") break;

  const stack = [];
  let isValid = true;

  for (const ch of line) {
    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        isValid = false;
        break;
      }
    } else if (ch === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        isValid = false;
        break;
      }
    }
  }

  if (isValid && stack.length === 0) console.log("yes");
  else console.log("no");
}
