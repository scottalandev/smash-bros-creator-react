import { useEffect, useState } from "react";
import { CharsProps } from '../types/character'
// import { CharList } from './charPage/CharList';

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


// IMPORTED
// export interface CharsProps {
//   char_id: number;
//   name: string;
//   auth: string;
//   charobj: string;
//   created_at: Date;
//   modified_at: Date;
// }

export const GetAllChars = () => {
  const [chars, setChars] = useState<CharsProps[]>([]);

  const fetchChars = async () => {
    const response = await fetch("http://localhost:5000/api/chars");
    const data = await response.json();
    console.log(data);
    setChars(data);
  }

  useEffect(() => {
    fetchChars();
  }, []);


  return (
    <>
      {chars.map((char) => {
        return <div key={char.char_id}>
          <li>{char.name}</li>
          <li>{char.auth}</li>
          <p>{char.charobj}</p>
        </div>

      })}
    </>
    )
};

// fetch('http://localhost:5000/api/chars')
// .then(response => response.json())
// .then(data => {
//   setChars(data);})
// .catch(err => console.error(err)),
// console.log(chars)
