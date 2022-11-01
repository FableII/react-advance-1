import React, {Component} from "react"

class RenderPropsComponent extends Component {
    render() {
      return (
        <div>
          <h2>I am Child Component</h2>
          {this.props.render()}
        </div>
      )
    }
  }

  export default RenderPropsComponent