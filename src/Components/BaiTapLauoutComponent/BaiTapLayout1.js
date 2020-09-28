import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import LaptopLists from './LaptopLists'
import ListProducts from './ListProducts'
import Slider from './Slider'


export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div className="bg-dark">
                <Header/>
                <Slider/>
                <ListProducts/>
                <LaptopLists/>
                <Footer/>

            </div>
        )
    }
}
