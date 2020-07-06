import React from "react";
import colors from "../../../styles/colors";
import LinkedButton from "../../../components/LinkedButton";
import styles from "./styles.module.css";

export default () => {
  const [checked, setChecked] = React.useState(true);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className={styles.checkboxSelection}>
        <input
          className={styles.checkbox}
          checked={checked}
          onChange={() => {}}
          type="checkbox"
          id="termsOfUse"
          style={{ marginRight: "10px" }}
        />
        <span
          className={styles.checkmark}
          onClick={() => setChecked((checked) => !checked)}
        ></span>
      </div>
      <label
        htmlFor="termsOfUse"
        style={{ color: colors.fading, fontSize: "1em" }}
      >
        I agree to the terms statements in{" "}
        <LinkedButton style={{ display: "inline" }} to="/TermsOfServices">
          Terms of services
        </LinkedButton>
      </label>
    </div>
  );
};
