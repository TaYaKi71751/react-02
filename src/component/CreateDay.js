import { useNavigate } from 'react-router-dom';
import useFetch from "../hooks/useFetch";

export default function CreateDay() {
    const { data: days } = useFetch("http://localhost:3010/days");
    const navigate = useNavigate();

    function addDay() {
        fetch(`http://localhost:3010/days/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: Number(days.sort((a, b) => Number(b.id) - Number(a.id))[0].id) + 1,
                day: Number(days.sort((a, b) => Number(b.day) - Number(a.day))[0].day) + 1,
            }),
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료 되었습니다");
                navigate(`/`);
            }
        });
    }
    return (
        <div>
            <h3>현재 일수 : {days.sort((a, b) => (b.day - a.day))[0]?.day + 1}일</h3>
            <button onClick={addDay}>Day 추가</button>
        </div>
    );
}
