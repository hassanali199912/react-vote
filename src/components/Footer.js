import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <ul className="soical">
            <li>
              <Link to={"/"}>
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to={"/"}>
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link to={"/"}>
                <i className="fa-brands fa-github"></i>
              </Link>
            </li>
          </ul>
          <p>
            &copy; 2023 All Rights Reserved | This template is made with 💕{" "}
          </p>
        </div>
      </footer>
    </>
  );
}
