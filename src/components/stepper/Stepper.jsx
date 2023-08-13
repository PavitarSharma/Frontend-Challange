import styles from "./Stepper.module.css";

const Stepper = ({ step, i }) => {
  return (
    <div className={styles.stepper}>
      <div className={styles.stepper__count}>{i + 1}</div>
      <div className={styles.stepper__deatils}>
        <span className={styles.step}>Step {i + 1}</span>
        <span className={styles.stepper__name}>{step}</span>
      </div>
    </div>
  );
};

export default Stepper;
