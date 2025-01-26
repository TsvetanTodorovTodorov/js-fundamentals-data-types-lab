function solve(str1, char, str2) {
  let res = str1.replace("_", char);

  if (res === str2) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}

solve("Str_ng", "I", "Strong");

solve("Str_ng", "i", "String");
