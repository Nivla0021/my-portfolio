function capWords(str){
  let words = str.split(" ").map(word => {
    let firstLetter = word.slice(0,1);
    let rest = word.slice(1);
    firstLetter = firstLetter.toUpperCase();
    return `${firstLetter}${rest}`;

  })


  return words.join(" ");
}

console.log(capWords("ang pogi ni alvin yeheeey"));
