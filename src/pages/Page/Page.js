import React from 'react';
import styled from 'styled-components';

import { MemberProvider } from '../../contexts/MemberContext';
import { OrganizationProvider } from '../../contexts/OrganizationContext';
import ClearLogo from '../../svg/clearLogo/ClearLogo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;

  > * {
    padding: 20px 3vw;
  }
`;

const Header = styled.header`
  svg {
    height: 50px;
  }
`;

const Main = styled.main`
`;

const Footer = styled.footer`
`;

const Page = ({ children }) => (
  <Wrapper>
    <Header>
      <ClearLogo />
      <h1 className='sr-only'>Clear</h1>
    </Header>

    <Main>
      <OrganizationProvider>
        <MemberProvider>
          {children}
        </MemberProvider>
      </OrganizationProvider>
    </Main>

    <Footer>
      <p>
        <small>&copy; 2021 - Holly Springsteen</small>
      </p>
    </Footer>
  </Wrapper>
);

export default Page;