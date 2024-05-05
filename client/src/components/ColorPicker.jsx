import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000000",
          "#525252",
          "#969696",
          "#d9d9d9",
          "#f0f0f0",
          "#ffffff",
          "#ff0000",
          "#ff7300",
          "#fffb00",
          "#00ff00",
          "#00fffb",
          "#007aff",
          "#0000ff",
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
