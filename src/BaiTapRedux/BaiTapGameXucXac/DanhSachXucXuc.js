import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachXucXuc extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return (
        <img
          key={index}
          className="m-5"
          src={xucXac.hinhAnh}
          style={{ width: 70 }}
        />
      );
    });
  };

  render() {
    console.log(this.props.mangXucXac);
    return (
      <div className="row mt-5 text-center">
        <div className="col-3">
          <button
            className="btn btn-success p-5 "
            onClick={() => {
              this.props.datCuoc("Tài");
            }}
          >
            <span className="display-4">Tài</span>
          </button>
        </div>
        <div className="col-6">{this.renderXucXac()}</div>
        <div className="col-3">
          <button
            className="btn btn-danger p-5 "
            onClick={() => {
              this.props.datCuoc("Xỉu");
            }}
          >
            <span className="display-4">Xỉu</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      const action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },
  };
};

// định nghĩa hàm lấy dữ liệu state từ redux store về component
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachXucXuc);
