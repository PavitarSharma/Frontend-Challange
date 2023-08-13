import styles from "./Header.module.css";

const Header = ({title, subTitle}) => {
  return <div className={styles.header}>
    <p className={styles.title}>{title}</p>
    <p className={styles.subTitle}>{subTitle}</p>
  </div>;
};

export default Header;
