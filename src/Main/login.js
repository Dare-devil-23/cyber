import React , { useState} from "react";
import Footer from "./components/footer";
import { createGlobalStyle } from "styled-components";
import HeaderMain from "./menu/HeaderMain";
import HeaderSmall from "./menu/HeaderSmall";
import { Parallax } from "react-parallax";
import ButtonLoader from "./trainings/ButtonLoader";
import "./trainings/training.css";
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

        {/* <label className="label">Email</label> */}
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
          placeholder="Email"
        />
        {/* <label className="label">Password</label> */}
        <input
          onChange={handlePassword}
          className="input"
          value={password}
          type="password"
          placeholder="Password"
        />
        {/* Calling to the methods */}
      <div className="messages mt-2 mb-1">
        {errorMessage()}
        {successMessage()}
      </div>
        <div
          onClick={handleSubmit}
          className="btn-main m-auto mb-5"
          type="submit"
        >
          <ButtonLoader />
        </div>
      </form>
    </div>
  );
};
const logintwo = () => (
  <div >
    <HeaderMain />
    <GlobalStyles />
    <Parallax
      bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
      strength={500}
      bgImageStyle={{ height: "110vh", width: "100%",
    
    }}
    >
    <div
      className="mainform "
      style={{ backgroundImage: `url(${"./img/background/6.jpg"})` ,minHeight:"80vh" , alignContent:"center"}}
    >
      <Form />
      </div>
    </Parallax>
    <Footer />
  </div>
);
export default logintwo;
