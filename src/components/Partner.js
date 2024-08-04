import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Partner() {
    return (
        <div style={{ textAlign: 'center', width: '100%', overflowX: 'hidden' }}>
            <h1 style={{ color: '#373A40' }}>Promoted By</h1><br />
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <img src="Images/IIITDM.png" alt="IITDM" className="img-fluid" />
                </div>
                <div className="col-md-4 mb-4">
                    <img src="Images/madeit.png" alt="madeit" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Partner;
