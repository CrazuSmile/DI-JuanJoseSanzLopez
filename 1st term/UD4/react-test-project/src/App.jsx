import './App.css'
import HelloWorld from './components/HelloWorld'
import FullName from './components/NombreCompleto'
function App() {
  return (
    <>
      <HelloWorld />
      <FullName name="María" surname="López" />
      <FullName name="Juan" surname="Pérez" />
    </>
  )
}
export default App