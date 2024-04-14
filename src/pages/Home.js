import VoteCard from "../components/ui/VoteCard";
import VoteCardPast from "../components/ui/VoteCardPast";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="row">
          <div className="col-12">
            <h3 className="home-title">Active Votes 📣</h3>
          </div>
        </div>
        <div className="row">
          <VoteCard
            color={"blue"}
            author_name={"Juan1201"}
            icon={"😍"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best back-end services ❤"}
            time={"Until Sat Apr 13 2024"}
          />
          <VoteCard
            color={"green"}
            author_name={"Jone154547"}
            icon={"🐱‍🏍"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best framework for javascript 🤳"}
            time={"Until Sun Apr 14 2024"}
          />
          <VoteCard
            color={"red"}
            author_name={"hassan1457"}
            icon={"🎂"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best Jinro flavor 🤩"}
            time={"Until Mon Apr 17 2024"}
          />
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="home-title red-color">Past Votes 🤖</h3>
          </div>
        </div>
        <div className="row">
          <VoteCardPast
            color={"blue"}
            author_name={"Juan1201"}
            icon={"😍"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best back-end services ❤"}
          />
          <VoteCardPast
            color={"green"}
            author_name={"Jone154547"}
            icon={"🐱‍🏍"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best framework for javascript 🤳"}
          />
          <VoteCardPast
            color={"red"}
            author_name={"hassan1457"}
            icon={"🎂"}
            urlImg={
              "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1712966400&semt=sph"
            }
            title={"Best Jinro flavor 🤩"}
          />
        </div>
      </section>
    </>
  );
}
