import Toggle from "../components/Toggle";

const Profile = () => {
  return (
    <div className="pb-5">
      <div className="bg-custom rounded-lg mx-auto p-4 w-11/12 mb-10">
        <h3 className="text-cyan-300 font-semibold text-lg mb-8 border-b pb-5">
          اطلاعات حساب کاربری
        </h3>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-white">نام و نام خانوادگی :</span>
          <span className="text-gray-300">علی میرداد</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-white">موبایل:</span>
          <span className="text-gray-300">09102887735</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-white">ایمیل:</span>
          <span className="text-gray-300">ali.mirdad75@gmail.com</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <span className="text-white">آدرس:</span>
          <span className="text-gray-300">سمنان</span>
        </div>
      </div>
      <div className="bg-custom rounded-lg mx-auto p-4 w-11/12 mb-10">
        <h3 className="text-cyan-300 font-semibold text-lg mb-8 border-b pb-5">
          تنظیمات حساب
        </h3>
        <div className="flex items-center gap-2 mb-10">
          <Toggle id='toggle1' />
          <span className="text-white">گزارش درآمد روزانه</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <Toggle id='toggle2' />
          <span className="text-white">گزارش درآمد ماهانه</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <Toggle id='toggle3' />
          <span className="text-white">گزارش خرید</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <Toggle id='toggle4' />
          <span className="text-white">گزارش فعالیت اعضا</span>
        </div>
        <div className="flex items-center gap-2 mb-10">
          <Toggle id='toggle5' />
          <span className="text-white">گزارش موجودی انبار</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
