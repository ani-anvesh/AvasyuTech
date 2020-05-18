import React from "react";
import base from "../config/FbConfig";
import QuesPor from "./utils/QuesPor";

export default function Home() {
  return (
    <div>
      <h1>anvesh</h1>
      <QuesPor />
      <button onClick={() => base.auth().signOut()}>Sign Out</button>
    </div>
  );
}
