import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <Actions />
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Side>
          <Actions />
        </Side>
        <Logo />
        <Side>
          <DesktopUser />
        </Side>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const UserWrapper = styled.div`
  margin-top: 16px;
  text-align: center;
  font-size: ${14 / 16}rem;
`;

const SignInLink = styled.a`
  margin-top: 6px;
  display: inline-block;
  text-decoration: underline;
  font-style: italic;
`;

const DesktopUser = () => {
  return (
    <UserWrapper>
      <Button>Subscribe</Button>
      <SignInLink href="/#">Already a subscriber?</SignInLink>
    </UserWrapper>
  );
};

const Actions = (delegated) => {
  return (
    <ActionGroup {...delegated}>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </ActionGroup>
  );
};

const SideWrapper = styled.div`
  flex: 0 1;
`;

const SideContent = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: block;
  }
`;

const Side = ({ children }) => {
  return (
    <SideWrapper>
      <SideContent>{children}</SideContent>
    </SideWrapper>
  );
};

export default Header;
