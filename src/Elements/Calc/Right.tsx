import useTipStore from "../../store";

const Right = () => {
  const { bill, tip, customTip, reset, numberOfPeople } = useTipStore((s) => s);

  return (
    <section className="bg-very-dark-cyan rounded-xl p-10 flex items-stretch flex-col lg:p-6">
      <div className="flex items-center justify-between">
        <p className="text-white">
          Tip Amount <span>/ person</span>
        </p>
        <h1>
          {bill
            ? tip
              ? numberOfPeople
                ? (((bill / 100) * tip) / numberOfPeople).toFixed(2)
                : "0.00"
              : customTip
              ? numberOfPeople
                ? (((bill / 100) * customTip) / numberOfPeople).toFixed(2)
                : "0.00"
              : "0.00"
            : "0.00"}
        </h1>
      </div>
      <div className="flex items-center justify-between mt-16 lg:mt-8">
        <p className="text-white">
          Total <span>/ person</span>
        </p>
        <h1>
          {bill
            ? tip
              ? numberOfPeople
                ? (
                    ((bill / 100) * tip + Number(bill)) /
                    numberOfPeople
                  ).toFixed(2)
                : "0.00"
              : customTip
              ? numberOfPeople
                ? (
                    ((bill / 100) * customTip + Number(bill)) /
                    numberOfPeople
                  ).toFixed(2)
                : "0.00"
              : "0.00"
            : "0.00"}
        </h1>
      </div>
      <button
        className="mt-auto py-3 uppercase bg-strong-cyan rounded-lg opacity-40 text-very-dark-cyan text-xl transition-opacity lg:mt-8"
        style={
          bill
            ? tip
              ? numberOfPeople
                ? { opacity: 1 }
                : {}
              : customTip
              ? numberOfPeople
                ? { opacity: 1 }
                : {}
              : {}
            : {}
        }
        onClick={reset}
      >
        reset
      </button>
    </section>
  );
};

export default Right;
