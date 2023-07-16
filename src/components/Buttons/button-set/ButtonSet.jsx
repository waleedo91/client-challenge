import React from "react";
import SaveButton from "../save-button/SaveButton";
import DeleteButton from "../delete-button/DeleteButton";
import CancelButton from "../cancel-button/CancelButton";

function ButtonSet() {
  return (
    <div>
      <SaveButton />
      <DeleteButton />
      <CancelButton />
    </div>
  );
}

export default ButtonSet;
