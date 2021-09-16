/**
 *
 * App
 *
 */

import React, { memo , useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { redirectToUrl } from 'utils/common';
import makeSelectApp,{makeSelectData} from './selectors';
import { getData} from './actions'
import reducer from './reducer';
import saga from './saga';
import { Switch, Route } from 'react-router-dom';
import './style.scss';
import AppRoutes from './routes';
export function App(props) {
  const {fetchData,data} = props
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });
  const [loading, setLoading] = useState(null)
  useEffect(() => {
    // fetchData()
    // setLoading(true)
  }, [])
  return (
    <>
      {/* <ToastContainer /> */}
      <div className='main_app_box'>
        <ToastContainer
              position="top-right"
              hideProgressBar
              autoClose={3000}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
        />
        
        <AppRoutes 
        />
      </div>
    </>
  );
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  app: makeSelectApp(),
  data: makeSelectData(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchData: () => dispatch(getData()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(App);
