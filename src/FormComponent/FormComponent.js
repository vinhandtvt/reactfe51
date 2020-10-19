import React, { Component } from "react";
import sweetalert from "sweetalert2";

export default class FormComponent extends Component {
  state = {
    values: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maNguoiDung: "",
      tenNguoiDung: "",
      soDienThoai: "",
      email: "",
    },
  };

  handleChangeInput = (event) => {
    //lấy ra name và value
    // let name = event.target.name;
    // let value = event.target.value;
    let { name, value } = event.target;

    // Lấy ra attribute types (các thuộc tính trên thẻ tự thêm gọi là attribute)
    let types = event.target.getAttribute("types");
    console.log(types);

    // xử lý value
    let newValues = { ...this.state.values }; // tạo ra values mới= vlaue cũ
    newValues[name] = value;

    // xử lý eerror
    let newErrors = { ...this.state.errors };

    newErrors[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    // Validation các trường đặc biệt
    if (types === "phoneNumber") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErrors[name] = "Dữ liệu phải là số!";
      }
    }
    if (types === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value.trim())) {
        newErrors[name] = "Email không hợp lệ!";
      }
    }

    this.setState(
      {
        values: newValues, // Gán values = value mới
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
    // this.setState(
    //   {
    //     //   maNguoiDung: value,
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };

  render() {
    return (
      <form
        className="card"
        onSubmit={(event) => {
          // Cản sự kiện submit lại trang của browser
          event.preventDefault();
          let valid = true;

          //Duyệt thuộc tính trong object vlues  (duyệt thuộc tính trong đối tượng thì dùng ES6 for in)
          for (let tenThuocTinh in this.state.values) {
            if (this.state.values[tenThuocTinh].trim() === "") {
              valid = false;
            }
          }

          // Duyệt lỗi ==> tất cả lỗi phải = rỗng
          for (let tenThuocTinh in this.state.errors) {
            if (this.state.errors[tenThuocTinh].trim() !== "") {
              valid = false;
            }
          }

          if (!valid) {
            // alert("Dữ liệu không hợp lệ!");
            sweetalert.fire("Thông báo", "Dữ liệu không hợp lệ !", "error");
            return; // Chặn sự kiện submit
          }
          sweetalert.fire("Thông báo", "Thêm người dùng thành công", "success");

          console.log("submit");
        }}
      >
        <div className="card-header bg-dark text-light font-weight-bold">
          <span>THONG TIN NGUOI DUNG</span>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <span>Mã người dùng</span>
                <input
                  value={this.state.values.maNguoiDung}
                  className="form-control"
                  name="maNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.maNguoiDung}</p>
              </div>
              <div className="form-group">
                <span>Tên người dùng</span>
                <input
                  value={this.state.values.tenNguoiDung}
                  className="form-control"
                  name="tenNguoiDung"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.tenNguoiDung}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <span>Số điện thoại</span>
                <input
                  types="phoneNumber" // thuộc tính tự chế khác type
                  value={this.state.values.soDienThoai}
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group">
                <span>Email</span>
                <input
                  types="email" // thuộc tính tự chế
                  value={this.state.values.email}
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="col-12 text-right">
              <button className="btn btn-success">Thêm người dùng</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
