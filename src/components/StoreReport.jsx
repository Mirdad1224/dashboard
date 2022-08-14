import {FiAlertOctagon} from 'react-icons/fi'
import {MdDone} from 'react-icons/md'

const data = [
    {id: 1, icon: <FiAlertOctagon className='text-lg text-red-700' />, title:'موجودی یخچال ها به پایان رسیده است'},
    {id: 2, icon: <MdDone className='text-lg text-green-700' />, title:'تعداد 500 عدد ساعت دیواری اضافه شد'},
    {id: 3, icon: <MdDone className='text-lg text-green-700' />, title:'تهویه ی انبار تعمیر گردید'},
    {id: 4, icon: <FiAlertOctagon className='text-lg text-red-700' />, title:'تنها 2 ماشین لباسشویی باقی مانده است'},
    {id: 5, icon: <MdDone className='text-lg text-green-700' />, title:'قرارداد انبار تمدید شد'},
    {id: 6, icon: <FiAlertOctagon className='text-lg text-red-700' />, title:'بیش از 5 تراکنش ناموق در هفته ی اخیر'},
]

const StoreReport = () => {
  return (
    <div className='p-2 bg-custom text-cyan-300 text-sm sm:text-base mx-auto rounded-lg w-full xl:w-1/3'>
        <p className="p-2 m-2">آخرین گزارشات انبار</p>
        {data.map(item => (
            <div className="text-white flex items-center gap-2 mb-8 mx-2" key={item.id}>
                {item.icon}
                <p className="">{item.title}</p>
            </div>
        ))}
    </div>
  )
}

export default StoreReport