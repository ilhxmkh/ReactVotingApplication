import React from 'react';
import Container from './Container';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const styles = {
    nav: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItem: {
      marginRight: '8px',
    },
    link: {
      textDecoration: 'none',
      color: 'white',
    },
    button: {
      display: 'inline-block',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      marginLeft: '0px',
      transition: 'background-color 0.2s',
      
    },
    activeButton: {
      backgroundColor: '#80006a',
      color: 'white',
    },
    ul: {
      position: 'fixed',
      top: 0,
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      backgroundColor: 'black',
      width: '100%',
      left: 0,
    },
  };

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Vote', slug: '/vote', active: true },
    { name: 'AdminPage', slug: '/adminPage', active: true },
    { name: 'Result', slug: '/result', active: true },
  ];

  // Filter the navItems to keep only the first four
  const filteredNavItems = navItems.slice(0, 4);

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav style={styles.nav}>
          <div style={styles.listItem}>
            {/* <div className="bg-image"></div> */}
            <Link to="/" style={styles.link}></Link>
          </div>
          <ul className="flex ml-auto" style={styles.nav, styles.ul}>
            {filteredNavItems.map((item) => (
              <li key={item.name} style={styles.listItem}>
                <button
                  onClick={() => navigate(item.slug)}
                  style={{
                    ...styles.button,
                    ...(item.active ? styles.activeButton : {}),
                  }}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
