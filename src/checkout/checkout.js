import Support from "../apply/support";
import Show from "../cleck/show";
import styles from "./checkout.module.css";
function Checkout() {
  return (
    <div className={styles["out"]}>
      <Show />
      <Support />
    </div>
  );
}
export default Checkout;
