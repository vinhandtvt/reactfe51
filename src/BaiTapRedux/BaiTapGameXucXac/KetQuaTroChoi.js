import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  renderKetQua = () => {
    let tongDiem = this.props.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
      return (tongDiemXX += xucXac.so);
    }, 0);

    let ketQua = tongDiem > 9 ? "Tài" : "Xỉu";

    return (
      <div>
        <span className="display-4 text-dark">
          {tongDiem} - {ketQua}
        </span>
      </div>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="display-4">{this.renderKetQua()}</div>
        <div className="display-4">
          Bạn Chọn : <span className="text-danger">{this.props.banChon}</span>
        </div>
        <div className="display-4">
          Số bạn thắng :{" "}
          <span className="text-warning">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          Tổng số bàn chơi :{" "}
          <span className="text-primary">{this.props.tongSoBanChoi}</span>
        </div>
        <div className="text-center">
          <button
            className="btn btn-success p-2 mt-2"
            onClick={() => {
              this.props.playGame();
            }}
          >
            <span style={{ fontSize: 20 }}>PLAY GAME</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let n = 0;
      let randomXucXac = setInterval(() => {
        const action = {
          type: "RANDOM_XUC_XAC",
        };
        dispatch(action);
        n++;
        if (n === 10) {
          // dừng hàm setInterval
          clearInterval(randomXucXac);

          // dispatch action xử lý kết quả
          const actionXLKQ = {
            type: "END_GAME",
          };
          dispatch(actionXLKQ);
        }
      }, 200);
    },
  };
};

// lấy state từ redux về biến thành props của componet
const mapStateToProps = (state) => {
  return {
    banChon: state.stateBaiTapGameXucXac.banChon,
    soBanThang: state.stateBaiTapGameXucXac.soBanThang,
    tongSoBanChoi: state.stateBaiTapGameXucXac.tongSoBanChoi,
    mangXucXac: state.stateBaiTapGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQuaTroChoi);
