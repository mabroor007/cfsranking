import styles from "../styles/Footer.module.css";

export interface Props {}
export const Footer: React.FC<Props> = () => {
  return (
    <div>
      <div className={styles.endshape}>
        <img src="/endshape.svg" />
      </div>

      <footer className={styles.footer}>
        <div className={styles.backdrop}></div>
        <div className={"wrapper " + styles.foot}>
          <h1>Need Help?</h1>
          <p>
            We would be more then happy to help you if you find any difficulty
            you can contact us and we will reach you as soon as possilbe
          </p>
          <button>Contact Us</button>
        </div>
      </footer>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={"wrapper"}>
          <div className={styles.info}>
            <div>
              <img src="/logo.jpg" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
              <button className="btn btn-p">Signup for News letter</button>
            </div>
            <div className={styles.social}>
              <img src="/facebook.svg" />
              <img src="/instagram.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
