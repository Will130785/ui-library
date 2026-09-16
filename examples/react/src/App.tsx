import { Button } from '@will130785/react'
import { TextInput } from '@will130785/react'
import { TextArea } from '@will130785/react'

function App() {
  return (
    <div className="p-6">
      <div className="my-4">
        <h1 className="text-2xl font-bold">UI Library</h1>
      </div>
      <div className="my-4">
        <div className="my-4">
          <h4>Buttons</h4>
        </div>
        <div className="flex gap-4">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </div>
      <div className="my-4">
        <div className="my-4">
          <h4>Inputs</h4>
        </div>
        <div className="my-4">
          <TextInput placeholder="Text Input" />
        </div>
        <div className="my-4">
          <TextArea placeholder="Text Area" />
        </div>
      </div>
    </div>
  )
}

export default App
