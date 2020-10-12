// Giá trị ban đầu của state

import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux";

const stateDefault = {
  gioHang: [],
};

// hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  switch (action.type) {
    // xử lý cập nhật lại state
    case "THEM_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];
      // tìm sp có trong giỏ hàng hay không
      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.spGH.maSP
      );
      if (index !== -1) {
        gioHangUpdate[index].soLuong += 1;
      } else {
        gioHangUpdate.push(action.spGH);
      }

      // Gán lại state cũ = giá trị mới
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "XOA_GIO_HANG": {
      let gioHangUpdate = [...state.gioHang];

      const index = gioHangUpdate.findIndex(
        (spGH) => spGH.maSP === action.masPClick
      );

      if (index !== 1) {
        gioHangUpdate.splice(index, 1);
      }

      // cập nhật lại state.gioHang
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
    case "TANG_GIAM_SOLUONG": {
      console.log(action);
      let gioHangUpdate = [...state.gioHang];

      let spGioHang = gioHangUpdate.find((sp) => sp.maSP === action.maSP);
      console.log("day", spGioHang);
      if (spGioHang) {
        console.log("ini");
        if (action.tangGiam) {
          spGioHang.soLuong += 1;
        } else {
          if (spGioHang.soLuong > 1) {
            spGioHang.soLuong -= 1;
          }
        }
      }
      state.gioHang = gioHangUpdate;
      return { ...state };
    }
  }

  return { ...state };
};

export default BaiTapGioHangReducer;
