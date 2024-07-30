import React from 'react';

const Card = (props) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '500px', height: '300px', backgroundColor: '#FF5C36' }}>
            <div className="row no-gutters h-100">
                <div className="col-md-6 h-100">
                    <img className="card-img h-100" src={props.imgURL} alt="Card image cap" style={{ objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="card-body">
                        <h3 className="card-title text-dark">{props.title}</h3>
                        <p className="card-text text-light">{props.text}</p>
                        <a href={props.link} className="btn btn-light mt-auto" style={{ textAlign: 'center' }}>Know more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
