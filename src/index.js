module.exports = function check(str, bracketsConfig) {
  let stack = []
  for (let i = 0; i < str.length; i++) {
    let x = str[i]
    for (let j = 0; j < bracketsConfig.length; j++) {
      
      let open = bracketsConfig[j][0]
      let cloze = bracketsConfig[j][1]
      if (cloze === x  && stack.includes(open)) {
        stack.pop()
        break
        } else if (open === x || cloze === x) {
        stack.push(x)
        break
      }
      }
    } 
    return stack.length === 0
}
