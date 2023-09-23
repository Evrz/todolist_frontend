import Home from './components/home';
import DefaultLayout from './components/layouts/DefaultLayout';

function App() {
  const user = 'Robin'

  return (
    <div className="App">
      <Home user={user} />
    </div>
  )
}

export default App;
