import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>Function Props</h3>
      <p>Tên : {props.hoVaTen}</p>
      <p>Lớp : {props.lopHoc} </p>
    </div>
  );
}
