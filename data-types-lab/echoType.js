function solve(param) {
  console.log(typeof param);

  if (typeof param === "number" || typeof param === "string") {
    console.log(param);
  } else {
    console.log("Parameter is not suitable for printing");
  }
}

solve("Hello, JavaScript!");
solve(18);
solve(null);
