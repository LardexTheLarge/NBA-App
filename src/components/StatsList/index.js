import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function StatsList({ posts, loading }) {
  if (loading) {
    return <h3>...Loading</h3>;
  }
  return (
    <div className="row">
      {posts.map((stats) => (
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h3 className="mb-0">$12.34</h3>
                    <p className="text-success ms-2 mb-0 font-weight-medium">
                      +3.5%
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success ">
                    <span className="mdi mdi-arrow-top-right icon-item"></span>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">
                Potential growth
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsList;
