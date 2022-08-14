import InformationBox from "../components/InformationBox";
import { IoIosToday } from "react-icons/io";
import { FaUserPlus, FaUserAlt, FaRegMoneyBillAlt } from "react-icons/fa";
import SellCharts from "../components/SellCharts";
import UsersCharts from "../components/UsersCharts";
import StoreReport from "../components/StoreReport";
import SellTable from "../components/SellTable";
import BestProducts from "../components/BestProducts";

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-20 mx-4 gap-2">
        <InformationBox
          icon={<IoIosToday className="text-2xl" />}
          dataNumber="10,000,000"
          percent="8 +"
          title="فروش امروز (میلیون)"
        />
        <InformationBox
          icon={<FaUserAlt className="text-2xl" />}
          dataNumber="2341"
          percent="1 -"
          title="کاربران امروز"
        />
        <InformationBox
          icon={<FaUserPlus className="text-2xl" />}
          dataNumber="125"
          percent="1 -"
          title="مشتریان جدید"
        />
        <InformationBox
          icon={<FaRegMoneyBillAlt className="text-2xl" />}
          dataNumber="630,000,000"
          percent="2 +"
          title="فروش کل (میلیون)"
        />
      </div>
      <div className="flex justify-center flex-col gap-4 xl:flex-row w-11/12 mx-auto">
        <SellCharts />
        <UsersCharts />
      </div>
      <BestProducts />
      <div className="flex justify-center mx-auto w-11/12 p-4 flex-col gap-4 xl:flex-row">
        <SellTable  fullWidth={0} />
        <StoreReport />
      </div>
      
    </div>
  );
};

export default Home;
