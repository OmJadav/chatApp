import React from "react";

export default function GenderCheckBox() {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="radio-2"
            className="radio radio-primary"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="radio" name="radio-2" className="radio radio-primary" />
        </label>
      </div>
    </div>
  );
}
