const UseParseClock = (time: number) => {
  const h = Math.floor(time / 3600000),
    m = Math.floor(time / 60000) - h * 60,
    s = Math.floor(time / 1000) - m * 60 - h * 3600,
    ms = time % 1000;

  return `${h > 9 ? h : '0' + h} : ${m > 9 ? m : '0' + m} : ${
    s > 9 ? s : '0' + s
  } . ${ms > 99 ? ms : ms > 9 ? '0' + ms : '00' + ms}`;
};

export default UseParseClock;
