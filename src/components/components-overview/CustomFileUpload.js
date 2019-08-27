import React from "react";
let fileName = "Choisissez un fichier...";

const CustomFileUpload = (props) => (
  <div className="custom-file mb-3">
    <input type="file" className="custom-file-input" id="customFile2"
      accept={props.extension} name={props.name} />
    <label className="custom-file-label" htmlFor="customFile2">Choisissez un fichier...</label>
  </div>
);

export default CustomFileUpload;
