import React, { useState } from "react";
import "../assests/mainform.css";

function MainForm() {
  const [Name, setName] = useState("");

  return (
    <div class="parent-container">
      <div class="add-program-section">
        <h2>Add Program</h2>
        <p>Required to save as Program.</p>
      </div>

      <div class="confirm-program-section">
        <h3>Confirm Program</h3>
        <div class="row1">
          <div class="form-group">
            <label for="price">Price</label>
            <select id="price" name="price">
              <option value="240000">INR 240,000</option>
            </select>
            <span>You are licensed to sell on this price.</span>
          </div>
          <div class="form-group">
            <label for="domain">Domain</label>
            <select id="domain" name="domain">
              <option value="data">Data</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              <input
                type="checkbox"
                id="placement-assurance"
                name="placementAssurance"
              />
              <text type="PlacementAssuranceText" />
              Placement Assurance
            </label>
          </div>
        </div>
      </div>

      <div class="form-container">
        <h1>Information</h1>
        <form id="programForm">
          <div class="row2">
            <div class="form-section">
              <label for="programName">Name</label>
              <input
                type="text"
                id="programName"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={Name}
                name="programName"
              />
            </div>

            <div class="form-section">
              <label>Program Type</label>
              <label>
                <input type="radio" name="programType" value="FT" />
                FT
              </label>
              <label>
                <input type="radio" name="programType" value="PT" />
                PT
              </label>
            </div>

            <div class="form-section">
              <label>Registration Open</label>
              <label>
                <input type="radio" name="registrationOpen" value="yes" /> Yes
              </label>
              <label>
                <input type="radio" name="registrationOpen" value="no" /> No
              </label>
            </div>
          </div>

          <div class="row3">
            <div class="form-section">
              <label for="universityName">University Name / Partner</label>
              <select id="universityName" name="universityName">
                <option value="UFC">UFC</option>
              </select>
            </div>

            <div class="form-section">
              <label for="certOrDiploma">Certificate or Diploma</label>
              <select id="certOrDiploma" name="certOrDiploma">
                <option value="certificate">Certificate</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>

            <div class="form-section">
              <label for="facultyProfile">Faculty Profile</label>
              <input type="text" id="facultyProfile" name="facultyProfile" />
            </div>
          </div>

          <div class="row4">
            <div class="form-section">
              <label for="duration">Learning Hours / Duration</label>
              <input type="text" id="duration" name="duration" />
            </div>

            <div class="form-section">
              <label for="eligibility">Eligibility Criteria</label>
              <input type="text" id="eligibility" name="eligibility" />
            </div>

            <div class="form-section">
              <label for="imageUrl">Image URL</label>
              <input type="text" id="imageUrl" name="imageUrl" />
            </div>
          </div>

          <div className="description-text">
            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>
        </form>
      </div>
      <div className="buttonsContainer">
        <button type="button" class="btn btn-sm btn-outline-dark filterButton">
          Delete
        </button>
        <div>
          <button type="button" class="btn btn-sm btn-outline-dark endButtons">
            Save Draft
          </button>
          <button type="button" class="btn btn-sm btn-outline-dark endButtons">
            Save Program
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
