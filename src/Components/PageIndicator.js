import React from 'react'
import { FaAngleRight } from "react-icons/fa";
function PageIndicator({page}) {
  return (
    <div className="shopHeader">
        <div className="shopHeaderText">
          <span className="title-1-shop">{page}</span>
          <p
            style={{
              display: "flex",
              fontWeight: "500",
              margin: "0",
              gap: "0.5rem",
            }}
            className="title-2-shop"
          >
            Home{" "}
            <span style={{ display: "flex" }}>
              <FaAngleRight style={{ fontSize: "1.25rem" }} />
            </span>
            <span style={{ fontWeight: "300" }}> {page}</span>
          </p>
        </div>
      </div>
  )
}

export default PageIndicator