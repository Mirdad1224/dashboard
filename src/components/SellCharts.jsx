import Chart from 'react-apexcharts'



const options =  {
    chart: {
        fontFamily: 'IranSans, Helvetica, Arial, sans-serif',
        foreColor: '#fff'
    },
    xaxis: {
      categories: ['فروردین','اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی' , 'بهمن', 'اسفند']
    },
    grid: {
        strokeDashArray: 10,
    },
    dataLabels: {
        enabled: false,
    }    
}

const series = [{
    name: 'اپلیکیشن',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 100, 113,98]
  },
  {
    name: 'وبسایت',
    data: [40, 60, 50, 35, 60, 65, 40, 70, 85, 60, 45, 60]
  },
]

const SellCharts = () => {


  return (
    <div className='mx-4 p-2 bg-custom text-cyan-300 mb-20 rounded-lg overflow-x-scroll lg:overflow-hidden'>
        <p className="p-2"> بررسی فروش سالانه</p>
        <Chart className='text-gray-400 p-4 text-xl' options={options} series={series} type="area" width={700} height={400} />
    </div>
  )
}

export default SellCharts