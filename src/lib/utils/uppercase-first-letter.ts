export function upperCaseFirstLetter(
  str: string,
  options: {
    allWords: boolean;
  } = { allWords: false },
) {
  const strLength = str.split(" ").length;

  if (strLength == 1) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return str
    .split(" ")
    .map((word, index) => {
      if (!options.allWords) {
        if (index == 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }
        return word;
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}
