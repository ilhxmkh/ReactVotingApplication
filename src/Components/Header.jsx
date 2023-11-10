import React from 'react';
import Container from './Container';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Header() {

const navigate = useNavigate() 


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
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
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