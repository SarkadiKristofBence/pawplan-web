import React, { useState } from 'react'
import MealPlan from './MealPlan'

const PetForm = () => {
  const [form, setForm] = useState({
    name: '',
    age: 1,
    species: 'dog',
    weight: 10,
    activity_level: 'medium',
    health_issues: []
  })
  const [mealPlan, setMealPlan] = useState(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch('https://pawplan-api.onrender.com/plan-meal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await response.json()
    setMealPlan(data)
  }

  return (
    <div className="max-w-md mx-auto">
      {<form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
  <input
    name="name"
    placeholder="Pet Name"
    onChange={handleChange}
    required
    className="w-full p-2 border border-gray-300 rounded"
  />
  <input
    name="age"
    type="number"
    step="0.1"
    placeholder="Age (years)"
    onChange={handleChange}
    required
    className="w-full p-2 border border-gray-300 rounded"
  />
  <select
    name="species"
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded"
  >
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
  </select>
  <input
    name="weight"
    type="number"
    step="0.1"
    placeholder="Weight (kg)"
    onChange={handleChange}
    required
    className="w-full p-2 border border-gray-300 rounded"
  />
  <select
    name="activity_level"
    onChange={handleChange}
    className="w-full p-2 border border-gray-300 rounded"
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
  >
    Get Meal Plan
  </button>
</form>}

      {mealPlan && <MealPlan plan={mealPlan} />}
    </div>
  )
}

export default PetForm

