import React, { Component } from "react";

export default class SanPhamGHRedux extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Iphone</td>
        <td>
          <img src="https://picsum.photos/500" />
        </td>
        <td>1</td>
        <td>1000</td>
        <td>1000</td>
        <td>
          <button className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}
