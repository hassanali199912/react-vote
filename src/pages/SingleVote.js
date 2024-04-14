import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import CommentBox from "../components/ui/CommentBox";
import VoteOptionBox from "../components/ui/VoteOptionBox";

export default function SingleVote() {
  return (
    <>
      <section className="single-vote-section">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title">Single Vote</h2>
            <p className="section-description">This is a single vote page</p>
            <p className="timer">
              <i className="fa-regular fa-clock"></i>
              <span className="timer-down">
                <span className="timer-number"> 00D </span>:
                <span className="timer-number"> 00H </span>:
                <span className="timer-number"> 00M </span>:
                <span className="timer-number"> 00S </span>
              </span>
            </p>
          </div>
        </div>
        <div className="row my-5">
          <p className="vote-upper-title">
            <span className="green-circule"></span>
            {10} <i className="fa fa-user" />
            <span className="vote-name">people saw this vote</span>
          </p>
          <div className="col-lg-7 col-md-6 col-sm-12 col-xs-12 mt-3">
            <VoteOptionBox
              title={"anguler"}
              width={"cw-50"}
              value={"10"}
              active={true}
            />
            <VoteOptionBox
              title={"react"}
              width={"cw-30"}
              value={"4"}
              active={false}
            />
            <VoteOptionBox
              title={"vue.js"}
              width={"cw-20"}
              value={"1"}
              active={false}
            />
            <VoteOptionBox
              title={"none"}
              width={"cw-0"}
              value={"0"}
              active={false}
            />
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 col-xs-12">
            <h2>Realtime comment 😉</h2>
            <div className="comment-section">
              <div className="comment-form">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your comment"
                    />
                  </div>
                </form>
              </div>
              <div className="user-commnets">
                <CommentBox
                  image={
                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
                  }
                  name={"John Doe"}
                  date={"14 apr 2024"}
                  comment={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  action={false}
                />
                <CommentBox
                  image={
                    "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
                  }
                  name={"John Doe"}
                  date={"14 apr 2024"}
                  comment={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  action={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
