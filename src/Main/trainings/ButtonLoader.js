import React, { Component } from "react";
import "./training.css";
export default class ButtonLoader extends Component {
  state = {
    loading: false
  };

  fetchData = () => {
    this.setState({ loading: true });

    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  };

  render() {
    const { loading } = this.state;

    return (
      <div className="spin-btn">
        <span  onClick={this.fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin spinner submitinside"
            />
          )}
          {loading && <span></span>}
          {!loading && <span className="submitinside">Submit</span>}
        </span>
      </div>
    );
  }
}
