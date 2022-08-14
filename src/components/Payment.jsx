import {FiEdit} from 'react-icons/fi'

const Payment = () => {
  return (
    <div className='bg-custom w-11/12 lg:w-1/3 mx-auto p-4 rounded-lg text-white'>
        <div className="flex items-center justify-between mb-16">
            <h3 className="">حساب های متصل به درگاه</h3>
            <button className="px-4 py-2 bg-yellow-500 rounded-lg cursor-pointer">افزودن کارت</button>
        </div>
        <div className="flex items-center justify-between bg-secondary w-full p-8 rounded-lg mb-4">
            <span className="">5859 8310 5869 6547</span>
            <FiEdit />
        </div>
        <div className="flex items-center justify-between bg-secondary w-full p-8 rounded-lg mb-8">
            <span className="">5859 8310 5869 6547</span>
            <FiEdit />
        </div>
        <div className="bg-secondary p-6 flex flex-col gap-2 rounded-lg">
            <span className="">موجودی</span>
            <span className="font-black text-lg text-left">624,024,555 میلیون تومان</span>
        </div>
    </div>
  )
}

export default Payment