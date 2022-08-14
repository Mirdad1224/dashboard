import FactorList from "../components/FactorList";
import Payment from "../components/Payment";
import StoreFactor from "../components/StoreFactor";


const Factor = () => {
  return (
    <div className="w-11/12 mx-auto pb-5">
      <div className="w-full mx-auto flex flex-col lg:flex-row mb-20 gap-2">
        <FactorList />
        <Payment />
      </div>
      <StoreFactor />
    </div>
  );
};

export default Factor;
