import React from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="auth-signup-container">
      <header className="auth-header">
        <Link to="/">
          <img
            src={require("./../images/logo_image.png")}
            width="396px"
            height="132px"
            alt="메인화면이동"
          />
        </Link>
      </header>
      <main className="auth-main">
        <form
          className="auth-form"
          id="signupAuthForm"
          action="signin"
          method="GET"
        >
          <div className="auth-field">
            <label className="auth-label" htmlFor="signupEmailInput">
              이메일
            </label>
            <input
              id="signupEmailInput"
              type="email"
              className="input input-gray"
              placeholder="이메일을 입력해주세요"
              required
              data-valid="false"
            />
            <span className="wrong-txt"></span>
          </div>
          <div className="auth-field">
            <div className="auth-div">
              <label className="auth-label" htmlFor="nicknameInput">
                닉네임
              </label>
              <input
                id="signupNicknameInput"
                className="input input-gray"
                placeholder="닉네임을 입력해주세요"
                required
                data-valid="false"
              />
              <span className="wrong-txt"></span>
            </div>
          </div>
          <div className="auth-field">
            <label className="auth-label" htmlFor="signupPasswordInput">
              비밀번호
            </label>
            <div className="auth-div">
              <input
                id="signupPasswordInput"
                className="input input-gray"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                required
                data-valid="false"
              />
              <span className="wrong-txt"></span>
              <img
                src={require("./../images/icon/icon_eyes_close.png")}
                className="eyes-close"
                alt="비밀번호보이기"
              ></img>
            </div>
          </div>
          <div className="auth-field">
            <label className="auth-label" htmlFor="signupPasswordInputRe">
              비밀번호 확인
            </label>
            <div className="auth-div">
              <input
                id="signupPasswordInputRe"
                className="input input-gray"
                type="password"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                required
                data-valid="false"
              />
              <span className="wrong-txt"></span>
              <img
                src={require("./../images/icon/icon_eyes_close.png")}
                className="eyes-close"
                alt="비밀번호보이기"
              ></img>
            </div>
          </div>
          <button
            type="submit"
            id="signupSubmitBtn"
            className="btn btn-gray-round-xl"
            disabled
          >
            회원가입
          </button>
        </form>
        <div className="auth-box">
          <Link className="auth-gopage" href="">
            간편 로그인하기
          </Link>
          <div className="auth-snsbox">
            <Link target="_self" to="https://www.google.com/">
              <img
                src={require("./../images/icon/ic_google.png")}
                alt="구글로그인아이콘"
              />
            </Link>
            <Link target="_self" to="https://www.kakaocorp.com/page/">
              <img
                src={require("./../images/icon/ic_kakao.png")}
                alt="카카오로그인아이콘"
              />
            </Link>
          </div>
        </div>
      </main>
      <footer className="auth-register">
        이미 회원이신가요?
        <Link to="login">로그인</Link>
      </footer>
    </div>
  );
};

export default SignupPage;
