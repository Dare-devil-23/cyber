import React from "react";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import { Parallax } from "react-parallax";
const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    
  }
  .box-login p{
    color: #a2a2a2 !important;
  }
  .box-login{
    border-radius: 3px;
    padding: 40px 50px;
  }
  .buttonset{
    display:float;
    justify-content:center; 
  }
  .input{
    border: #1c1c1e;
  border-radius: 5px;
  outline: none;
  font-size: larger;
  padding: 15px;
  margin-bottom: 10px;
  color: white;
  font-weight: 500;
  width: 100%;
  background-color: #1c1c1e;
  }
`;
const Form = () => {
  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (true) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>Successfull</p>
      </div>
    );
  };
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <p>Please enter valid email and password</p>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h2>Sign In</h2>
      </div>
      <form>
        {/* Labels and inputs for form data */}

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />
        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
        />
        {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        <div
          onClick={handleSubmit}
          className="btn-main m-auto my-5 button"
          type="submit"
        >
          <ButtonLoader />
        </div>
      </form>
    </div>
  );
};
const logintwo = () => (
  <div>
    <HeaderSmall />
    <HeaderMain />
    <GlobalStyles />
    <Parallax
      bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
      strength={500}
      bgImageStyle={{ height: "110vh", width: "100%",
    
    }}
    >
    <section
      className="jumbotron breadcumb no-bg"
      style={{ backgroundImage: `url(${"./img/background/6.jpg"})` }}
    >
      <Form />
      </section>
    </Parallax>
    <Footer />
  </div>
);
export default logintwo;
