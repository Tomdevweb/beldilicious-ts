import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button>Sign Up</button>
      <div className="signup__separator__container">
        <div className="signup__separator"></div>
        <div className="signup__separator__text">
          <span>OU</span>
        </div>
        <div className="signup__separator"></div>
      </div>
    </div>
  );
};

export default Signup;
