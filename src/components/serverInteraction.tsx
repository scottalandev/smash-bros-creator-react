export const postCharacter = (char: string) => {
  console.log(`postCharacter 'char = ${char}`);
  return fetch("http://localhost:5000/api/chars", {
    method: "POST",
    body: char,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchChars = async (setChars) => {
  const response = await fetch("http://localhost:5000/api/chars");
  const data = await response.json();
  console.log(data);
  setChars(data);
}