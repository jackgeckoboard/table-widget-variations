import React, { Component } from "react";

class Visualization extends Component {
  onChangeSorting(i) {
    let sorted;
    let sortBy;
    let sortDescending;
    if (
      this.props.sorted &&
      this.props.sortedBy === i &&
      this.props.sortDescending === true
    ) {
      sorted = false;
      sortBy = null;
      sortDescending = false;
    } else {
      sorted = true;
      sortBy = i;
      if (this.props.sortedBy === sortBy && !this.props.sortDescending) {
        sortDescending = true;
      } else {
        sortDescending = false;
      }
    }
    this.props.onChangeSorting(sorted, sortBy, sortDescending);
  }

  onSortingNoHeader() {
    let sorted;
    let sortBy;
    let sortDescending;
    if (this.props.sorted && this.props.sortDescending === true) {
      sorted = false;
      sortBy = null;
      sortDescending = false;
    } else {
      sorted = true;
      sortBy = 0;
      if (this.props.sorted && !this.props.sortDescending) {
        sortDescending = true;
      } else {
        sortDescending = false;
      }
    }
    this.props.onChangeSorting(sorted, sortBy, sortDescending);
  }

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

    let sortedBy = this.props.sortedBy;

    let sortClass;

    if (this.props.sorted && this.props.sortDescending) {
      sortClass = "descending";
    } else if (this.props.sorted && !this.props.sortDescending) {
      sortClass = "ascending";
    }

    return (
      <div style={styles.container} className="widget">
        <div style={styles.title}>Project Management Table</div>
        <table>
          <tbody>
            {this.props.headerRow && (
              <tr>
                {this.props.headings.map(function(heading, index) {
                  return (
                    <th
                      className={heading[1]}
                      onClick={this.onChangeSorting.bind(this, index)}
                    >
                      {index === sortedBy ? (
                        <span className={"column-" + index + " " + sortClass}>
                          <span className="heading-text sorted">
                            {heading[0]}
                          </span>
                        </span>
                      ) : (
                        <span className="heading-text unsorted">
                          {heading[0]}
                        </span>
                      )}
                    </th>
                  );
                }, this)}
              </tr>
            )}
            {this.props.data.map(function(row, index) {
              return (
                <tr className={"row-" + index}>
                  {row.map(function(cell, index) {
                    return (
                      <td className={"column-" + index + " " + classes[index]}>
                        {cell}
                        {this.props.sortingLoading && (
                          <div className="cell-loading-state" />
                        )}
                      </td>
                    );
                  }, this)}
                </tr>
              );
            }, this)}
            {!this.props.headerRow && (
              <div className="sort-button-container">
                <div className="sort-overlay" />
                <div
                  onClick={this.onSortingNoHeader.bind(this)}
                  className={
                    "sort-button " + (sortClass ? sortClass : "unsorted")
                  }
                />
              </div>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Visualization;
