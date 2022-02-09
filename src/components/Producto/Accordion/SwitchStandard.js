import React, { useState } from "react";

import "./SwitchStandard.css";

const SwitchStandard = ({ beforeState, afterState, valueSwitch, onChangeSwitch }) => {
	/* const [stateSwitch, setStateSwitch] = useState(false);

	console.log('//',stateSwitch);
 */
  return (
		<div className="container-switch">
			<p>{afterState}</p>
			<label className="switch">
				<input type="checkbox"  value={valueSwitch} onChange={onChangeSwitch}  /> <div></div>
			</label>
			<p>{beforeState}</p>
		</div>
  );
};

export default SwitchStandard;
