import { Link } from "react-router-dom";
import TableRow from "../components/ui/TableRow";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

export default function Profile() {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="profile-section">
        <div className="row">
          <div className="col-12">
            <div className="table-container">
              <table className="profile-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>State</th>
                    <th>Created At</th>
                    <th>End At</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    title={"This is test"}
                    active={true}
                    start_date={"Sat Apr 13 2024"}
                    end_date={"Sat Apr 17 2024"}
                    handleDelete={() => setShow(true)}
                  />
                </tbody>
              </table>
            </div>
            <div className="no-data-container">
              <div className="no-data-text">
                <p>You don't any votes. Click here to create 👇</p>
                <Link to="/create" className="btn btn-primary">
                  Create
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="delete-module"
      >
        <Modal.Body>
          <h5>Are you absolutely sure?</h5>
          <p>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </p>
          <div className="btn-container d-flex justify-content-end gap-3">
            <Button onClick={() => setShow(false)}>Cancel</Button>
            <Button>Continue</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
