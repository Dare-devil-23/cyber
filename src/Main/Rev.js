import React ,{ Component } from "react";
import { RandomReveal } from "react-random-reveal";

class Rev extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      data: props.data,
    };
  }
  // state = {  }
  render() {
    return (
      <>
        {!this.state.hover && (
          <span
            onMouseEnter={() => {
              this.setState({ hover: true });
            }}
          >
            {this.state.data}
          </span>
        )}
        {this.state.hover && (
          <span
            onMouseLeave={() => {
              this.setState({ hover: false });
            }}
          >
            <RandomReveal
              isPlaying
              duration={1}
              revealDuration={0.5}
              characters={this.state.data}
            />
          </span>
        )}
      </>
    );
  }
}

export default Rev;
