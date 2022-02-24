import Dashboard from '../src/Components/Dashboard';
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