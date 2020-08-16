import React from "react";
import Mentolo from "../mentolop/Mentolo";
import "./mainmento.css";

const Mainmento = () => {
  return (
    <div className="vi-mainmento">
      <div className="vi-contento">
        <p>
          <span>
            <b12>Friendly and Approachable</b12>
          </span>
          <span>
            <h3>MENTORS</h3>
          </span>
          <span>
            <p>
              We have the experertised mentors who can easily understand your
              level of approach and state of mind for giving you the best
              coaching outcome in enhancing a bright future in your talent of
              interest.
            </p>
          </span>
        </p>
      </div>
      <div className="vi-boxo">
        <Mentolo />
      </div>
    </div>
  );
};

export default Mainmento;
