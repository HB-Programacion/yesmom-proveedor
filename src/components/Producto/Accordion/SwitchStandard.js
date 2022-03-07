import React from "react";

import "./SwitchStandard.css";

const SwitchStandard = ({ beforeState, afterState, valueSwitch, onChangeSwitch }) => {
  return (
		<div className="container-switch">
			<p>{beforeState}</p>
			<label className={`switch ${valueSwitch ? 'switch-active' : 'switch-not-active'}`}>
				<input type="checkbox" value={valueSwitch} onChange={onChangeSwitch}  /> <div></div>
			</label>
			<p>{afterState}</p>
		</div>
  );
};

export default SwitchStandard;
