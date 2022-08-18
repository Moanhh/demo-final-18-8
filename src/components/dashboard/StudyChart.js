import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const StudyChart = () => {
  const chartoptions = {
    series: [
      {
        name: "This week",
        data: [0, 0.75, 1.5, 2, 1.2, 1.8, 1.25],
      },
      {
        name: "Last week",
        data: [0, 1, 1.75, 1.15, 2.1, 1.3, 1.8],
      },
    ],
    options: {
      chart: {
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        strokeDashArray: 3,
      },

      stroke: {
        curve: "smooth",
        width: 1,
      },
      xaxis: {
        categories: [
          "Mon",
          "Tues",
          "Wed",
          "Thurs",
          "Fri",
          "Sat",
          "Sun",
          
        ],
      },
    },
  };
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Summary</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Weekly Report
        </CardSubtitle>
        <Chart
          type="area"
          width="100%"
          height="390"
          options={chartoptions.options}
          series={chartoptions.series}
        ></Chart>
      </CardBody>
    </Card>
  );
};

export default StudyChart;
