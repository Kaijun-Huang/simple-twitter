import { AuthInput } from "components/AuthInput";
import { ReactComponent as LogoSVG } from "assets/Icon.svg";
import "pages/LoginRegister.scss";

export const LoginPage = () => {
  return (
    <div className="authContainer">
      <div>
        <LogoSVG />
      </div>
      <h1>登入 Alphitter</h1>
      <div className="inputContainer">
        <AuthInput type="text" label="帳號" placeholder="請輸入帳號" />
      </div>
      <div className="inputContainer">
        <AuthInput type="password" label="密碼" placeholder="請輸入密碼" />
      </div>

      <button className="loginButton" onClick={() => console.log("ok!")}>
        登入
      </button>
      <div className="linkText">
        <a href="#">註冊</a> ・ <a href="#">後台登入</a>
      </div>
    </div>
  );
};
