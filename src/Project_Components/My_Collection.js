import React from 'react'
import { Collection } from './Collection';
import { Footer } from './Footer';

const My_Collection = () => {
    return (
        <>
            <div className='container-fluid bg-dark' style={{ height: "auto", marginTop: "55px" }}>
                <Collection />
                <div style={{ paddingBottom: "45px" }}>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default My_Collection;