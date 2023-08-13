import bgImageDesktop from "./assets/images/bg-sidebar-desktop.svg";
import bgImageMobile from "./assets/images/bg-sidebar-mobile.svg";
import { PersonalInfo, SelectPlan, Stepper } from "./components";
const App = () => {
  const steps = ["Your Info", "Select Plan", "Add-Ons", "Summary"];

  return (
    <div className="app">
      <div className="card">
        <div className="card__1">
          <img
            src={bgImageDesktop}
            alt="bgImageDesktop"
            className="bg-image-stepper-desktop"
          />
          <img
            src={bgImageMobile}
            alt="bgImageMobile"
            className="bg-image-stepper-mobile"
          />
          <div className="stepper__container">
            {steps.map((step, i) => (
              <Stepper key={i} step={step} i={i} />
            ))}
          </div>
        </div>

        <div className="card__2">
          <SelectPlan />
        </div>
      </div>
    </div>
  );
};

export default App;
