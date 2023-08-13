import Left from "./Calc/Left";
import Right from "./Calc/Right";

const Calc = () => {
  return (
    <div className="flex bg-white rounded-3xl px-12 py-8 gap-12 shadow-xl">
      <Left />
      <Right />
    </div>
  );
};

export default Calc;
