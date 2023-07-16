import DeleteButton from "../../Buttons/delete-button/DeleteButton";
import SaveButton from "../../Buttons/save-button/SaveButton";
import CancelButton from "../../Buttons/cancel-button/CancelButton";
import "./ButtonsSection.css";

function ButtonsSection() {
  return (
    <div className="button-set">
      <SaveButton />
      <DeleteButton />
      <CancelButton />
    </div>
  );
}

export default ButtonsSection;
