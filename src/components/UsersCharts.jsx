import Chart from "react-apexcharts";

const options = {
  chart: {
    fontFamily: "IranSans, Helvetica, Arial, sans-serif",
    foreColor: "#fff",
  },
  xaxis: {
    categories: [
      "علی میرداد",
      "محمد رسولی",
      "مهدی صادقی",
      "سینا صادقی",
      "یاسمین رهایی",
    ],
  },
  theme: {
    palette: 'palette2'
  },
  grid: {
    strokeDashArray: 10,
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "میزان خرید (میلیون)",
    data: [30, 40, 35, 50, 49],
  },
];

const UsersCharts = () => {
  return (
    <div className="mx-4 p-2 bg-custom text-cyan-300 mb-20 rounded-lg overflow-x-scroll lg:overflow-hidden">
        <p className="p-2">کاربران فعال در این هفته</p>
      <Chart
        className="text-gray-400 p-4 text-xl"
        options={options}
        series={series}
        type="bar"
        width={500}
        height={400}
      />
    </div>
  );
};

export default UsersCharts;
