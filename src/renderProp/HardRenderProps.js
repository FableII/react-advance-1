import React, { Component } from "react";
import RenderPropsComponent from "./RenderPropsComponent";

class HardRenderProps extends Component {
  render() {
    return (
      <RenderPropsComponent
        render={() => {
          return (
            <div>
              <p>I am also coming from render props</p>
            </div>
          );
        }}
      ></RenderPropsComponent>
    );
  }
}

export default HardRenderProps;
