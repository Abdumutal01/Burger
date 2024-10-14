import React, { Component } from 'react';
import Auks from '../hoc/Auks';
import './Layout.css'

function Layout(props) {
    return (
        <Auks>
            <div>
                sideDrow, toolBar, backDrop
            </div>

            <main className='Content'>
                {props.children}
            </main>
        </Auks>
    )
}

export default Layout
