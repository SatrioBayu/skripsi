import styles from "../assets/css/Profile.module.css";

const Biodata = (props) => {
  return (
    <div class="row mb-3 g-2 align-items-center">
      <div class="col-sm-3">
        <h6 className={`${styles["no-margin"]}`}>{props.label}</h6>
      </div>
      <div class="col-sm-9">
        <input className="form-control" aria-label="biodata" type="text" disabled value={props.value} />
      </div>
    </div>
  );
};

export default Biodata;
