import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <form>
      <div className="formRow appendBottom20">
        <p className="latoBold appendBottom10 stockloader-smallLoader "></p>
        <p className="stockloader-bigLoader "></p>
      </div>
      <div className="formRow appendBottom20">
        <p className="latoBold appendBottom10 stockloader-smallLoader "></p>
        <p className="stockloader-bigLoader "></p>
      </div>
      <div className="formRow appendBottom20">
        <p className="latoBold appendBottom10 stockloader-smallLoader "></p>
        <p className="stockloader-bigLoader "></p>
      </div>
      <div className="formRow appendBottom20">
        <p className="latoBold appendBottom10 stockloader-smallLoader "></p>
        <p className="stockloader-bigLoader "></p>
      </div>
      <div className="textCenter">
        <p className="stockloader-btnLoader"></p>
      </div>
    </form>
  );
};

export default Loader;
