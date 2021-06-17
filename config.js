const config = {
  type: "line",
  data: data,
  options: {
    maintainAspectRatio: false,
    responsive: true,

    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "EUROCOPA 2020-21",
        font: {
          family: "Open Sans",
          size: 30,
          weight: "bold",
          lineHeight: 1.2,
        },
      },
      legend: {
        position: "left",
        align: "middle",

        labels: {
          padding: 20,
          font: {
            size: 14,
            weight: 300,
          },
        },
      },
    },

    scales: {
      x: {
        type: "linear",
        ticks: {
          stepSize: 1,
        },

        grid: {
          drawBorder: true,
          color: function (context) {
            if (context.tick.value % 12 == 0) {
              return "rgba(255,0,0,1)";
            }
            return "#D3D3D3";
          },
        },
        display: true,
        title: {
          display: true,
          text: "Partidos",
          color: "#911",
          font: {
            family: "Open Sans",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 20, left: 0, right: 0, bottom: 0 },
        },
      },

      y: {
        position: "right",
        display: true,
        grid: {
          drawBorder: true,
          color: function (context) {
            if (context.tick.value % 10 == 0) {
              return "rgba(255,0,0,1)";
            } else if (context.tick.value % 5 == 0) {
              return "rgba(255,0,0,0.3)";
            }
            return "#D3D3D3";
          },
        },
        ticks: {
          maxTicksLimit: 1000,

          stepSize: 1,
          callback: function (value, index, values) {
            if (value % 2 === 0) {
              return value;
            } else {
              return " ";
            }
          },
        },
        title: {
          display: true,
          text: "Puntos",
          color: "#191",

          font: {
            family: "Open Sans",
            size: 20,
            weight: "bold",
            lineHeight: 1.2,
          },
          padding: { top: 0, left: 0, right: 0, bottom: 20 },
        },
      },
    },
  },
};
