/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { redirectToUrl, getLastLocationVisited } from 'utils/common';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { FormattedMessage } from 'react-intl';
import CommonMessages from 'helpers/Intl.CommonMessage';
import { API_CONSTANTS } from 'utils/constants';
import {Grid} from '@material-ui/core';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {  } from './actions';
import makeSelectLoginContainer, {

} from './selectors';
import './style.scss';
import Login from 'components/LoginComponents/Login';
import Register from 'components/LoginComponents/Register'
import { APP_ROUTES } from '../../utils/constants';

const LoginContainer = props => {
  const { fullpath, pathname } = getLastLocationVisited(props.location);
  const {redirectFor} = props
  /**
   * Save Last location visited to session storage
   */
  if(fullpath || pathname) {
    sessionStorage.setItem('lastVisited', JSON.stringify({fullpath, pathname}));
  }
  const [response, setResponse] = useState(null);
  const [loginInProgress, setLogInProgress] = useState(null);
  const loadComponent = () => {
    switch (redirectFor) {
      case APP_ROUTES.LOGIN: return (
          <Login
          handleLoginSubmit={data => console.log(data)}
          headerMessage={<FormattedMessage {...messages.Header} />}
          welcomeMessage={<FormattedMessage {...messages.WelcomeMessage} />}
          forgotMessage={<FormattedMessage {...CommonMessages.ForgotPassword} />}
          rememberMeMessage={<FormattedMessage {...CommonMessages.RememberMe} />}
          dontHaveAccountMessage={
            <FormattedMessage {...CommonMessages.DontHaveAccount} />
          }
          response={response}
          responseInProgress={loginInProgress}
        />
      )
       break;
      case APP_ROUTES.REGISTER: return (
          <Register
          headerMessage={<FormattedMessage {...messages.Header} />}
          welcomeMessage={<FormattedMessage {...messages.WelcomeMessage} />}
          forgotMessage={<FormattedMessage {...CommonMessages.ForgotPassword} />}
          rememberMeMessage={<FormattedMessage {...CommonMessages.RememberMe} />}
          dontHaveAccountMessage={
            <FormattedMessage {...CommonMessages.DontHaveAccount} />
          }
          response={response}
          responseInProgress={loginInProgress}
        />
      )
       break;
    
      default:
        break;
    }
  }
  const componentTitle = () => {
    switch (redirectFor) {
      case APP_ROUTES.LOGIN: return 'Login'
       break;
      case APP_ROUTES.REGISTER: return 'Register'
       break;
    
      default:
        break;
    }
  }
  
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center" className="main_login_wrapper">
      <Helmet>
        <title>
          {componentTitle()}
        </title>
        <meta name="description" content="Login page" />
      </Helmet>
      {loadComponent()}
    </Grid>
  );
};

LoginContainer.propTypes = {
  loginContainer: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withConnect,
  withReducer,
  withSaga,
)(LoginContainer);
