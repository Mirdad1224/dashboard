import { storeFactorData } from "../data"
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin6Fill} from 'react-icons/ri'

const StoreFactor = () => {
  return (
    <div className='text-white bg-custom p-4 rounded-lg mb-4 w-full lg:w-3/4 mx-auto'>
        <h3 className="mb-10 text-cyan-300 font-semibold text-lg">صورت حساب های انبار</h3>
        {storeFactorData.map(item => (
            
              <div className="bg-secondary rounded-lg p-8 mb-8" key={item.id}>
                <div className="flex items-center justify-between mb-8">
                    <span className="font-black text-lg">{item.product}</span>
                    <div className="flex items-center justify-between gap-8">
                      <div className="flex items-center justify-between cursor-pointer">
                        <FiEdit />
                        ویرایش
                      </div>
                      <div className="flex items-center justify-between text-red-400 cursor-pointer">
                        <RiDeleteBin6Fill />
                        حذف
                      </div>
                    </div>
                </div>
                <p className="text-gray-400 mb-4">نام شرکت : {item.productCompany}</p>
                <p className="text-gray-400 mb-4"> مجموع فاکتور : {item.allPrice}</p>
                <p className="text-gray-400 mb-4">ایمیل شرکت : {item.email}</p>
                <p className="text-gray-400 mb-4">تلفن شرکت : {item.phone}</p>
            </div>
            
        ))}
    </div>
  )
}

export default StoreFactor