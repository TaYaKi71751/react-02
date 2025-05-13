import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Header from './component/Header'
import DayList from './component/DayList.js'
import Day from './component/Day.js'
import EmptyPage from "./component/EmptyPage.js";
import CreateWord from "./component/CreateWord.js";
import CreateDay from "./component/CreateDay.js";
/*
BrowserRouter 라우팅 처리하는 컴포넌트
Route   부분 화면들 
Routes   
*/
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<DayList/>} />
        <Route path="/day/:day" element={<Day/>} />
        <Route path="/create_word" element={<CreateWord/>} />
        <Route path="/create_day" element={<CreateDay/>} />
        <Route path="*" element={<EmptyPage/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
