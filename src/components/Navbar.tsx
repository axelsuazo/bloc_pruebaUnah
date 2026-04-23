
import ToggleDarkMode from "./ToggleDarkMode"

function Navbar() {
  return <>
  
  

<nav className="bg-blue-900 text-white py-6 px-8 flex items-center justify-between">
  <img width="110" height="200" src="https://curc.unah.edu.hn/assets/assets/common/logo.png"></img>
    

    
    <div className="flex items-center">
        <a className="font-bold text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Inicio</a>
        <a className="font-bold text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Servicios</a>
        <a className="font-bold text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Contactos</a>
      <ToggleDarkMode />
    
    </div>
   
    
    
</nav>
  


  </>
}  

export default Navbar
    