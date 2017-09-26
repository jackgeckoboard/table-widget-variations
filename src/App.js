import React, { Component } from "react";
import "./App.css";
import Config from "./components/Config";
import Visualization from "./components/Visualization";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 470,
      height: 470,
      headerRow: true,
      numberOfRows: 7,
      data: [
        {
          on: true,
          heading: "Project",
          rows: [
            "Oxford University",
            "Transport for London",
            "BBC",
            "Waitrose",
            "Big Evil Mega Corp",
            "Lloyds Bank",
            "Landrover Jaguar"
          ]
        },
        {
          on: true,
          heading: "Budget",
          rows: ["£110M", "£40M", "£632M", "£2M", "£89M", "£1,290M", "£780M"]
        },
        {
          on: false,
          heading: "Conversion Rate",
          rows: ["1.67%", "12.89%", "4.97%", "6.00%", "3.80%", "7.18%", "0.02%"]
        },
        {
          on: false,
          heading: "Due Date",
          rows: [
            "17 September 2017",
            "8 January 2018",
            "29 December 2017",
            "16 May 2019",
            "4 April 2018",
            "22 November 2017",
            "1 June 2018"
          ]
        },
        {
          on: false,
          heading: "Manager",
          rows: [
            "Milton Brady",
            "Virginia Curtis",
            "Freddie Watson",
            "Roxanne Robertson",
            "Wesley Garza",
            "Cary Goodwin",
            "Margie McKinney"
          ]
        }
      ]
    };
  }

  onToggleColumn(columnNumber) {
    let updatedColumnState = this.state.data;
    if (this.state.data[columnNumber].on) {
      updatedColumnState[columnNumber].on = false;
      this.setState({ data: updatedColumnState });
    } else {
      updatedColumnState[columnNumber].on = true;
      this.setState({ data: updatedColumnState });
    }
  }

  onSetWidth(width) {
    this.setState({
      width: width
    });
  }

  onSetHeight(height) {
    this.setState({
      height: height
    });
  }

  onToggleHeaderRow() {
    if (this.state.headerRow) {
      this.setState({
        headerRow: false
      });
    } else {
      this.setState({
        headerRow: true
      });
    }
  }

  styles = {
    container: {
      backgroundColor: "#eee",
      borderRadius: 3,
      margin: 20,
      padding: 10,
      color: "#333"
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
    let allData = this.state.data;
    let transformedData = [];

    for (
      let currentRow = 0;
      currentRow < this.state.numberOfRows;
      currentRow++
    ) {
      transformedData.push([]);
      for (
        let currentColumn = 0;
        currentColumn < allData.length;
        currentColumn++
      ) {
        if (allData[currentColumn].on) {
          let value = allData[currentColumn].rows[currentRow];
          transformedData[currentRow].push(value);
        }
      }
    }

    let headings = [];

    for (
      let currentColumn = 0;
      currentColumn < allData.length;
      currentColumn++
    ) {
      if (allData[currentColumn].on) {
        headings.push([]);
        headings[currentColumn].push(allData[currentColumn].heading);
        if (currentColumn === 0 || currentColumn === 4) {
          headings[currentColumn].push("string");
        } else if (currentColumn === 3) {
          headings[currentColumn].push("date");
        } else {
          headings[currentColumn].push("number");
        }
      }
    }

    console.log(headings);

    console.log(transformedData);

    return (
      <div>
        <Config
          setWidth={this.onSetWidth.bind(this)}
          setHeight={this.onSetHeight.bind(this)}
          headerRow={this.state.headerRow}
          toggleHeaderRow={this.onToggleHeaderRow.bind(this)}
          toggleColumn={this.onToggleColumn.bind(this)}
          data={this.state.data}
        />
        <Visualization
          width={this.state.width}
          height={this.state.height}
          headerRow={this.state.headerRow}
          headings={headings}
          data={transformedData}
        />
      </div>
    );
  }
}

export default App;
