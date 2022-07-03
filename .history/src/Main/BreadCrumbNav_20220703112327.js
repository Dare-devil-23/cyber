import { Link } from "@reach/router";
import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

class BreadCrumbNav extends Component {
  // state = {  }
  // constructor(props){
  //     super(props)
  // }
  render() {
    return (
      <>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/${this.props.data[0]}`}>{this.props.data[0]}</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/${this.props.data[1]}`}>{this.props.data[1]}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </>
    );
  }
}

export default BreadCrumbNav;
