import TaksList from './components/TaksList'
import TaskForm from './components/TaskForm'



function App() {

  return (
    <main className=' bg-zinc-950 h-screen'>
      <div className=' container mx-auto p-5'>
      <TaskForm />
      <TaksList />
      </div>
    </main>
  )
}

export default App