import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [login, setLogin] = useState(false);
  const [profileMenue, setProfileMenue] = useState(false);

  const handleClick = () => {
    setLogin(!login);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <Link to={"/"}>
            DailyVote <span className="rocket">🚀</span>{" "}
          </Link>
        </div>
        {login ? (
          <>
            <div
              className="profile-button "
              onClick={() => setProfileMenue(!profileMenue)}
            >
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
                alt="prodile"
              />
              <ul className={`sub-menu ${profileMenue ? "show" : ""}`}>
                <li>
                  <Link to={"/profile"}>
                    Profile
                    <i className="fa fa-gear" />
                  </Link>
                </li>
                <li>
                  <Link to={"/create"}>
                    create
                    <i className="fa fa-plus" />
                  </Link>
                </li>
                <li>
                  <Link onClick={handleClick} to={""}>
                    {" "}
                    Logout
                    <i className="fa fa-sign-out" />
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="login-button">
              <button className="login-btn" onClick={handleClick}>
                <i className="fa-brands fa-github" />
                Login
              </button>
            </div>
          </>
        )}
      </header>
    </>
  );
}
