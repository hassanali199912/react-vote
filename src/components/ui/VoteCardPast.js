export default function VoteCardPast({
  color,
  icon,
  urlImg,
  author_name,
  title,
}) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
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
            <span className="expired">Expired</span>
          </div>
        </div>
      </div>
    </>
  );
}
