import { Link } from "react-router-dom"
import dummy from "../db/data.json"
export default function DayList(){
    return(
        <ul className="list_day">
           {/*dummy.days 배열 .map 기존데이터를 새로운 데이터 배열 */
                dummy.days.map(day=>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
           
                
            }
        </ul>
    )

}