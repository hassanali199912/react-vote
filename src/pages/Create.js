import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  const today = new Date().toISOString().split("T")[0];
  const someDate = new Date();
  someDate.setDate(someDate.getDate() + 5);
  const endDate = someDate.toISOString().split("T")[0];

  // form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [optionInput, setOptionInput] = useState("");
  const [options, setOptions] = useState([]);
  const [endDateVale, setEndDateValue] = useState(today);

  const handleDeleteoption = (selectedOption) => {
    const newOptions = options.filter((option) => {
      return option !== selectedOption;
    });

    setOptions(newOptions);
  };

  const handleSubmit = () => {
    const data = {
      title,
      description,
      options,
      endDate: endDateVale,
    };

    console.log(data);
  };

  return (
    <>
      <section className="create-section">
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
                  <label className="form-label">Vote Options</label>
                  <p>
                    You can not edit your vote option. Please double check 📌.
                  </p>
                  <div className="vote-options">
                    {options && options.length !== 0 && (
                      <>
                        {options.map((option, index) => (
                          <div className="single-option " key={index}>
                            <label className="form-check-label">{option}</label>
                            <Link onClick={() => handleDeleteoption(option)}>
                              <i className="fa-solid fa-trash-can"></i>
                            </Link>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <input
                    type="text"
                    className="form-control my-3"
                    placeholder="Press enter to add new option"
                    value={optionInput}
                    onChange={(e) => setOptionInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        setOptions([...options, optionInput]);
                        setOptionInput("");
                      }
                    }}
                  />
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
              <div className="row mb-5 ">
                <div className="form-group">
                  {title !== "" &&
                  options.length !== 0 &&
                  options.length !== 1 &&
                  endDateVale !== "" ? (
                    <>
                      <button
                        onClick={handleSubmit}
                        className="btn btn-primary"
                      >
                        Create
                      </button>
                    </>
                  ) : (
                    <>
                      <button disabled className="btn btn-primary">
                        Create
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
