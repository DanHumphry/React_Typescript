const UseParseMilli = (s: string) => {
  const spl = s.split(':');
  const spl_ = spl[2].split('.');
  return (+spl[0] * 3600 + +spl[1] * 60 + +spl_[0]) * 1000 + +spl_[1];
};

export default UseParseMilli;
