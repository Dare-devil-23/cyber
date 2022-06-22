import React from "react";
import { Container, Col, Row } from "react-bootstrap";
function Card({ person }) {
  return (
    
          <span style={{display:"inline"}}>
            <img
              width={200}
              height={200}
              alt={person.name}
              src={process.env.PUBLIC_URL + person.imgPath}
            />
            <div>
              <h2>{person.name}</h2>
              <p>{person.email}</p>
            </div>
          </span>
        
  );
}

export default Card;
