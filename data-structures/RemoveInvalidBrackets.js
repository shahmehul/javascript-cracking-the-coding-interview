function removeInvalidBrackets(s) {
  const result = [];
  const visited = new Set();
  const queue = [];

  queue.push(s);
  visited.add(s);

  let found = false;

  while (queue.length > 0) {
      const current = queue.shift();

      if (isValid(current)) {
          result.push(current);
          found = true;
      }

      if (found) continue;

      for (let i = 0; i < current.length; i++) {
          if (!isBracket(current[i])) continue;

          const next =
              current.slice(0, i) + current.slice(i + 1);

          if (!visited.has(next)) {
              visited.add(next);
              queue.push(next);
          }
      }
  }

  return result;
}

function isBracket(ch) {
  return ['(', ')', '{', '}', '[', ']'].includes(ch);
}

function isValid(str) {
  const stack = [];
  const map = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (const ch of str) {
      if (ch === '(' || ch === '{' || ch === '[') {
          stack.push(ch);
      } else if (ch in map) {
          if (stack.length === 0 || stack.pop() !== map[ch]) {
              return false;
          }
      }
  }

  return stack.length === 0;
}

console.log(removeInvalidBrackets("(abcd[efgh)ijk]"));
// ["()", "[]"]

console.log(removeInvalidBrackets("{ab[abcd]ef}"));
// ["{[]}"]

//Input: s = "()())()"
//Output: ["(())()","()()()"]





//Input: s = "()())()"
//Output: ["(())()","()()()"]