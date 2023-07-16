import StepMin from "../components/sections/top-section/StepMin";
import HoursDirection from "../components/sections/bottom-section/HoursDirection";
import ButtonsSection from "../components/sections/button-section/ButtonsSection";
import StepsList from "../components/step-list/StepsList";
import "./SpeedPage.css";

// TODO: Replace all inputs and dropdowns with api information.

function SpeedPage() {
  return (
    <div className="main-page">
      <div>
        <StepsList />
      </div>
      <div>
        <StepMin />
        <HoursDirection />
        <ButtonsSection />
      </div>
    </div>
  );
}

export default SpeedPage;
