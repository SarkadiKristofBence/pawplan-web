import React from 'react'
import PetForm from './components/PetForm'
import FoodList from './components/FoodList'

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>PawPlan 🐾</h1>
      <PetForm />
      <FoodList />
    </div>
  )
}

export default App
