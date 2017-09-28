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
      maxRows: 7,
      maxColumns: 3,
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
            "Landrover Jaguar",
            "Deliveroo",
            "Independent Clothes Shop",
            "Spotify",
            "Trendy Advertising Agency",
            "Publishing House"
          ]
        },
        {
          on: true,
          heading: "Budget",
          rows: [
            "£110M",
            "£40M",
            "£632M",
            "£2M",
            "£89M",
            "£1,290M",
            "£780M",
            "£1M",
            "£19M",
            "£812M",
            "£999M",
            "$4M"
          ]
        },
        {
          on: false,
          heading: "Conversion Rate",
          rows: [
            "1.67%",
            "12.89%",
            "4.97%",
            "6.00%",
            "3.80%",
            "7.18%",
            "0.02%",
            "102.89%",
            "67.10%",
            "7.54%",
            "3.01%",
            "7.77%"
          ]
        },
        {
          on: false,
          heading: "Due Date",
          rows: [
            "17 Sep 17",
            "8 Jan 18",
            "29 Dec 17",
            "16 May 19",
            "4 Apr 18",
            "22 Nov 17",
            "1 Jun 18",
            "31 May 19",
            "5 Apr 93",
            "29 Feb 20",
            "6 Sep 18",
            "22 Oct 14"
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
            "Margie McKinney",
            "Barry Bluejeans",
            "Simon Says",
            "Apu Nahasapeemapetilon",
            "Neo",
            "Supreme Leader of the Democratic People's Republic of Korea"
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

  onSetWidth(width, maxColumns) {
    this.setState({
      width: width,
      maxColumns: maxColumns
    });
  }

  onSetHeight(height, maxRows) {
    this.setState({
      height: height,
      maxRows: maxRows
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

    for (let currentRow = 0; currentRow < this.state.maxRows; currentRow++) {
      transformedData.push([]);
      for (
        let currentColumn = 0;
        currentColumn < allData.length;
        currentColumn++
      ) {
        if (
          allData[currentColumn].on &&
          transformedData[currentRow].length < this.state.maxColumns
        ) {
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
      if (
        allData[currentColumn].on &&
        headings.length < this.state.maxColumns
      ) {
        headings.push([]);
        headings[headings.length - 1].push(allData[currentColumn].heading);
        if (currentColumn === 0 || currentColumn === 4) {
          headings[headings.length - 1].push("string");
        } else if (currentColumn === 3) {
          headings[headings.length - 1].push("date");
        } else {
          headings[headings.length - 1].push("number");
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
          height={this.state.height}
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
