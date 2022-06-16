import React from "react";
import '../Panel/panel.scss'

const Panel = ({children}) => {
  return(
    <div className="panel">
      {children}
    </div>
  );
};

export default Panel;