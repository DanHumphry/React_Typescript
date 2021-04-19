import React, {useRef, useState} from 'react';

const App = () => {
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState('00:00:00.000');
  const [lapArr, setLapArr] = useState([])
  const started = useRef(null);

  const handleToggle = () => {
    const startedTime = new Date();
    setStart(!start);
    if (!start) {

      started.current = setInterval(()=>{
        let currentTime = new Date(),
            timeElapsed = new Date(currentTime - startedTime),
            hour = timeElapsed.getUTCHours(),
            min = timeElapsed.getUTCMinutes(),
            sec = timeElapsed.getUTCSeconds(),
            ms = timeElapsed.getUTCMilliseconds();

        if (timer !== '00:00:00.000'){
          hour += +timer.split(":")[0]
          min += +timer.split(":")[1]
          sec += +timer.split(":")[2].split(".")[0]
          ms += +timer.split(":")[2].split(".")[1]
          if (ms >= 1000){
            sec++;
            ms = timeElapsed.getUTCMilliseconds();
          }
        }

        const time =
            (hour > 9 ? hour : '0' + hour) +
            ':' +
            (min > 9 ? min : '0' + min) +
            ':' +
            (sec > 9 ? sec : '0' + sec) +
            '.' +
            (ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms);
        setTimer(time);
      }, 10);
    } else {
      clearInterval(started.current);
    }
  };

  function reset() {
    clearInterval(started.current);
    setStart(false)
    setTimer('00:00:00.000');
    setLapArr([])
  }

  function makeLap(){
    const copy = [...lapArr]
    copy.push(timer)
    setLapArr(copy)
  }

  return (
      <div>
        <p>{timer}</p>
        <button onClick={reset}>Reset</button>
        <button onClick={handleToggle}>{start ? 'Stop' : 'Start'}</button>
        <button onClick={makeLap}>구간</button>
        {lapArr.map((item, index)=><p key={index}>{item}</p>)}
      </div>
  );
};
export default App;
