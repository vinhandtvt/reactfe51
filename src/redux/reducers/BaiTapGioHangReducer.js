// Giá trị ban đầu của state

import BaiTapGioHangRedux from "../../BaiTapRedux/BaiTapGioHangRedux";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "Iphone",
      hinhAnh: "https://picsum.photos/500",
      soLuong: 1,
      donGia: 1000,
    },
  ],
};

// hàm reducer trả về state của ứng dụng
const BaiTapGioHangReducer = (state = stateDefault, action) => {
  return { ...state };
};

export default BaiTapGioHangReducer;
