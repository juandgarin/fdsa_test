import Dashboard from '../src/components/Dashboard.js';
const HomePage = () => {
  return (
    <>
      <div className="d-flex justify-content-center p-4">
        <h1>Destinations</h1>
      </div>
      <div className="container d-flex justify-content-between">
        <div className="col-12">
          <Dashboard />
        </div>
      </div>
      
    </>
  )
}

export default HomePage;