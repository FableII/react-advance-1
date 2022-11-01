import React, { Component } from "react";
import RenderPropsComponent from "./RenderPropsComponent";

class SampleRenderProps extends Component {
  render() {
    return (
      <RenderPropsComponent
        // Passing render props to the child component
        render={() => {
          return (
            <div>
              <p>I am coming from render props</p>
            </div>
          );
        }}
      />
    );
  }
}

export default SampleRenderProps;
