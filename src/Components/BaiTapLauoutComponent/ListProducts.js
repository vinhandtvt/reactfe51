import React, { Component } from 'react'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'

export default class ListProducts extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <Item1/>
                        <Item2/>
                        <Item3/>
                        <Item4/>
                    </div>
                </section>
            </div>

        )
    }
}
