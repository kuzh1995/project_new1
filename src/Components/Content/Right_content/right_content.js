import React from "react";
import "./Right_content.css";
import Clock from "../../../assets/clock-alert.svg";
import Pay from '../../../assets/pay.png';

function Right_content() {
  return (
    <div className="col-md-6">
      <div className="row justify-content-end">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="account">
                <div className="w-50 text-center">
                  <div className="text-icon">
                    <span>1</span>
                  </div>
                  <p className="d-block">Sign Up</p>
                </div>
                <div className="w-50 text-center">
                  <div className="text-icon">
                    <span>2</span>
                  </div>
                  <p className="d-block">Subscribe</p>
                </div>
              </div>
              <h5 className="text-center">Select your subcription plan</h5>
              <ul className="nav flex-column select-subcription">
                <li className="nav-item">
                  <div className="seclect-box select-disable">
                    <div className="left">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          12 Months Subscription
                        </label>
                      </div>
                    </div>
                    <div className="right">
                      <p>
                        Total<span className="price">₹99</span>
                      </p>
                      <p>
                        ₹8<span className="month">/mo</span>
                      </p>
                    </div>
                    <div className="info">
                      <span>Offer expired</span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="seclect-box select-active">
                    <div className="left">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          12 Months Subscription
                        </label>
                      </div>
                    </div>
                    <div className="right">
                      <p>
                        Total<span className="price">₹179</span>
                      </p>
                      <p>
                        ₹15<span className="month">/mo</span>
                      </p>
                    </div>
                    <div className="info">
                      <span>Recommended</span>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="seclect-box">
                    <div className="left">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          6 Months Subscription
                        </label>
                      </div>
                    </div>
                    <div className="right">
                      <p>
                        Total<span className="price">₹149</span>
                      </p>
                      <p>
                        ₹25<span className="month">/mo</span>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="seclect-box">
                    <div className="left">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          3 Months Subscription
                        </label>
                      </div>
                    </div>
                    <div className="right">
                      <p>
                        Total<span className="price">₹99</span>
                      </p>
                      <p>
                        ₹33<span className="month">/mo</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="hr"></div>
              <div className="Subscription-fee d-flex justify-content-between">
                <p className="mb-0">Subscription Fee</p>
                <span>₹18,500</span>
              </div>
              <div className="box-wrap">
                <div className="box d-flex justify-content-between">
                  <div className="left">
                    <b>Limited time offer</b>
                    <div className="d-flex align-items-center">
                      <img src={Clock} alt="" />
                      <p className="mb-0">Offer valid till 25th March 2023 </p>
                    </div>
                  </div>
                  <div className="right">
                    <b>- ₹18,401</b>
                  </div>
                </div>
              </div>
              <div className="total d-flex justify-content-between">
                <p className="mb-0"><span>Total </span>(Incl. of 18% GST)</p>
                <span className="amount">₹149</span>
              </div>
              <div className="group-btn">
                <div className="row">
                  <div className="col-6">
                    <a href="#" className="btn btn-danger">cancel</a>
                  </div>
                  <div className="col-6">
                    <a href="#" className="btn btn-success">proceed to pay</a>
                  </div>
                  
                </div>
                
              </div>
              <div className="pay-img">
                    <img src={Pay} alt="" />
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right_content;
