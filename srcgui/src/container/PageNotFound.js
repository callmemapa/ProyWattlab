import React from 'react'; 

function PageNotFound() {

    return (
        <div className="container" style={{ justifyContent: "center"}}>
            <div className="jumbotron" style={{ backgroundColor: "#0f1323", color: "white", marginTop: "10px", textAlign: "center" }}>
                <div className="container">
                    <h1 className="display-7" style={{ color: "white" }}>Lo sentimos, esta ruta no existe</h1>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;