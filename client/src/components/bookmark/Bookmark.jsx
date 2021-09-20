import React from "react";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import ToggleButton from "@material-ui/lab/ToggleButton";

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="bookmark"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <TurnedInNotIcon />
    </ToggleButton>
  );
}
