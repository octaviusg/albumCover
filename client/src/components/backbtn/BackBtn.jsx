import { useHistory } from "react-router-dom";

import { VscChevronLeft } from "react-icons/vsc";

export default function BackBtn() {
  let history = useHistory();
  return (
    <>
      <VscChevronLeft className="arrowPad" onClick={() => history.goBack()} />
    </>
  );
}
