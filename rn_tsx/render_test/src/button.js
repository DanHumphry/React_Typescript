import React from 'react';

const ButtonSection = ({reset, startTimer, start, makeLap}) =>{

    return (
        <div>
        <button onClick={reset}>
            <p>초기화</p>
        </button>
        <button onClick={startTimer}>
            <p>{start ? '정지' : '시작'}</p>
        </button>
        <button
        onClick={makeLap}
        disabled={!start}>
            <p>구간기록</p>
        </button>
    </div>
    );
}
export default React.memo(ButtonSection);