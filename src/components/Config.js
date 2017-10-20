import React, { Component } from "react";

class Config extends Component {
  onSetWidth2() {
    this.props.setWidth(470, 3);
  }
  onSetWidth3() {
    this.props.setWidth(710, 4);
  }
  onSetWidth4() {
    this.props.setWidth(950, 5);
  }

  onSetHeight1() {
    if (this.props.headerRow) {
      this.props.setHeight(230, 2);
    } else {
      this.props.setHeight(230, 3);
    }
  }

  onSetHeight2() {
    this.props.setHeight(470, 7);
  }
  onSetHeight3() {
    this.props.setHeight(710, 11);
  }

  onToggleHeaderRow() {
    this.props.toggleHeaderRow();

    if (this.props.height === 230) {
      if (this.props.headerRow) {
        this.props.setHeight(230, 3);
      } else {
        this.props.setHeight(230, 2);
      }
    }
  }

  toggleColumn1() {
    this.props.toggleColumn(0);
  }

  toggleColumn2() {
    this.props.toggleColumn(1);
  }
  toggleColumn3() {
    this.props.toggleColumn(2);
  }
  toggleColumn4() {
    this.props.toggleColumn(3);
  }
  toggleColumn5() {
    this.props.toggleColumn(4);
  }

  toggleColumn6() {
    this.props.toggleColumn(5);
  }

  styles = {
    container: {
      backgroundColor: "#eee",
      borderRadius: 3,
      margin: 20,
      padding: 20,
      color: "#333",
      width: 300,
      float: "left"
    },
    title: {
      width: "100%",
      height: 41,
      fontSize: 21,
      paddingLeft: 14,
      paddingRight: 14,
      paddingTop: 14
    }
  };

  render() {
    return (
      <div style={this.styles.container}>
        <h2>Configure</h2>
        <p>Width</p>
        <button onClick={this.onSetWidth2.bind(this)}>2</button>
        <button onClick={this.onSetWidth3.bind(this)}>3</button>
        <button onClick={this.onSetWidth4.bind(this)}>4</button>
        <p>Height</p>
        <button onClick={this.onSetHeight1.bind(this)}>1</button>
        <button onClick={this.onSetHeight2.bind(this)}>2</button>
        <button onClick={this.onSetHeight3.bind(this)}>3</button>
        <p>Header Row</p>

        <input
          type="checkbox"
          checked={this.props.headerRow}
          onChange={this.onToggleHeaderRow.bind(this)}
        />
        <div>
          <p>Columns</p>
          <input
            type="checkbox"
            name="column1"
            onChange={this.toggleColumn1.bind(this)}
            checked={this.props.data[0].on}
          />
          <label>Project name (string)</label>
          <br />
          <input
            type="checkbox"
            name="column2"
            onChange={this.toggleColumn2.bind(this)}
            checked={this.props.data[1].on}
          />
          <label>Budget (currency)</label>
          <br />
          <input
            type="checkbox"
            name="column3"
            onChange={this.toggleColumn3.bind(this)}
            checked={this.props.data[2].on}
          />
          <label>Conversion Rate (percentage)</label>
          <br />
          <input
            type="checkbox"
            name="column4"
            onChange={this.toggleColumn4.bind(this)}
            checked={this.props.data[3].on}
          />
          <label>Due Date (date)</label>
          <br />
          <input
            type="checkbox"
            name="column5"
            onChange={this.toggleColumn5.bind(this)}
            checked={this.props.data[4].on}
          />
          <label>Manager (String)</label>
          <br />
          <input
            type="checkbox"
            name="column6"
            onChange={this.toggleColumn6.bind(this)}
            checked={this.props.data[5].on}
          />
          <label>Country (Short String)</label>
        </div>
      </div>
    );
  }
}

export default Config;
