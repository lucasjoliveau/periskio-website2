import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';
import Scrollspy from 'react-scrollspy';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Icon } from 'react-icons-kit';
import { androidMenu } from 'react-icons-kit/ionicons/androidMenu';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import Link from 'common/src/components/Link';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import Container from 'common/src/components/UI/Container';
import NavbarWrapper, {
  MenuArea,
  MobileMenu,
  NavbarRight,
} from './navbar.style';
import LogoImage from 'common/src/assets/image/agencyDigital/logo.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleHandleMenuClose = () => {
    setMobileMenu(false);
  };

  const data = useStaticQuery(graphql`
    query {
      agencyDigitalJson {
        navItems {
          label
          path
          offset
        }
      }
    }
  `);
  const navItems = data.agencyDigitalJson.navItems;

  const scrollItems = [];

  data.agencyDigitalJson.navItems.forEach(item => {
    scrollItems.push(item.path.slice(1));
  });

  return (
    <NavbarWrapper className="agencyModern-navbar navbar">
      <Container width="1440px">
        <Logo
          href="/agencydigital"
          logoSrc={LogoImage}
          title="Agency Digital"
          className="main-logo"
        />
        {/* end of logo */}

        <MenuArea>
          <ScrollSpyMenu
            className="menu-items menu-left"
            menuItems={navItems}
            offset={-84}
          />
          <NavbarRight>
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Get Started</Link>
            </li>
          </NavbarRight>
          {/* end of main menu */}

          <Button
            className="menubar"
            icon={
              mobileMenu ? (
                <Icon
                  style={{ color: '#02073E' }}
                  className="bar"
                  size={32}
                  icon={androidClose}
                />
              ) : (
                <Fade>
                  <Icon
                    style={{ color: '#02073E' }}
                    className="close"
                    icon={androidMenu}
                    size={32}
                  />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={handleMobileMenu}
          />
        </MenuArea>
      </Container>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
        <Container>
          <Scrollspy
            className="menu"
            items={scrollItems}
            offset={-84}
            currentClassName="active"
          >
            {navItems.map((menu, index) => (
              <li key={`menu_key${index}`}>
                <AnchorLink
                  href={menu.path}
                  offset={menu.offset}
                  onClick={handleHandleMenuClose}
                >
                  {menu.label}
                </AnchorLink>
              </li>
            ))}
            <li>
              <Link href="#">Login</Link>
            </li>
            <li>
              <Link href="#">Get Started</Link>
            </li>
          </Scrollspy>
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
