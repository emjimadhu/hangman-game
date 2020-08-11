export const checkWin = (correctLetters: string[], wrongLetters: string[], selectedWord: string): string => {
  let status = 'win';

  selectedWord
    .split('')
    .forEach((letter: string) => {
      if (!correctLetters.includes(letter)) {
        status = '';
      }
    });

  if (wrongLetters.length === 6) {
    status = 'lose';
  }

  return status;
};
