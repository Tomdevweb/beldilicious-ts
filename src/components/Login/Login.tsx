import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Login</button>

      <div className="login__separator__container">
        <div className="login__separator"></div>
        <div className="login__separator__text">
          <span>OU</span>
        </div>
        <div className="login__separator"></div>
      </div>
    </div>
  );
};

export default Login;
