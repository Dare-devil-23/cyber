import React from "react";
// import { Button } from "react-bootstrap";
import { Component } from "react";
import { Card } from "react-bootstrap";
class Benifits extends Component {
  // constructor(props) {
  //     super(props);
  // }
  // state = {  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1646911292667-6ba3a722deac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Wellness</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/photos/branches-covered-with-ice-after-freezing-rain-sparkling-ice-covered-picture-id1289449088?s=612x612"
              />
              <Card.Body>
                <Card.Title>Weather</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1647301123214-acda7e99b9e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Food</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1645984747270-b35200a4b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
              />
              <Card.Body>
                <Card.Title>Vacation</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>{" "}
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1648019719672-e117b469981d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Voluntary</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1647460020084-1bb0543df372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Freedom</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>{" "}
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1649703712651-d228728f5fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Culture</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>{" "}
          <div className="col-sm-3 gy-3">
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
              <Card.Body>
                <Card.Title>Avaialbility</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Benifits;
