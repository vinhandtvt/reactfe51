import React, { Component } from "react";
import FormComponent from "./FormComponent";

export default class DanhSachNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <FormComponent />
        <table className="table">
          <thead>
            <tr>
              <th>Mã người dùng</th>
              <th>Tên người dùng</th>
              <th> số điện thoại</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}
