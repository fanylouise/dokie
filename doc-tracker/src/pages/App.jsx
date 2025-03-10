import Footer from '../components/Footer'
import Spa from '../pages/Spa'
import '../styles/App.css'

function App() {

  return (
    <>
      <h1 className='title'>Doc Tracker</h1>
      <div className="card">
        <h1>Login</h1>
       <input type="text" aria-label='Usuário' name='user' placeholder='Usuário'/>
       <input type="text" aria-label='Senha' name='password' placeholder='Senha'/>
       <input type="button" value="Logar" />
        
      </div>
      <Footer/>
      <Spa/>
    </>
  )
}

export default App
