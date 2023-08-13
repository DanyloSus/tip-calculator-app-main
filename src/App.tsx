import Calc from "./Elements/Calc";

const App = () => {
  return (
    <main className="flex flex-col gap-[88px] items-center justify-center h-screen">
      <img src="./logo.svg" alt="logo" />
      <Calc />
    </main>
  );
};

export default App;
