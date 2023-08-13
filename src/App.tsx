import Calc from "./Elements/Calc";

const App = () => {
  return (
    <main className="flex flex-col gap-[88px] items-center justify-center h-screen lg:justify-normal lg:pt-[50px] lg:gap-10">
      <img src="./logo.svg" alt="logo" />
      <Calc />
    </main>
  );
};

export default App;
