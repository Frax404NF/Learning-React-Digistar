import './App.css'
import Component from './Component.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import Card from './component/Card.jsx'

function App() {
  return (
    <ThemeProvider>
    <Component />

    <Card
        title="Hacker Front End 9"
        description="Day 3 Hard Skill - Belajar React Context"
        image="../public/vbg-fe.png"
      />

    </ThemeProvider>
  )
}

export default App
