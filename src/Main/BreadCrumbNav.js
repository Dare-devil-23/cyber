import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import "./bread.css";
class BreadCrumbNav extends Component {
  // state = {  }
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item href="/" target="_self">
            Home
          </Breadcrumb.Item >
          <Breadcrumb.Item href={`/${this.props.data[0]}`} target="_self">
            {this.props.data[0]}
          </Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default BreadCrumbNav;
