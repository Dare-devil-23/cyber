import React ,{ Component } from "react";
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
                  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  {this.props.data[0]}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>{this.props.data[1]}</Breadcrumb.Item>
                </Breadcrumb>
                
            </>
        );
    }
}
 
export default BreadCrumbNav;