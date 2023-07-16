import StepsList from "../components/step-list/StepsList";
import DropDownSet from "../components/DropDowns/dropdown-set/DropDownSet";
import InputSet from "../components/Inputs/input-set/InputSet";
import ButtonSet from "../components/Buttons/button-set/ButtonSet";

// TODO: Replace all inputs and dropdowns with api information.

function SpeedPage() {
  return (
    <div>
      <InputSet />
      <DropDownSet />
      <StepsList />
      <ButtonSet />
    </div>
  );
}

export default SpeedPage;
