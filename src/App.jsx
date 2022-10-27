import './App.css'
import { Homepage } from './components/Homepage/Homepage'
import { SegundaSec }  from './components/segunda_Secao/SegundaSec'
import { Terceira_secao } from './components/terceira_Secao/Terceira_secao'
import { Quarta_Secao } from './components/quarta_Secao/Quarta_Secao'
import { Quinta_Secao } from './components/quinta_Secao/Quinta_Secao'
import { Footer } from './components/footer/Footer'
function App() {
 

  return (
    <div className="App">
      <Homepage />
      <SegundaSec />
      <Terceira_secao />
      <Quarta_Secao />
      <Quinta_Secao />
      <Footer />
    </div>
  )
}

export default App
