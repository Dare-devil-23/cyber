import React, { Component, useState } from "react";
import HeaderSmall from "./menu/HeaderSmall";
import HeaderMain from "./menu/HeaderMain";
import Footer from "./components/footer";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import "./contact.css";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const fadeLeft = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateX(40px);
    transform: translateX(40px);
  }
  50% {
    opacity: 0;
    -webkit-transform: translateX(80px);
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
`;

const Form = () => {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleQuery = (e) => {
    setQuery(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || query === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <p>Hey {name} your query successfully registered!!</p>
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
        <p>Please enter all the fields</p>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input
          onChange={handleName}
          className="input"
          value={name}
          type="text"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={email}
          type="email"
        />

        <label className="label">Query</label>
        <input
          onChange={handleQuery}
          className="input"
          value={query}
          type="text"
        />

        <button onClick={handleSubmit} className="btn-main lead m-auto my-5" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
const Maps = () => {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.MAPS_API,
  });
  if (isLoaded){
    return (

      <GoogleMap
        center={{ lat: 48.8584, lng: 2.2945 }}
        zoom={15}
        mapContainerStyle={{ width: "400px", height: "400px" }}
      ></GoogleMap>
    )}

    return(<></>)

};
class Contact extends Component {
  render() {
    const imgStyle = {
      width: "150px",
      height: "150px",
    };
    return (
      <>
        <HeaderSmall />
        <HeaderMain />
        <div className="contact">
          <div className="mb-5 pb-5">
            <h1> Reason for inquiry</h1>
            <span>
              <center>Please select the purpose for your inquiry</center>
            </span>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="nft_coll_pp">
                  <span>
                    <img
                      style={{ imgStyle }}
                      className="lazy"
                      src="https://img.icons8.com/external-flat-satawat-anukul/64/000000/external-communication-communication-flat-flat-satawat-anukul-28.png"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span onClick={() => window.open("/home", "_self")}>
                    <h4>Request A Demo</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/comingsoon", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Request A Demo
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="nft_coll_pp">
                  <span>
                    <img
                      className="lazy"
                      src="https://img.icons8.com/external-icongeek26-outline-colour-icongeek26/64/000000/external-sales-due-diligence-icongeek26-outline-colour-icongeek26.png"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span>
                    <h4>Sales Inquiry</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/comingsoon", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Sales Inquiry
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="nft_coll_pp">
                  <span>
                    <img
                      className="lazy"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-author-literature-flaticons-lineal-color-flat-icons-4.png"
                      alt=""
                    />
                  </span>
                  {/* <i className="fa fa-check"></i> */}
                </div>
                <div className="nft_coll_info">
                  <span>
                    <h4>Customer Support</h4>
                  </span>
                  <span>
                    {" "}
                    Consequat occaecat ullamco amet non eiusmod nostrud dolore
                    irure incididunt est duis anim sunt officia. Fugiat velit
                    proident aliquip nisi incididunt nostrud exercitation
                    proident est nisi.
                  </span>
                  <div
                    onClick={() => window.open("/comingsoon", "_self")}
                    className="btn-main lead m-auto my-5"
                  >
                    Customer Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Reveal
          className="onStep"
          keyframes={fadeLeft}
          // delay={300}
          duration={800}
        >
          <div className="contact-info ">
            <div><Form /></div>
            <div><Maps /></div>
          </div>
        </Reveal>
        <Footer />
      </>
    );
  }
}

export default Contact;
