import React from 'react'
import "./Cards.css";

function Cards() {
    return (
        <div className="row">
            <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go on</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4 mb-3 mb-sm-0">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go on</a>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go on</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
