import React from "react";
import "./Articles.css";
import Card1 from "../../images/card-01.jpg";
import Card2 from "../../images/card-02.jpg";
import Card3 from "../../images/card-03.jpg";

function Articles() {
  return (
    <div className="article-main">
      <h2 className="article-title">latest articles</h2>
      <div className="line"></div>
      <div className="grid-container">
        {/* Card 01 */}
        <div className="card">
          <img src={Card1} alt="Card" />

          <div className="line-sm"></div>
          <h4 className="card-title">10 Best Home Made Remedies for Face</h4>
        </div>

        {/* Card 02 */}
        <div className="card">
          <img src={Card2} alt="Card" />

          <div className="line-sm"></div>
          <h4 className="card-title">10 Best Oils for Hair Protection</h4>
        </div>

        {/* Card 03 */}
        <div className="card">
          <img src={Card3} alt="Card" />

          <div className="line-sm"></div>
          <h4 className="card-title">10 Best Home Made Remedies for Hair</h4>
        </div>
      </div>
    </div>
  );
}

export default Articles;
