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
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Pet Name" onChange={handleChange} required />
        <input name="age" type="number" step="0.1" placeholder="Age (years)" onChange={handleChange} required />
        <select name="species" onChange={handleChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
        <input name="weight" type="number" step="0.1" placeholder="Weight (kg)" onChange={handleChange} required />
        <select name="activity_level" onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Get Meal Plan</button>
      </form>
      {mealPlan && <MealPlan plan={mealPlan} />}
    </div>
  )
}

export default PetForm

