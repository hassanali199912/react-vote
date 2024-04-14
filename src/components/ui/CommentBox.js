import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CommentBox({ image, name, date, comment, action }) {
  return (
    <>
      <div className="comment-box">
        <img src={image} alt="user-avatar" />
        <div className="comment-content">
          <h3>
            {name} <span> {date}</span>
          </h3>
          <p>{comment}</p>
        </div>
        {action && (
          <>
            <div className="commnet-actions">
              <Dropdown>
                <Dropdown.Toggle>
                  <i className="fa-solid fa-ellipsis" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className="dropdown-link" to="/">
                      Delete
                      <i className="fa-solid fa-trash-can" />
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className="dropdown-link" to="/">
                      Edit
                      <i className="fa-solid fa-pencil" />
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </>
        )}
      </div>
    </>
  );
}
