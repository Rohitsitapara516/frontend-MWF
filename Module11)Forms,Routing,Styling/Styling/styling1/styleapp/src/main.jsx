import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
