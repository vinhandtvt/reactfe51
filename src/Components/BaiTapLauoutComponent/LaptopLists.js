import React, { Component } from 'react'
import Laptop1 from './Laptop1'
import Laptop2 from './Laptop2'
import Laptop3 from './Laptop3'
import Laptop4 from './Laptop4'

export default class LaptopLists extends Component {
    render() {
        return (
            <div>
            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <Laptop1/>
                    <Laptop2/>
                    <Laptop3/>
                    <Laptop4/>
                </div>
                </section>
            </div>

        )
    }
}
