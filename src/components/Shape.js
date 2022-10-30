
import Chart from "react-apexcharts";
export default function Shape() {
  const series = [
    {
      name: "Total Enrollments",
      data: [80]
    },
    {
      name: "Completion",
      data: [65]
    },
    {
      name: "Qualified Canadiates",
      data: [40]
    },
    {
      name: "Reached Out",
      data: [30]
    },
    {
      name: "Interview Set",
      data: [20]
    },
    {
        name: "Canadiates Hired",
        data:[10]
    }  
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: true
    },
    grid: {
      show: false
    },

    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    stroke: {
      width: 1,
      colors: ["#fff"]
    },

    colors: ["#a933dc", "#b44de0", "#bf66e5", "#ca80e9", "#d499ed" , "#dfb3f2"],

    tooltip: {
      y: {
        formatter: function (val) {
          return Number.parseFloat(val).toFixed(1);
        }
      }
    },
    legend: {
      show: true,
      formatter: function (val, opts) {
        return (
          val +
          " - " +
          Number.parseFloat(opts.w.globals.series[opts.seriesIndex]).toFixed(
            0
          ) +
          "%"
        );
      }
    },

    fill: {
      opacity: 1
    }
  };

  return (
    <div className="App">
      <Chart
        style={{ marginTop: "-40px" }}
        options={options}
        series={series}
        type="bar"
        height="250px"
        width="400px"
      />
    </div>
  );
}
