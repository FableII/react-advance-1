import React, { Component } from "react";
import TableRow from "./TableRow";

const DummyData = [
  {
    id: 1,
    name: "Dummy",
  },
  {
    id: 2,
    name: "Stupid",
  },
  {
    id: 3,
    name: "Ugly",
  },
];

class DummyList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  tabRow() {
    if (this.props.data instanceof Array) {
      return this.props.data.map(function (object, i) {
        return <TableRow obj={object} key={i} />;
      });
    }
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}

const Dummy = () => {
  return (
    <>
      <h1>0. Just component</h1>
      <DummyList data={DummyData}></DummyList>
    </>
  );
};

export default Dummy;
