import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }
  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        fontFamily: "inter",
      },
      axisY: {
        includeZero: true,
        suffix: "%",
      },
      toolTip: {
        shared: true,
        reversed: true,
      },
      legend: {
        verticalAlign: "center",
        horizontalAlign: "right",
        reversed: true,
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "stackedColumn",
          name: "Short",
          showInLegend: true,
          yValueFormatString: "#,###k",
          dataPoints: [
            { label: "3:00-4:00", y: 14 },
            { label: "4:00-5:00", y: 12 },
            { label: "5:00-6:00", y: 14 },
            { label: "6:00-7:00", y: 13 },
            { label: "7:00-8:00", y: 13 },
            { label: "8:00-9:00", y: 13 },
          ],
        },
        {
          type: "stackedColumn",
          name: "Long",
          showInLegend: true,
          yValueFormatString: "#,###k",
          dataPoints: [
            { label: "3:00-4:00", y: 13 },
            { label: "4:00-5:00", y: 13 },
            { label: "5:00-6:00", y: 15 },
            { label: "6:00-7:00", y: 16 },
            { label: "7:00-8:00", y: 17 },
            { label: "8:00-9:00", y: 17 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}
export default App;
