import Left from "./Calc/Left";
import Right from "./Calc/Right";

const Calc = () => {
  return (
    <div className="flex bg-white rounded-3xl px-12 py-8 gap-12 shadow-xl lg:flex-col lg:px-6 lg:rounded-b-none lg:gap-8">
      <Left />
      <Right />
    </div>
  );
};

export default Calc;
