import React, { Component } from 'react'

export default class Databinding extends Component {
// thuộc tính của lớp dối tượng => sự dụng được ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyễn văn tèo'
    }

    // Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng

    renderHocVien = () => {
        return <div class="card text-white bg-primary">
            <img class="card-img-top" src={this.hocVien.avatar} alt=""/>
                <div class="card-body">
                    <h4 class="card-title">{this.hocVien.tenHocVien}</h4>
                    <p class="card-text">Mã số: {this.hocVien.ma}</p>
                </div>
        </div>
    }








    render() {
        // binding data là biến
        let title = 'CYBERSOFT';
        let imgSrc= 'https://picsum.photos/200/200';
        // binding data là hàm

        const renderImg = () => {
            // giá trị hàm muốn render ra giao diên phải trả về chuỗi , số, hoặc jsx
            return <div className="card text-white bg-primary">
                        <img className="card-img-top" src={imgSrc} />
                        <div class="card-body">
                            <h4 className="card-title">
                                {title}
                            </h4>
                            
                        </div>
                    </div>
                    
        }

        return (
            <div className="container">
                <div id="title">{title}</div>
                <div className="w-25 ">
                    <img src={imgSrc} />
                </div>
                <input className="w-25 form-control"
                    value={title} />
                <div>
                    {renderImg()}
                </div>

                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh: <img src={this.hocVien.avatar} width="200" height="200" /></li>
                </ul>

                <div>
                    {this.renderHocVien()}
                </div>
                databinding 
            </div>
        )
    }
}
