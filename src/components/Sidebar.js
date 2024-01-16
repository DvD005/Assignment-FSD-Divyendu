import React from "react";
import "../assests/sidebar.css";

function Sidebar() {
  return (
    <div className="parentContainer">
      <div className="sidebarMainContainer">
        <div className="headingContainer">
          <div className="headingTextContainer">
            <h3>Programs</h3>
            <p className="totalParagraph">48 Total</p>
          </div>
          <button className="headingButton">
            <iconify-icon icon="ic:baseline-plus"></iconify-icon>
          </button>
        </div>
        <div className="searchContainer">
          <div class="input-group rounded searchBar">
            <input
              type="search"
              class="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
            </span>
          </div>
          <div className="buttonSearchContainer">
            <button
              type="button"
              class="btn btn-sm btn-outline-dark filterButtons"
            >
              All
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark filterButtons"
            >
              Data
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark filterButtons"
            >
              Finance
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark filterButtons"
            >
              Future Tech
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark filterButtons endButton"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="programsContainer">
        <div className="eachProgramCOntainer">
          <button
            type="button"
            class="btn btn-sm btn-primary profileLogo"
            disabled
          >
            BT
          </button>
          <div className="programDetaiCOntainer">
            <p className="programName">Program 1</p>
            <p className="programDetail">Last Modified : 6/12/2023</p>
          </div>
        </div>
        <div className="eachProgramCOntainer">
          <button
            type="button"
            class="btn btn-sm btn-primary profileLogo"
            disabled
          >
            BT
          </button>
          <div className="programDetaiCOntainer">
            <p className="programName">Program 1</p>
            <p className="programDetail">Last Modified : 6/12/2023</p>
          </div>
        </div>
        <div className="eachProgramCOntainer">
          <button
            type="button"
            class="btn btn-sm btn-primary profileLogo"
            disabled
          >
            BT
          </button>
          <div className="programDetaiCOntainer">
            <p className="programName">Program 1</p>
            <p className="programDetail">Last Modified : 6/12/2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
