import Header from "../header/Header";
import "./style.css";
const PersonalInfo = () => {
  return (
    <div className="container">
      <div className="container-info">
        <Header
          title="Personal info"
          subTitle="Please provide your name, email address, and phone number"
        />

        <form className="form">
          <div className="form__control">
            <div className="form__control_label">
              <label htmlFor="name">Name</label>
              <small>This field is required</small>
            </div>
            <input type="text" />
          </div>

          <div className="form__control">
            <div className="form__control_label">
              <label htmlFor="email">Email Address</label>
              {/* <small>This field is required</small> */}
            </div>
            <input id="email" type="email" />
          </div>

          <div className="form__control">
            <div className="form__control_label">
              <label htmlFor="phone">Phone Number</label>
              {/* <small>This field is required</small> */}
            </div>
            <input id="phone" type="text" />
          </div>
        </form>

        <div className="buttons">
          <button className="btn">Next Step</button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
