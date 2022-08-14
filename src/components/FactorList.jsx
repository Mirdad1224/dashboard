import { factorData } from "../data"

const FactorList = () => {
  return (
    <div className='bg-custom text-cyan-300 w-11/12 lg:w-2/3 mx-auto p-4 rounded-lg'>
        <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-semibold">لیست آخرین فاکتور ها</h3>
            <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white">دیدن همه</button>
        </div>
        {factorData.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 rounded-lg mb-1 bg-secondary">
                <div className="flex flex-col gap-1">
                    <span className="text-white font-medium text-lg">{item.history}</span>
                    <span className="text-gray-300">{item.code}</span>
                </div>
                <span className="">{item.price} تومان</span>
            </div>
        ))}
    </div>
  )
}

export default FactorList