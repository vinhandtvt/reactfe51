//File khai báo tất cả các state củ ứng dụng

import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";
import baiTapGameXucXacReducer from "./BaiTapGameXucXacReducer";

// state tổng của ứng dụng

export const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nhiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,

  stateBaiTapGameXucXac: baiTapGameXucXacReducer,
});
