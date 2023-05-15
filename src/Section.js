import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Section() {
  return (
    <>
      <section className="homeBanner">
        <div className="container">
          <div className="leftPart">
            <img src="../images/adi-kailsah.jpg" alt="image" />
            <div className="locationsName">
              <h1>Adi Kailash Trek</h1>
              <p>06 Nights - 07 Days</p>
            </div>
            <div className="arrows">
              <ArrowBackIcon className="arrowBackward" />
              <ArrowForwardIcon className="arrowForward" />
            </div>
          </div>
          <div className="rightPart">
            <div className="rightTop">
              <h1>
                Let us plan you a perfect{" "}
                <strong className="colorChange">India Holiday</strong>
              </h1>
              <p>
                Personalised, well-crafted tour packages for best experiences
              </p>
            </div>
            <div className="rightBottom">
              <div className="categories">
                <div className="category">
                  <img src="./images/india-holiday-wildlife.jpg" alt="" />
                  <div className="texts">
                    <h4>Wildlife</h4>
                    <p>70+ Packages</p>
                  </div>
                </div>
                <div className="category">
                  <img src="./images/india-holiday-heritage.jpg" alt="" />
                  <div className="texts">
                    <h4>Heritage</h4>
                    <p>25+ Packages</p>
                  </div>
                </div>
                <div className="category">
                  <img src="./images/india-holiday-trekking.jpg" alt="" />
                  <div className="texts">
                    <h4>Trekking</h4>
                    <p>70+ Packages</p>
                  </div>
                </div>
              </div>
              <div className="arrowsBtn">
                <span className="previousArrow">
                  <ArrowBackIcon />
                </span>
                <span className="nextArrow">
                  <ArrowForwardIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;
