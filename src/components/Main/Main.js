import "./Main.css";
const Main = ({ callback }) => {
  return (
    <div className="main">
      <p className="header">Tower Of Hanoi</p>
      <div className="new-game" onClick={callback}>
        <p>New Game</p>
      </div>
    </div>
  );
};
export default Main;
