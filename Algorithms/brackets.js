function brackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{' || str[i] === '(' || str[i] === '[') {
      stack.push(str[i]);
    } else {
      let lastBracket = stack.pop();
      if (!((str[i] === '}' && lastBracket === '{') || (str[i] === ')' && lastBracket === '(') || (str[i] === ']' && lastBracket === '['))) {
        console.log('false');
        return false;
      }
    }
  }
  if (stack.length === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}