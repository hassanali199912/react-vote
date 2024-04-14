import { useState } from "react";
import { Link } from "react-router-dom";

export default function Edit() {
  const today = new Date().toISOString().split("T")[0];
  const someDate = new Date();
  someDate.setDate(someDate.getDate() + 5);
  const endDate = someDate.toISOString().split("T")[0];

  // form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [endDateVale, setEndDateValue] = useState(today);

  const handleSubmit = () => {
    const data = {
      title,
      description,
      endDate: endDateVale,
    };

    console.log(data);
  };

  return (
    <>
      <section className="create-section">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <div className="card heads-up">
              <i className="fa fa-edit"></i>
              <div className="heads-up-content">
                <h5>Edit!</h5>
                <p>
                  Your change may not take effect immediately on page
                  vote/17838bb4-7aea-4736-8312-1052a79a5865 due to speed page
                  revalidation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="form-group">
                  <label className="form-label" htmlFor="title">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="[optional] Enter description"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row my-4">
                <div className="form-group">
                  <label className="form-label" htmlFor="date">
                    End date
                  </label>
                  <input
                    type="date"
                    min={today}
                    max={endDate}
                    id="date"
                    className="form-control"
                    placeholder="Enter title"
                    value={endDateVale}
                    onChange={(e) => setEndDateValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="form-group">
                  {title !== "" && endDateVale !== "" ? (
                    <>
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                      >
                        update
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled className="btn btn-primary">
                        update
                      </button>
                    </>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
