import styles from "./fast.module.css";
export default function Fast() {
  return (
    <div className={styles["black"]}>
      <h2 className={styles["header"]}>
        Whether you’re a startup or an established business, here’s why Dukaan
        is your best choice
      </h2>
      <div className={styles["container1"]}>
        <div className={styles["image"]}>
          <img
            src="https://mydukaan.io/_next/static/images/launch-fast-6349265d2de0cf16e61e160f85bd681d.svg"
            alt=""
          />
        </div>
        <div className={styles["container"]}>
          <h2>Launch Fast</h2>
          <p>Fully responsive e-commerce website & mobile app.</p>
          <p>Loads 6X faster than existing solutions.</p>
          <p>Upload/import products and inventory in bulk.</p>
          <p>Integrate payment gateways.</p>
          <p>Easily customizable themes.</p>
        </div>
      </div>
      <div className={styles["content1"]}>
        <div className={styles["ayush"]}>
          <h2>Scale Faster</h2>
          <p>
            Guaranteed 99.5% uptime for your store - We keep you open for
            business.
          </p>
          <p>60+ third party plugins.</p>
          <p>Marketing tools and discounts to drive repeat orders.</p>
          <p>Add staff accounts, assign different roles.</p>
          <p>Unlimited transactions, 0% transaction fees.</p>
        </div>
        <div className={styles["content"]}>
          <img
            src="https://mydukaan.io/_next/static/images/scale-faster-615089c61891323e0c2e2f0a4d498d53.svg"
            alt=""
          />
        </div>
      </div>
      <div className={styles["manage"]}>
        <div className={styles["image"]}>
          <img
            src="https://mydukaan.io/_next/static/images/manage-better-5f03835fb0602b9fa6a4b3fc98bc9c7c.svg"
            alt=""
          />
        </div>
        <div className={styles["better"]}>
          <h2>Launch Fast</h2>
          <p>Fully responsive e-commerce website & mobile app.</p>
          <p>Loads 6X faster than existing solutions.</p>
          <p>Upload/import products and inventory in bulk.</p>
          <p>Integrate payment gateways.</p>
          <p>Easily customizable themes.</p>
        </div>
      </div>
    </div>
  );
}
