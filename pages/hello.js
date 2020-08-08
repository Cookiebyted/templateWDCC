import Layout from '../components/layout'

// React Components can be very very terse
const name = 'Matthew'
export default () =>
  <Layout>
    <article>
      <div style={{
        marginTop: 30
      }}>
        <h1>COMPSCI335 - WK01L03</h1>
      </div>
      <div style={{
        background: "black",
        height: 200,
        width: 400,
        marginTop: 5
      }} />
      <div class="flex mb-4">
        <div class="flex-1 h-12"><h2>About</h2></div>
        <div class="flex-1 h-12"><h2>Piazza</h2></div>
        <div class="flex-1 h-12"><h2>Lectures</h2></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
        <div class="flex-1 h-12"></div>
      </div>
    </article>
  </Layout>
