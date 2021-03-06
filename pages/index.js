import fetch from 'node-fetch'
import Layout from '../components/layout'
import { useFetchUser } from '../lib/user'
import config from '../lib/config'
import ProfileCard from '../components/ProfileCard'
import Link from 'next/link'
const LinkA = ({ children, href }) =>
  <Link href={href}>
    <a className='pl-4 block pr-4 underline hover:text-white'>{children}</a>
  </Link>

function Home () {
  // set required to true to force the page to require login.
  const { user, loading } = useFetchUser({ required: false })

  const logEvent = async (type, value) => {
    const event = {
      name: user.nickname,
      type: type,
      value: value
      // date: added server side so we can't lie
    }
    await fetch(`${config.HOST}/api/events`, {
      method: 'post',
      body: JSON.stringify(event)
    })

    // TODO handle error if event cannot be posted.
    // TODO display feedback if event is ok
  }

  const handleClick = (e) => {
    // console.log(e.target)
    logEvent('click', 1)
  }

  <button OnClick="location.href='link.html'" className='btn-blue'>Visit Page Now</button>

  return (
    <Layout user={user} loading={loading}>
      <div>
        <h1>Home Page</h1>
      </div>
      <p><strong><u>Content covered in Semester Two</u></strong></p>
      
      <div>
        <ol>
          <li>COMPSCI 313 Computer Organisation</li>
          <li>COMPSCI 345 Human-computer Interaction</li>
          <li>COMPSCI 350 Mathematical Foundations of Computer Science</li>
          <li><a href="/lecture">COMPSCI 335 Functional Programming and Distributed Servers</a></li>
        </ol>
      </div>
      

      {loading && <p>Loading login info...</p>}
      {!loading && !user && (
        <>
          <p style={{marginTop : "20px"}}>
            To view the dashboard: <button className='btn-blue'><a href='/api/login' style={{color:"white"}}>Login</a></button>
          </p>
        </>
      )}
      {user && (
        <>
          <ProfileCard user={user} style={{marginTop : "20px"}}>
            <button className='btn-blue' onClick={handleClick}>Courses</button>
          </ProfileCard>


        </>)}
    </Layout>
  )
}

export default Home