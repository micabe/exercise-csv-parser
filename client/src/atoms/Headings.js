import media from 'utils/media';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SiteTitle = styled.h1`
  margin-top: 40px;
  font-size: 64px;
  font-weight: 300;
  line-height: 1.2;
`;

const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  text-align: center;
`;

const SiteHeader = styled.nav`
  z-index: 30;
  width: 100%;
  color: #fff;
  top: 0;
  position: fixed;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const SubHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 500;
  color: #000;
  margin-bottom: 20px;
  letter-spacing: 3px;
  text-align: center;
  font-size: 15px;
`;

const SiteNav = styled.nav`
  > ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DropDown = styled.nav`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  font-weight: 700;
  ${media.desktop`
    font-size: 2.25rem;
  `}
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
  &:hover {
    color: #2d3748;
  }
`;

const NavIconLink = styled(Link)`
  text-decoration: none;
  color: #000;
  padding: 0.5rem;
  font-weight: bold;
  display: block;
  &:hover {
    color: #2d3748;
  }
`;

const Main = styled.main`
  margin: 40px auto;
  margin-bottom: 0;
`;

const MainWrapper = styled.div`
  a {
    color: ${props => props.color};
  }
`;

const Logo = styled.div`
  ${media.phone`margin-left: 20px;`};
  ${media.tablet`margin-left: 0;`};
`;

const Name = styled.h1`
  margin: 0;
  top: 0;
  position: absolute;
  display: none;
  z-index: 5;
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color: #ffb6c1;
  transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  ${media.tablet`display: block;`};
`;

const NavLinkSecond = styled(Link)`
  text-decoration: none;
  font-weight: 900;
  letter-spacing: 1px;
  padding-left: 10px;
  display: block;
  padding-top: 0;
  padding-bottom: 20px;
  transition: all 0.3s ease;
  font-size: 16px;
  &:hover {
    color: grey;
  }
`;

export {
  NavLinkSecond,
  SiteTitle,
  Title,
  SiteHeader,
  SubHeader,
  NavLink,
  DropDown,
  SiteNav,
  MainWrapper,
  Main,
  Logo,
  LogoLink,
  NavIconLink,
  Name,
};
