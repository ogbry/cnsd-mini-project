import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Calendar from './components/Calendar'
import Communication from './components/Communication'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('dashboard')

  return (
    <div className="App">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="main-content">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'calendar' && <Calendar />}
        {currentView === 'communication' && <Communication />}
      </main>
    </div>
  )
}

export default App
