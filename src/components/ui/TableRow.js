import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TableRow({
  title,
  active,
  start_date,
  end_date,
  handleDelete,
}) {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>
          {active ? (
            <>
              <span className="badge bg-success">Active</span>
            </>
          ) : (
            <>
              <span className="badge bg-error">Expired</span>
            </>
          )}
        </td>
        <td>{start_date}</td>
        <td>{end_date}</td>
        <td>
          <Dropdown>
            <Dropdown.Toggle>
              <i className="fa-solid fa-ellipsis" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link className="dropdown-link" onClick={handleDelete}>
                  Delete
                  <i className="fa-solid fa-trash-can" />
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link className="dropdown-link" to="/edit">
                  Edit
                  <i className="fa-solid fa-pencil" />
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    </>
  );
}
