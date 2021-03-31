import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css'
// import Google from '../Components/login/Google';

const Join: React.FC = () =>  {

  return (
    <div className="login-container">
    <div className="login-box">
      {/* <div className="exit">
        <button>
            <svg className="icon-longarrow" viewBox="0 0 54 24"><path d="M.42 11.158L12.38.256c.333-.27.696-.322 1.09-.155.395.166.593.467.593.903v6.977h38.87c.29 0 .53.093.716.28.187.187.28.426.28.716v5.98c0 .29-.093.53-.28.716a.971.971 0 0 1-.716.28h-38.87v6.977c0 .416-.199.717-.592.903-.395.167-.759.104-1.09-.186L.42 12.62a1.018 1.018 0 0 1 0-1.462z"></path></svg>
        </button>
      </div> */}
      <span>회원가입</span>
      <form>

        {/* 이메일 */}
        <button className="sendEmailBtn">인증발송</button>
        <input type="text" placeholder="이메일을 입력하세요" name="email"/>
        <button style={{width : "55.31px"}} className="sendEmailBtn">확인</button>
        <input type="text" placeholder="인증번호확인"/>
        {/* 이메일 */}

        {/* 아이디 */}
        <button className="sendEmailBtn">중복확인</button>
        <input type="text" placeholder="아이디를 입력하세요" name="username"/>
        <div className="focusInputOn">
          <p className="case">4자 이상의 영문 혹은 영문과 숫자를 조합</p>
          <p className="case">아이디 중복확인</p>
        </div>
        {/* 아이디 */}

        {/* 비밀번호 */}
        <input style={{width : "298px"}} type="password" placeholder="비밀번호를 입력하세요" name="password"/>
        <div className="focusInputOn">
          <p className="case">영문,숫자, 특수문자 중 2가지 이상을 혼합하여 입력</p>
          <p className="case">10자리 ~ 20자리 이내로 공백없이 입력</p>
        </div>
        <input style={{width : "298px"}} type="password" placeholder="비밀번호를 한번 더 입력해주세요" onChange={(e)=>{
          // ReCheckPwd(e.target.value)
        }}/>
        <div className="focusInputOn" >
          <p className="case">동일한 비밀번호 입력</p>
        </div>
        {/* 비밀번호 */}
        <button className="JoinLoign-button" onClick={(e)=>{
          // submitJoinButton(e)
          }}>회원가입</button>
      </form>
      {/* <section className="social-box">
        <h4>소셜 계정으로 회원가입</h4>
        <div className="googlebox">
            <Google/>
        </div>
      </section> */}
      <div className="login-foot">
        <span>이미 회원이신가요 ?</span>
        <div className="foot-link"><Link to="/login">로그인</Link></div>
      </div>
    </div>
  </div>
  );
}

export default Join;
