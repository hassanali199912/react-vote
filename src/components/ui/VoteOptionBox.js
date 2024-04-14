export default function VoteOptionBox({ title, width, value, active }) {
  return (
    <>
      <div className={`vote-option-box ${active && "active"}`}>
        <h3>{title}</h3>
        <div className="vote-option-progress">
          <div className={`vote-option-progress-bar ${width}`}></div>
          <span>
            <span className="vote-option-progress-number">{value}</span>
          </span>
        </div>
      </div>
    </>
  );
}
