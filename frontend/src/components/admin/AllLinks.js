import React from "react";

export default function AllLinks() {
  return (
    <div className="row justify-content-center">
      <div>
        <div className="flex-container">
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-primary rounded"
              style={{ height: "100px", color: "white", backgroundColor: "#007bff" }}
            >
              {/* <i className="fas fa-user-alt" style={{ fontSize: "48px" }}></i> */}
              <a
                href="/admin"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>User</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-success rounded"
              style={{ height: "100px", color: "white", backgroundColor: "#28a745" }}
            >
              {/* <i className="fa fa-medkit" style={{ fontSize: "48px" }}></i> */}
              <a
                href="/admin/medlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Event List</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-warning rounded"
              style={{ height: "100px", color: "white", backgroundColor: "#ffc107" }}
            >
              {/* <i className="fa fa-medkit" style={{ fontSize: "48px" }}></i> */}
              <a
                href="/admin/addmed"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Add Events</h6>
              </a>
            </div>
          </div>
          <div className="w-100 m-3">
            <div
              className="m-3 shadow-lg p-3 mb-3 bg-danger rounded"
              style={{ height: "100px", color: "white", backgroundColor: "#dc3545" }}
            >
              {/* <i className="fa fa-dolly" style={{ fontSize: "48px" }}></i> */}
              <a
                href="/admin/orderlist"
                style={{ color: "white", textDecoration: "none" }}
              >
                <h6>Register List</h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
