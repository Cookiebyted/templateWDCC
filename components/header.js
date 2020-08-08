import Link from 'next/link'

const MenuItem = ({ children, href }) =>
  <Link href={href}>
    <li className='block mt-4 inline-block  rounded-md text-center bg-blue-200 hover:bg-blue-500 px-4 py-2 m-2 lg:mt-0 hover:text-white mr-4'>
      <a className='no-underline hover:text-white'>{children}</a>
    </li>
  </Link>

function Header ({ user, loading }) {
  console.log(JSON.stringify(user))
  return (
    <header className='bg-white shadow-md'>
      <nav className='container flex items-center justify-between flex-wrap  py-2 '>
        {/* <div id='Brand' className='text-3xl text-black-700'> */}
        {/* <div style={{width: 50, height: 50, margin: 'auto'}}> */}
        <a style={{width: 100, height: 23, margin: 'auto'}} href='https://canvas.auckland.ac.nz/calendar#view_name=month&view_start=2020-08-05'>
        <img src='Canvaslogo.png'/>
        </a>
        <button><a href='/hello'>main content</a></button>
        {/* </div> */}
         {/* alskfjdlaskjfd
        </div> */}
        {/* <ul className=' flex   '>
          <MenuItem href='/'>
          Hi {user && user.nickname}!
          </MenuItem>
          <img src={user.picture} alt="User Avatar" width="45" height="20" />

          {!loading &&
            (user ? (
              <>
            
              </>
            ) : (
              <MenuItem href='/api/login'>
                Login
              </MenuItem>
            ))}
        </ul> */}
      </nav>

    </header>
  )
}

export default Header
