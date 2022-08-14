import ReactApexChart from "react-apexcharts";

const series = [140, 110, 90, 168,54];
const options = {
  stroke: {
    colors: ["#fff"],
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  yaxis: {
    show: false
  },
  fill: {
    opacity: 0.8,
  },
  chart: {
    fontFamily: 'IranSans, Helvetica, Arial, sans-serif',
    foreColor: '#fff'
  },
  labels: ['یخچال', 'تلویزیون', 'ماشین لباسشویی', 'ساعت دیواری', 'جاروبرقی'],

};

const BestProducts = () => {
  return <div className="bg-custom mx-auto my-4 w-11/12 lg:w-1/2 p-4 rounded-lg">
    <h3 className="text-cyan-300 font-semibold text-lg mb-4">پرسودترین محصولات(میلیون تومان)</h3>
    <ReactApexChart options={options} series={series} type="polarArea" />
  </div>;
};

export default BestProducts;
