import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <div className="input-group mb-3">
        <form id="form-up">
        <div class="input-group mb-3">
           <input type="text" class="form-control input" placeholder="Search a city" aria-label="Search a city" aria-describedby="button-addon2"/>
           <button class="btn btn-outline-secondary button-Up" type="button" id="button-addon2">Search</button>
        </div>
          
        </form>
      </div>
    </div>
  );
}
