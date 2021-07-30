import './index.css';

function Slider(props) {
  const { list, onChange, currentValue } = props;

  const backChange = () => {
    let newPosistion = list.indexOf(currentValue) - 1;
    if (newPosistion < 0) {
      newPosistion = list.length - 1;
    }
    onChange(list[newPosistion]);
  };

  const nextChange = () => {
    let newPosistion = list.indexOf(currentValue) + 1;
    if (newPosistion >= list.length) {
      newPosistion = 0;
    }
    onChange(list[newPosistion]);
  };
  if (list.length === 0) {
    return null;
  }
  return (
    <div className="slider">
      <button type="button" onClick={backChange}>
        Back
      </button>
      {list.map((stockCode) => {
        return (
          <div key={stockCode} className={`${stockCode == currentValue ? 'active' : ''} stock`}>
            {stockCode}
          </div>
        );
      })}
      <button type="button" onClick={nextChange}>
        Next
      </button>
    </div>
  );
}

export default Slider;
