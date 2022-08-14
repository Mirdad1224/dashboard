import { sellData } from "../data";

const SellTable = ({fullWidth}) => {
  return (
    <div className={`mx-auto p-2 bg-custom text-cyan-300 rounded-lg overflow-x-scroll lg:overflow-hidden w-[90%] ${fullWidth ? '' : 'xl:w-2/3'}`}>
      <p className="p-2 m-2">آخرین تراکنش ها</p>
      <table className="p-2 w-full">
        <thead className="flex items-center justify-between p-2 mb-2 text-yellow-600">
          <th className="text-right w-40">نام کالا</th>
          <th className="text-right w-40">نام خریدار</th>
          <th className="text-right w-40">مبلغ تراکنش</th>
          <th className="text-center w-40">وضعیت</th>
        </thead>
        {sellData.map((item) => (
          <tr
            key={item.id}
            className="flex items-center justify-between p-2 mb-2 border-b border-gray-600"
          >
            <td className="text-right w-40 text-white">{item.productName}</td>
            <td className="text-right w-40">{item.customerName}</td>
            <td className="text-right w-40">{item.price}</td>
            <td
              className={`w-40 text-white text-center rounded ${
                item.status.startsWith("م")
                  ? "bg-green-400"
                  : item.status.startsWith("ن")
                  ? "bg-red-400"
                  : "bg-orange-400"
              }`}
            >
              {item.status}
            </td>
            </tr>
        ))}
      </table>
    </div>
  );
};

export default SellTable;
