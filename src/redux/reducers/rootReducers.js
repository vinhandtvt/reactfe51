//File khai báo tất cả các state củ ứng dụng

import { combineReducers } from "redux";
import BaiTapGioHangReducer from "./BaiTapGioHangReducer";

// state tổng của ứng dụng

export const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nhiệp vụ
  StateBaiTapGioHang: BaiTapGioHangReducer,
});
