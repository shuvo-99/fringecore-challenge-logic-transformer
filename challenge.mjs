const weirdExpressions = [
  "a othoba b",
  "b ebong c othoba d",
  "ebong ebong othoba othoba ebong",
  "((ebong) othoba ebong) ebong othoba",
  "(ebong othoba (ebong ebong ((othoba)othoba(ebong))))",
  "ebong",
];

for (let i = 0; i < weirdExpressions.length; i++) {
  let t = weirdExpressions[i].split(" ");
  for (let j = 0; j < t.length; j++) {
    if (j % 2 !== 0) {
      if (t[j] === "ebong") {
        t[j] = "&&";
      } else if (t[j] === "othoba") {
        t[j] = "||";
      }
    }
  }
  console.log(t.join(" "));
}
