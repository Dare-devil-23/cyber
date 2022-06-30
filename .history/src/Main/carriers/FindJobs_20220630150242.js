import React from "react";
import { Button } from "react-bootstrap";
import { Link } from '@reach/router'
// import { Component } from "react";
// import Search from "./Search/Search";
import initialDetails from "./Search/initialDetails";
import { Card } from "react-bootstrap";
import { useState } from "react";
import "./Search/findJobs.css"
function FindJobs() {
    const [searchTerm , setSearchTerm] = useState('');
    const [searchProp , setSearchProp] = useState('');
    return (
      <div>
        <br />

        <h1>LET'S FIND YOUR NEXT JOB.</h1>
        
        <br />

        <div className="spacer-single"></div>
        <div className="row">
          <div className="col-sm-3">
            <h5>SearchFor </h5>
            <input
              type="text"
              name="name"
              id="job_name"
              className="form-control"
              placeholder="Job Title or Keyword"
              onChange={event => {
                setSearchTerm(event.target.value);
                setSearchProp("name");
              }}
            />
          </div>
          <div className="col-sm-3">
            <h5>Where</h5>
            <input
              type="text"
              name="address"
              id="job_address"
              className="form-control"
              placeholder="City State or Zip Code"
              onChange={event => {
                setSearchTerm(event.target.value);
                setSearchProp("address");
              }}
            />
          </div>
          <div className="col-sm-3">
            <h5>Department</h5>
            <input
              type="text"
              name="department"
              id="department"
              className="form-control"
              placeholder="City State or Zip Code"
              onChange={event => {
                setSearchTerm(event.target.value);
                setSearchProp("dept");
              }}
            />
          </div>
          {/* <div className="col mt-4">
            <Button variant="secondary">Search Jobs</Button>
          </div> */}
        <div >
          <div  className="container">
            <div className="row">
              {initialDetails.filter((val)=>{
                if(searchTerm === ""){
                  return val
                }else if(searchProp === "name" && (val.name.toLowerCase().includes(searchTerm.toLowerCase()))){
                  return val
                }else if(searchProp === "address" && (val.address.toLowerCase().includes(searchTerm.toLowerCase()))){
                  return val
                }else if(searchProp === "dept" && (val.department.toLowerCase().includes(searchTerm.toLowerCase()))){
                  return val
                }
                
              }).map((val, key) => {
                return (
                  <div className="col-sm-3 gy-3" key = {key} >
                    <Link to="/jdetail" style={{textDecoration:"none" }} state={{from:val}}>
                    <Card style={{ backgroundColor:"#1c1c1e"}}>
                      {/* <Card.Img variant="top" src={val.imgPath} style={{objectFit:"cover",height:"300px"}}/> */}
                      <Card.Body>
                        <Card.Title>{val.name}</Card.Title>
                        <Card.Text>{val.address}</Card.Text>
                        <Card.Text>{val.department}</Card.Text>
                      </Card.Body>
                    </Card>
                    </Link>
                    
                    
                  </div>
                );
              })}
            </div>
          </ div>
        </div>
        <h2>{searchProp}</h2>
      </div>
      </div>
    );
  }

export default FindJobs;
