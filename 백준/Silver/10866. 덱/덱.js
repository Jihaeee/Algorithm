const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const deque = [];
let front = 0;
let back = 0;
let output = [];

for (let i = 1; i <= N; i++) {
  const [cmd, value] = input[i].split(" ");

  switch (cmd) {
    case "push_front":
      deque[--front] = Number(value);
      break;

    case "push_back":
      deque[back++] = Number(value);
      break;

    case "pop_front":
      if (front === back) output.push("-1");
      else output.push(deque[front++]);
      break;

    case "pop_back":
      if (front === back) output.push("-1");
      else output.push(deque[--back]);
      break;

    case "size":
      output.push(String(back - front));
      break;

    case "empty":
      output.push(front === back ? "1" : "0");
      break;

    case "front":
      if (front === back) output.push("-1");
      else output.push(deque[front]);
      break;

    case "back":
      if (front === back) output.push("-1");
      else output.push(deque[back - 1]);
      break;
  }
}

console.log(output.join("\n"));
