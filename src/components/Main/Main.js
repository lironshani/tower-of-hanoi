const Main = ({ callback }) => {
  return (
    <div>
      <div className="new-game" onClick={callback}>
        <p>New Game</p>
      </div>
    </div>
  );
};
export default Main;
