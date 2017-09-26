import React, { Component } from "react";

class Visualization extends Component {
  render() {
    const styles = {
      container: {
        backgroundColor: "#2A2A2A",
        height: this.props.height,
        width: this.props.width,
        margin: 20,
        float: "left"
      },
      title: {
        width: "100%",
        height: 41,
        fontSize: 21,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 12
      }
    };

    let classes = [];

    for (let i = 0; i < this.props.headings.length; i++) {
      let heading = this.props.headings[i];
      classes.push(heading[1]);
    }

    console.log(classes);

    return (
      <div style={styles.container}>
        <div style={styles.title}>Project Management Table</div>
        <table>
          <tbody>
            {this.props.headerRow && (
              <tr>
                {this.props.headings.map(function(heading, index) {
                  return <th className={heading[1]}>{heading[0]}</th>;
                })}
              </tr>
            )}
            {this.props.data.map(function(row, index) {
              return (
                <tr>
                  {row.map(function(cell, index) {
                    return <td className={classes[index]}>{cell}</td>;
                  }, this)}
                </tr>
              );
            }, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Visualization;
