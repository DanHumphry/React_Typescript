import React,{useState, useRef} from 'react';
import ButtonSection from './button';

const Section = ({tableData, tableDataId, setTableData, setTableDataId}) =>{

  const started = useRef(null);
  const sectionStarted = useRef(null);

  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState('00 : 00 : 00 . 000');
  const [sectionTimer, setSectionTimer] = useState('00 : 00 : 00 . 000');


  const UseParseClock = (h, m, s, ms) => {
    return `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${
      s > 9 ? s : '0' + s
    } . ${ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms}`;
  };

  const UseParseMilli = (s) => {
    const spl = s.split(':');
    const spl_ = spl[2].split('.');
    return (+spl[0] * 3600 + +spl[1] * 60 + +spl_[0]) * 1000 + +spl_[1];
  };
  

  const startTimer = () => {

    const startedTime = +new Date();
    setStart(!start);
    if (!start) {
      if (sectionTimer !== '00 : 00 : 00 . 000') {
        startSectionRecord(startedTime);
      }

      const progressed = UseParseMilli(timer);
      started.current = setInterval(() => {
        const currentTime = +new Date(),
          timeElapsed = new Date(currentTime - startedTime + progressed);

        const time = UseParseClock(
          timeElapsed.getUTCHours(),
          timeElapsed.getUTCMinutes(),
          timeElapsed.getUTCSeconds(),
          timeElapsed.getUTCMilliseconds(),
        );
        setTimer(time);
      }, 10);
    } else {
      clearInterval(started.current);
      clearInterval(sectionStarted.current);
    }
  };

  const reset = () => {
    clearInterval(started.current);
    clearInterval(sectionStarted.current);
    setStart(false);
    setTimer('00 : 00 : 00 . 000');
    setSectionTimer('00 : 00 : 00 . 000');
    setTableData([]);
    setTableDataId(0);
  };

  const makeLap = () => {
    const startedTime = new Date();
    const init = [...tableData];
    init.push([tableDataId, sectionTimer, timer]);
    setTableData(init);
    if (typeof sectionStarted.current === 'number') {
      clearInterval(sectionStarted.current);
    }
    setSectionTimer('00 : 00 : 00 . 000');
    startSectionRecord(startedTime);
    setTableDataId(v => ++v);
  };

  const startSectionRecord = (startedTime) => {
    const progressed = UseParseMilli(sectionTimer);
    sectionStarted.current = setInterval(() => {
      const currentTime = +new Date();
      const timeElapsed =
        typeof startedTime === 'number'
          ? new Date(currentTime - startedTime + progressed)
          : new Date(currentTime - +startedTime);

      const time = UseParseClock(
        timeElapsed.getUTCHours(),
        timeElapsed.getUTCMinutes(),
        timeElapsed.getUTCSeconds(),
        timeElapsed.getUTCMilliseconds(),
      );
      setSectionTimer(time);
    }, 10);
  };

    return (
            <>
            <div>
                <p>{timer}</p>
            </div>
            <div>
                <p style={{fontSize: 15}}>{sectionTimer}</p>
            </div>
<ButtonSection reset={reset} startTimer={startTimer} start={start} makeLap={makeLap}></ButtonSection>
            </>
    );
}
export default Section;