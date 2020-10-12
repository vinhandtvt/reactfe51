import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return <SanPhamGHRedux />;
  };
  render() {
    console.log(this.props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Mã sp </th>
            <th>Tên sp </th>
            <th>Hình Ảnh </th>
            <th>Số lượng </th>
            <th>Đơn giá </th>
            <th>Thành tiền </th>
          </tr>
        </thead>
        <tbody>{this.renderGioHang()}</tbody>
      </table>
    );
  }
}
// Lấy state từ redux store biến thành props củ component
// Tham số states: đại diện cho rootReducer
const mapStateToProps = (state) => {
  return {
    gioHang: state.StateBaiTapGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(GioHangRedux); // kết nối giưa gioHangReduxComponent và redux store
