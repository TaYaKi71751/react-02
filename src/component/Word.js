import { useState, useEffect } from "react";
export default function Word({ word: w }) {
    const [word, setWord] = useState(w);
    console.log(word);
    const [isDone, setIsDone] = useState(word?.isDone);
    const [isShow, setIsShow] = useState(false);
    const [isDeleteProcessing, setIsDeleteProcessing] = useState(false);
    function toggleDone() {
        fetch(`http://localhost:3010/words/${word.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        }).then((res) => {
            if (res.ok) {
                setIsDone(isDone => !isDone);
            }
        })
    }
    function toggleShow() {
        setIsShow(!isShow);
    }
    function deleteWord(id) {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            setIsDeleteProcessing(true);
            fetch(`http://localhost:3010/words/${word.id}`, {
                method: "DELETE"
            }).then((res) => {
                if (res.ok) {
                    setWord({ id: 0 });
                }
            }).finally(() => {
                setIsDeleteProcessing(false);
            });
        }
    }
    if(word.id === 0) {
        return null;
    }
    return (<tr className={isDone ? "off" : ""}>
        <td><input type="checkbox" checked={isDone} onChange={toggleDone} /></td><td>{word.eng}</td>
        <td>{isShow && word.kor}</td>
        <td>
            <button onClick={toggleShow}>뜻 {isShow ? "숨김" : "보기"}</button> 
            {isDeleteProcessing ? <span>삭제중...</span> : <button onClick={deleteWord}>삭제</button>}
        </td>
    </tr>
    );
}

// {
//     "id": 5,
//     "day": 3,
//     "eng": "school",
//     "kor": "학교",
//     "isDone": false
//   },
