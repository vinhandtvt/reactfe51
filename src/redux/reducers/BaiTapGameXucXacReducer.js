// state của bài tập game xúc xắc

import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

const stateDefault = {
  banChon: "Tài",
  mangXucXac: [
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/1.png" },
    { so: 1, hinhAnh: "./img/BaiTapGameXucXac/5.png" },
  ],
  soBanThang: 5,
  tongSoBanChoi: 0,
};

const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.taiXiu;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      // tạo ra 3 con xúc xắc ngấu nhiên gán lại cho mangXucXac
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // mỗi lần lặp tạo ra 1 số ngâu nhiên
        const soNgauNhien = Math.floor(Math.random() * 6) + 1;

        // từ số ngẫu nhiên tạo ra xúc xác ngẫu nhiên
        const xucXacNgauNhien = {
          so: soNgauNhien,
          hinhAnh: `./img/BaiTapGameXucXac/${soNgauNhien}.png`,
        };
        // push vào mangXucXacNgauNhien
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      return { ...state };
    }
    case "END_GAME": {
      console.log(action);
      // Tính tổng điểm các số trong mảng xúc xắc
      let tongDiem = state.mangXucXac.reduce((tongDiemXX, xucXac, index) => {
        return (tongDiemXX += xucXac.so);
      }, 0);

      if (
        (tongDiem > 9 && state.banChon === "Tài") ||
        (tongDiem <= 9 && state.banChon === "Xỉu")
      ) {
        state.soBanThang += 1;
      }

      state.tongSoBanChoi += 1;
      return { ...state };
    }
  }
  return { ...state };
};

export default BaiTapGameXucXacReducer;
