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
              <div>
                <IcoLink imgpath={"/loca.svg"} url="Lorem Ipsum" />
                <IcoLink
                  imgpath={"/phone.svg"}
                  url="0234242354123 02342414234"
                />
                <IcoLink imgpath={"/email.svg"} url="example.com" />
              </div>
            </div>
            <div className={styles.news_latter}>
              <h1
                style={{
                  color: "#d23a2f",
                  marginLeft: "1rem",
                  fontSize: "1rem",
                }}
              >
                Our News latter
              </h1>
              <input type="email" placeholder="Email" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <input style={{ marginLeft: "1rem" }} type="checkbox" />
                <div
                  style={{ marginLeft: "1rem", color: "#d23a2f" }}
                  className={styles.terms_}
                >
                  I agree terms & condition
                </div>
              </div>
              <button className={"btn btn-p " + styles.news_btn}>Signup</button>
            </div>
            <div className={styles.usefull_links}>
              <h1>Useful links</h1>
              <a href="#">Lorem ipsum</a>
              <a href="#">Lorem ipsum</a>
              <a href="#">Lorem ipsum</a>
              <a href="#">Lorem ipsum</a>
              <a href="#">Lorem ipsum</a>
            </div>
            <div className={styles.social}>
              <h1
                style={{
                  fontSize: "1rem",
                  color: "#d23a2f",
                }}
              >
                Follow us
              </h1>
              <div>
                <img src="/facebook.svg" />
                <img src="/instagram.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface IcoProps {
  imgpath: string;
  url: string;
}
export const IcoLink: React.FC<IcoProps> = ({ imgpath, url }) => {
  return (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <img
        style={{ maxWidth: "20px", marginRight: "1rem" }}
        src={imgpath}
        alt="links"
      />
      <div style={{ fontSize: ".8rem" }}>{url}</div>
    </div>
  );
};
