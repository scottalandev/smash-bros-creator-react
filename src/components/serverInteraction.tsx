export const postCharacter = (char: string) => {
  console.log(`postCharacter 'char = ${char}`)
  return fetch("http://localhost:5000/api/chars", {
    method: "POST",
    // body: `${char}`,
    body: char,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
