import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    const currentProduct = this.props.product;
    this.props.xuLyChiTiet(currentProduct);
  };

  render() {
    console.log(this.props);
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={this.props.product.hinhAnh}
          alt="image"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.product.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleDetail}>
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleCardList(this.props.product);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
