import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";


export default function CreateWord() {
  const { data:days } = useFetch("http://localhost:3010/days");
  const navigate = useNavigate();


  const [eng, setEng] = useState("");
  const [kor, setKor] = useState("");
  const [day, setDay] = useState("");


  function onSubmit(e) {
    e.preventDefault();


    fetch(`http://localhost:3010/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day,
        eng,
        kor,
        isDone: false,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다");
        navigate(`/day/${day}`);
      }
    });
  }


  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input
          type="text"
          placeholder="computer"
          value={eng}
          onChange={(e) => setEng(e.target.value)}
        />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input
          type="text"
          placeholder="컴퓨터"
          value={kor}
          onChange={(e) => setKor(e.target.value)}
        />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="">-- 선택하세요 --</option>
          {days.map(dayItem => (
            <option key={dayItem.id} value={dayItem.day}>
              {dayItem.day}
            </option>
          ))}
        </select>
      </div>
      <button>저장</button>
    </form>
  );
}

