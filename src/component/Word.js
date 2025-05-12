import {useState} from "react";
export default function Word({word}){
    console.log(word);
    const [isDone,setIsDone] =useState(word.isDone);
    const [isShow,setIsShow]=useState(false);
    function toggleDone(){
        setIsDone(!isDone);
    }
    function toggleShow(){
        setIsShow(!isShow);
    }
    return(    <tr  className={isDone?"off":""}>
                 <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td><td>{word.eng}</td>
                 <td>{isShow&&word.kor}</td>
                 <td><button onClick={toggleShow}>뜻 {isShow?"숨김":"보기"}</button> <button>삭제</button></td>
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
