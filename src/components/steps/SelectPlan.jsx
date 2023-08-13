import Header from "../header/Header";
import { useState } from "react";
const SelectPlan = () => {
  const [plan, setPlan] = useState(false);
  const monthsPlans = [
    {
      name: "Arcade",
      price: 9,
    },
    {
      name: "Advanced",
      price: 12,
    },
    {
      name: "Pro",
      price: 15,
    },
  ];

  const yearPlans = [
    {
      name: "Arcade",
      price: 90,
      off: "2 months free",
    },
    {
      name: "Advanced",
      price: 120,
      off: "2 months free",
    },
    {
      name: "Pro",
      price: 150,
      off: "2 months free",
    },
  ];

  return (
    <div className="container">
      <div className="container-info">
        <Header
          title="Select your plan"
          subTitle="You have the option of monthly or yearly billing."
        />

        <div className="plan">
          <span>Monthly</span>
          <div className="toggle">
              <div className="toggle-circle"></div>
          </div>
          <span>yearly</span>
        </div>

        <div className="buttons">
          <button className="go-back">Go Back</button>
          <button className="btn">Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
