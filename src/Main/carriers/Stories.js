import * as React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { Component } from "react";
import "../../App.css";
class Stories extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} className="my-3 m-stories">
              <Card style={{height:"100%"}}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Row>
            <Col xs={6} md={4} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Columns are always 50% wide, on mobile and desktop */}
          <Row>
            <Col xs={6} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} className="my-3 m-stories">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1529421308418-eab98863cee4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button>  */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Stories;
