import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")


  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-10 py-2 rounded 3xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Red"}} onClick={ () => setColor('Red') }> Red </button>
             <button className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Green"}} onClick={ () => setColor('Green') }> Green </button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
             style={{backgroundColor: "Blue"}} onClick={ () => setColor('Blue') }> Blue </button>
             <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
             style={{backgroundColor: "white"}} onClick={ () => setColor('white')}> White </button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-white"
             style={{backgroundColor: "black"}} onClick={ () => setColor('black') }> Black </button>
             <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg text-black font-bold"
             style={{backgroundColor: "yellow"}} onClick={ () => setColor('Yellow')}> Yellow </button>
        </div>
      </div>
    </div>
  )
}

export default App
