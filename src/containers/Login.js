import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { LoginContainer, ContentWrapper, LoginHeadIcon, LoginForm, Username, Password, CenterWrapper } from '../components/Session/LoginForm';
import { BlueButton } from '../components/Shared/StyledButtons';

class Login extends Component {

  handleLogIn = (event) => {
    event.preventDefault();
    console.log(event);
    this.props.session.invalidLogIn()
  };

  render() {
    const session = this.props.session;

    return (
      <LoginContainer>
        <ContentWrapper>
          <LoginHeadIcon authstatus={session.loginStatus} />
          <LoginForm>
            <Username />
            <Password />
            <CenterWrapper>
              <BlueButton onClick={this.handleLogIn.bind(this)}>SIGN IN</BlueButton>
            </CenterWrapper>
          </LoginForm>
        </ContentWrapper>
      </LoginContainer>
    )
  }
}

export default observer(Login);