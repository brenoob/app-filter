// import { useState } from 'react'
import { Plus } from "lucide-react"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="py-10 space-y-8">
      <div>
        header
        abas
      </div>
      <div>
        <main className="max-w-6xl mx-auto space-y-5">
          <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">Tags</h1>
          <button className="inline-flex items-center gap-1.5 text-xs bg-teal-300 text-teal-950 font-medium rounded-full px-1.5 py-1">
            <Plus className="size-3" />
            Create new
          </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
