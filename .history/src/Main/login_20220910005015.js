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
  margin: 2px;
  color: white;
  font-weight: 500;
  width: 100%;
  background-color: #1c1c1e;
  }
`;

const logintwo = () => (
  <div>
    <HeaderSmall />
    <HeaderMain />
    <GlobalStyles />
    <Parallax
      bgImage={process.env.PUBLIC_URL + "/scroll/ph8.jpg"}
      strength={1000}
      bgImageStyle={{ height: "100vh", width: "100%" }}
    />
    <section
      className="jumbotron breadcumb no-bg"
      style={{ backgroundImage: `url(${"./img/background/6.jpg"})` }}
    >
      <div className="mainbreadcumb">
        <div className="container">
          <div className="row align-items-center px-0">
            <div className="col-lg-4 offset-lg-4 m-auto px-0">
              <div className="box-login">
                <h3 className="mb10">Login</h3>
                {/* <p>
                  Login using an existing account or create a new account{" "}
                  <span>here</span>.
                </p> */}
                <form
                  name="contactForm"
                  id="contact_form"
                  className="form-border"
                  action="#"
                >
                  <div className="field-set">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="input"
                      placeholder="username"
                    />
                  </div>

                  <div className="field-set">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input"
                      placeholder="password"
                    />
                  </div>

                  <div className="field-set buttonset">
                    <input
                      type="submit"
                      id="send_message"
                      value="Login"
                      className="btn mx-auto color-2"
                    />
                  </div>

                  <div className="clearfix"></div>
                  {/* <ul className="list s3">
                    <li>Login with:</li>
                    <li>
                      <span>Facebook</span>
                    </li>
                    <li>
                      <span>Google</span>
                    </li>
                  </ul> */}
                  <div className="spacer-half"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
export default logintwo;
