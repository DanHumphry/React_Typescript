import React, {useState, useRef} from 'react';
function App() {
  const [start, setStart] = useState(true);
  const [time, setTime] = useState(0);
  const started = useRef(null);

  const [date, setDate] = useState(0);
  const dateStarted = useRef(null);

  const runTime = () => {
    const startedTime = Date.now();
    setStart(!start)
    if (start) {
      started.current = setInterval(() => setTime(v=>++v),10);
      dateStarted.current = setInterval(() => {
        setDate(Date.now() - startedTime);
      }, 10);
    }else{
      clearInterval(started.current);
      clearInterval(dateStarted.current);
      setTime(0);
      setDate(0);
    }
  }

  return (
    <div className="App" style={{marginLeft:'40px', marginTop:'150px'}}>
      <h1>time : {time}</h1>
      <h1>date : {date}</h1>
      <button onClick={runTime}>{start ? '시작' : '정지'}</button>
    </div>
  );
}
export default App;
