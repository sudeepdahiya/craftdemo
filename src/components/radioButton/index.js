import React from 'react';

const RadioButton = (props) => {
  const { name, list, onClick } = props;
  const handleClick = (e) => {
    onClick(e.target.value);
  };
  return (
    <div>
      {name}
      {list.map((radio) => {
        return (
          <div>
            <input
              type="radio"
              key={radio.text}
              name={name}
              value={radio.value}
              onClick={handleClick}
            />
            {radio.text}
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
