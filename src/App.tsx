import React from 'react'
import PetForm from './components/PetForm'
import FoodList from './components/FoodList'

function App() {
  return (
    <div className="max-w-3xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">🐾 PawPlan</h1>
      <PetForm />
      <FoodList />
    </div>
  )
}

export default App
