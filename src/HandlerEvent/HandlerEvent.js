import React, { Component } from 'react'

export default class HandlerEvent extends Component {

    showTitle = () => alert('Hello CyberSoft')

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    render() {
        return (

            <div>
                {/* // xử lý sự kiện truyền callback  */}
                <button onClick={this.showTitle}>Hello</button>

                {/* Xử lý sử kiện sử dụng hàm trung gian  */}
                <button onClick={() => {
                    this.showTitle();
                }}>Show Title </button>

                <button onClick={this.showMess.bind(this, 'Nhân')}>Show Message</button>
                <button onClick={() => {
                    this.showMess('Nhân')
                }}>Show Mess</button>
            </div>
        )
    }
}
