import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "@reach/router";
// import { Component } from "react";
// import Search from "./Search/Search";
import initialDetails from "./Search/initialDetails";
import { Card } from "react-bootstrap";
import { useState } from "react";
import "./Search/findJobs.css";
function FindJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchProp, setSearchProp] = useState("");

  const data = initialDetails
  .filter((val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      searchProp === "role" &&
      val?.role.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } else if (
      searchProp === "location" &&
      val?.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    } 
    // else if (
    //   searchProp === "dept" &&
    //   val.department
    //     .toLowerCase()
    //     .includes(searchTerm.toLowerCase())
    // ) {
    //   return val;
    // }
  })
  return (
    <div >
      <h1>LET'S FIND YOUR NEXT JOB.</h1>

      <div className="spacer-single"></div>
      <div className="row">
        <div className="col-lg mx-4">
          <h5>SearchFor </h5>
          <input
            type="text"
            name="role"
            id="job_role"
            className="form-control"
            placeholder="Job Title or Keyword"
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setSearchProp("role");
            }}
          />
        </div>
        <div className="col-lg mx-4">
          <h5>Where</h5>
          <input
            type="text"
            name="location"
            id="job_location"
            className="form-control"
            placeholder="City State or Zip Code"
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setSearchProp("location");
            }}
          />
        </div>
        {/* <div className="col-sm">
          <h5>Department</h5>
          <input
            type="text"
            name="department"
            id="department"
            className="form-control"
            placeholder="City State or Zip Code"
            onChange={(event) => {
              setSearchTerm(event.target.value);
              setSearchProp("dept");
            }}
          />
        </div> */}
        {/* <div className="col mt-4">
            <Button variant="secondary">Search Jobs</Button>
          </div> */}
        <div>
          <div className="container">
            <div className="row">
              {
                data.length ? 
                <>{
                  data?.map((val, key) => {
                  return (
                    <div className="col-sm-4 gy-4" key={key}>
                      <Link
                        to="/jdetail"
                        style={{ textDecoration: "none" }}
                        state={{ from: val }}

                      >
                        <Card style={{ backgroundColor: "#1c1c1e",minHeight:"120px" }}>
                          {/* <Card.Img variant="top" src={val.imgPath} style={{objectFit:"cover",height:"300px"}}/> */}
                          <Card.Body>
                            <Card.Title>{val?.role}</Card.Title>
                            <Card.Text style={{fontWeight:"500"}}>{val?.location}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  );
                }
                )}
              </>:
              <div className="d-flex justify-content-center my-5">
                <Card style={{background:"#1c1c1e"}}>
                  <Card.Text className="p-4 rounded">No job found</Card.Text>
                 </Card>
              </div>
              
              }
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default FindJobs;
