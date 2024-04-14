import { useNavigate } from "react-router-dom";

export default function VoteCard({
  color,
  icon,
  urlImg,
  author_name,
  title,
  time,
}) {
  const navegator = useNavigate();
  const handleClick = () => {
    navegator(`/vote`);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" onClick={handleClick}>
        <div className={`vote-card ${color}`}>
          <div className="card-overlap"></div>
          <div className="card custom-card">
            <span className="card-icon">{icon}</span>
            <div className="card-user-info">
              <img
                src={urlImg}
                alt="user-avatar"
                className="card-user-info-avatar"
              />
              <h6>{author_name}</h6>
            </div>
            <h1>{title}</h1>
            <p>{time}</p>
          </div>
        </div>
      </div>
    </>
  );
}
