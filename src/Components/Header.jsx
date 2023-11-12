import React from 'react';
import Container from './Container';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Header() {

const navigate = useNavigate() 


const styles = {
  nav: {
    display: 'flex',
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
    padding: '8px 16px',
    borderRadius: '20px',
    transition: 'background-color 0.2s',
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display : 'flex',
  },
}
const navItems = [
  {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Vote",
      slug: "/vote",
      active: true,
  },
    
  {
      name: "AdminPage",
      slug: "/adminPage",
      active: true,
  },
 
{
  name: "Result",
  slug: "/result",
  active: true,
},

  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav style={styles.nav}>
          <div style={styles.listItem}>
            <Link to="/" style={styles.link}>
              Home
              </Link>
          </div>
          <ul className='flex ml-auto'style={styles.nav, styles.ul}>
            {navItems.map((item) => 
            item.active && (
              <li key={item.name} style={styles.listItem}>
                <button
                onClick={() => navigate(item.slug)}
                style={{
                  ...styles.button,
                  backgroundColor: item.active ? 'blue' : 'transparent',
                }}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}
                </button>
              </li>
            )
            )}
            {/* {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )} */}
          </ul>
        </nav>
        </Container>
    </header>
  )

}

export default Header;