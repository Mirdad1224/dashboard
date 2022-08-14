import { productsData } from "../data"

const Products = () => {
  return (
    <div className="pb-5">
      <div className="mx-auto p-2 bg-custom overflow-x-scroll lg:overflow-hidden text-cyan-300 mb-20 rounded-lg w-[90%]">
      <p className="p-2 m-2">مشخصات محصولات</p>
      <table className="p-2 w-full">
        <tr className="flex items-center justify-between p-2 mb-2 text-yellow-600">
          <th className="text-right w-40">ردیف</th>
          <th className="text-right w-40">نام محصول</th>
          <th className="text-right w-40">قیمت (میلیون تومان)</th>
          <th className="text-right w-40">موجودی</th>
          
          <th className="text-right w-40">ویرایش</th>
        </tr>
        {productsData.map((item) => (
          <tr
            key={item.id}
            className="flex items-center justify-between p-2 mb-2 border-b border-gray-600"
          >
            <td className="text-right w-40 text-white flex items-center gap-1">
                {item.id}
            </td>
            <td className="text-right w-40 text-white">{item.name}</td>
            <td className="text-right w-40">{item.price}</td>
            <td className="text-right w-40">
              {item.quantity}
            </td>
            <td className='text-right w-40 cursor-pointer text-red-300'>ویرایش</td>
          </tr>
        ))}
      </table>
    </div>
    </div>
  )
}

export default Products