import useTipStore from "../../store";

const Left = () => {
  const {
    bill,
    changeBill,
    tip,
    changeTip,
    staticChangeTip,
    numberOfPeople,
    changeNumberOfPeople,
  } = useTipStore((s) => s);

  return (
    <section className="flex flex-col gap-12">
      <div className="relative">
        <p>Bill</p>
        <img
          src="./icon-dollar.svg"
          alt="icon dollar"
          className="absolute bottom-4 left-4"
        />
        <input
          type="number"
          name="bill"
          placeholder="0"
          value={bill ? bill : ""}
          onChange={changeBill}
        />
      </div>
      <div>
        <p>Select Tip %</p>
        <div className="grid grid-rows-2 grid-cols-3 gap-[14px]">
          <div
            onClick={() => staticChangeTip(5)}
            style={
              tip === 5
                ? {
                    background: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                  }
                : {}
            }
          >
            5%
          </div>
          <div
            onClick={() => staticChangeTip(10)}
            style={
              tip === 10
                ? {
                    background: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                  }
                : {}
            }
          >
            10%
          </div>
          <div
            onClick={() => staticChangeTip(15)}
            style={
              tip === 15
                ? {
                    background: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                  }
                : {}
            }
          >
            15%
          </div>
          <div
            onClick={() => staticChangeTip(25)}
            style={
              tip === 25
                ? {
                    background: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                  }
                : {}
            }
          >
            25%
          </div>
          <div
            onClick={() => staticChangeTip(50)}
            style={
              tip === 50
                ? {
                    background: "hsl(172, 67%, 45%)",
                    color: "hsl(183, 100%, 15%)",
                  }
                : {}
            }
          >
            50%
          </div>
          <input
            type="number"
            name="tip"
            placeholder="Custom"
            value={tip ? tip : ""}
            onChange={changeTip}
          />
        </div>
      </div>
      <div className="relative">
        <p>Number of People</p>
        <img
          src="./icon-person.svg"
          alt="icon person"
          className="absolute bottom-4 left-4"
        />
        <input
          type="number"
          name="numberOfPeople"
          placeholder="0"
          value={numberOfPeople ? numberOfPeople : ""}
          onChange={changeNumberOfPeople}
        />
      </div>
    </section>
  );
};

export default Left;
