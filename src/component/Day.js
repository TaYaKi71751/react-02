import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import { useParams } from "react-router-dom";
import Word from "./Word.js";
export default function Day(){
    const {day}=useParams();
    const {data:words, error, loading} = useFetch(`http://localhost:3010/words/?day=${day}`);
    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error: {error.message}</div>
    }
    const wordList=words?.filter(word=>word.day==day);
    return (
        <>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {
                        wordList.map(word=>(
                            <Word key={word.id} word={word}/>
                        ))

                        // <tr>
                        //         <td>id</td><td>{word.id}</td><td>{word.kor}</td>
                        //     </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
