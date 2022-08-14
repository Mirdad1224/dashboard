
import { membersData } from '../data'


const MembersTable = () => {
  return (
    <div className="mx-auto overflow-x-scroll lg:overflow-hidden p-2 bg-custom text-cyan-300 mb-20 rounded-lg w-[90%]">
      <p className="p-2 m-2">اعضای تیم</p>
      <table className="p-2 w-full">
        <tr className="flex items-center justify-between p-2 mb-2 text-yellow-600">
          <th className="text-right w-60">اعضا</th>
          <th className="text-right w-40">جایگاه</th>
          <th className="text-right w-40">تاریخ عضویت</th>
          <th className="text-center w-40">وضعیت</th>
          
          <th className="text-center w-40">ویرایش</th>
        </tr>
        {membersData.map((item) => (
          <tr
            key={item.id}
            className="flex items-center justify-between p-2 mb-2 border-b border-gray-600"
          >
            <td className="text-right w-60 text-white flex items-center gap-1">
                <img src={item.img} alt="" className="w-12 rounded-full" />
                <div className="flex flex-col gap-1 text-sm">
                    <span className="">{item.name}</span>
                    <span className="">{item.email}</span>
                </div>
            </td>
            <td className="text-right w-40">{item.role}</td>
            <td className="text-right w-40">{item.history}</td>
            <td
              className={`w-40 text-white text-center rounded ${
                item.status.startsWith("آن")
                  ? "bg-green-400"
                  : 'bg-red-300'
              }`}
            >
              {item.status}
            </td>
            <td className='text-center w-40 cursor-pointer'>ویرایش</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default MembersTable