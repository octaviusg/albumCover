import React, { useState } from "react";
import "./popUp.css";
import CloseIcon from "@material-ui/icons//Close";

export default function PopUp() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div onClick={toggleModal} className="btn-modal">
        Catalog number?
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="cat-header">Cat &#8470;</h2>
            <p>
              A catalog number is an identifier for all music that is released
              by a record label. The majority of albums out there should have
              this number, either written on the record itself, album artwork,
              or sleeves.
            </p>
            <p>
              This number can also have letters, sometimes divided by a hyphen.
            </p>

            <p>
              The label assigns these to help distinguish a music release.
              <p> Catalog numbers will vary from music label to music label.</p>
            </p>

            <span className="look">Lets have a look!</span>

            <div className="close-modal" onClick={toggleModal}>
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
