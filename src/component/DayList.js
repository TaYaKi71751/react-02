import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch.js";
import { Link } from "react-router-dom";
export default function DayList(){
    const {data:days, error, loading} = useFetch("http://localhost:3010/days");
    if(loading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error: {error.message}</div>
    }
    return(
        <ul className="list_day">
           {/*dummy.days 배열 .map 기존데이터를 새로운 데이터 배열 */
                days.map(day=>(
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))
           
                
            }
        </ul>
    )

}
