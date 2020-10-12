import React, { Component } from "react";
import SanPhamGHRedux from "./SanPhamGHRedux";

// import thư viện kết nối react component và redux store
import { connect } from "react-redux";

class GioHangRedux extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={50} height={50} alt="image" />
          </td>
          <td>
            <button
              onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, false)}
            >
              -
            </button>
            {spGioHang.soLuong}
            <button
              onClick={() => this.props.tangGiamSoLuong(spGioHang.maSP, true)}
            >
              +
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.gioHang}</td>
          <td>
            <button
              onClick={() => this.props.xoaGioHang(spGioHang.maSP)}
              className="btn btn-danger"
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
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

// tạo ra 1 props là hàm đưa giá rrij lên reducer = > để set lại state
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      // console.log(maSPClick);
      // Tạo ra action gửi lên reducer
      const action = {
        type: "XOA_GIO_HANG",
        maSPClick,
      };
      // dùng hàm dispatch đưa lên reducer
      dispatch(action);
    },
    tangGiamSoLuong: (maSP, tangGiam) => {
      // Tạo ra action
      console.log(tangGiam);
      const action = {
        type: "TANG_GIAM_SOLUONG",
        maSP,
        tangGiam,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux); // kết nối giưa gioHangReduxComponent và redux store
