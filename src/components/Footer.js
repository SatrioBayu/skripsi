import styles from "../assets/css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles["bottom"]} ${styles["bg"]} d-flex justify-content-center py-4 ${styles["shadow"]}`}>
      <p className={`${styles["no-margin"]} text-center`}>&#169; RT 04 RW 12 Kelurahan Tulusrejo. All Right Reserved</p>
    </footer>
  );
};

export default Footer;
