# :스톱워치&타이머 (1인 프로젝트)
> PlayStore : https://play.google.com/store/apps/details?id=com.DanWatch
> 
> AppStore : https://apps.apple.com/kr/app/%EC%8A%A4%ED%86%B1%EC%9B%8C%EC%B9%98-%ED%83%80%EC%9D%B4%EB%A8%B8/id1565966091

React Native를 이용한 간단한 어플리케이션의 스톱워치&타이머

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/54474732/123280045-67724800-d543-11eb-8fb4-7ae889c42b13.gif)
![ezgif com-gif-maker](https://user-images.githubusercontent.com/54474732/123280067-6a6d3880-d543-11eb-80fc-584afb7c75fa.gif)

## :해설
src/page/Timer.tsx 의 startTimer함수 중..   
<img width="643" alt="스크린샷 2021-06-24 오후 11 30 30" src="https://user-images.githubusercontent.com/54474732/123280961-38a8a180-d544-11eb-9da9-7fca359cb880.png">

ms단위의 정밀도를 위해 버튼을 눌렀을때 생성되는 Date객체와  
setInterval의 콜백함수에서 생성되는 Date객체간의 시간차를 이용했습니다.
