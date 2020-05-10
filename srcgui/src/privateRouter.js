import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, 
    ...rest }) => (
    <Route {...rest}
        render={props => {
            if (!auth.authenticate) {
                return <Redirect to="/login" />;
            } else {
                return <Component {...props} />;
            }
        }}
    />
);

const mapStateToProps = (state) => {
   return {
       auth: state.reducer
   }  
};

export default connect(mapStateToProps) (PrivateRoute); 