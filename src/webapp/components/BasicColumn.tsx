import React from "react";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";

class BasicColumn extends React.Component {
  render() {
    const data = [
      {
        year: "1 月",
        sales: 38
      },
      {
        year: "2 月",
        sales: 52
      },
      {
        year: "3 月",
        sales: 61
      },
      {
        year: "4 月",
        sales: 145
      },
      {
        year: "5 月",
        sales: 48
      },
      {
        year: "6 月",
        sales: 38
      },
      {
        year: "7 月",
        sales: 38
      },
      {
        year: "1962 年",
        sales: 38
      }
    ];
    const cols = {
      sales: {
        tickInterval: 20
      }
    };
    return (
      <div>
        <Chart height={400} data={data} scale={cols} forceFit>
        <span style={{color:'rgb(51, 51, 51)',display:'block',padding:'10px',fontSize:'18px',textAlign:'center'}}>
            沈阳上发焊接生产完成率
          </span>
          <Axis name="year" />
          <Axis name="sales" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="year*sales" />
        </Chart>
      </div>
    );
  }
}
export default BasicColumn ;