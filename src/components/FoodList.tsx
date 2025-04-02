import React, { useEffect, useState } from 'react'

const FoodList = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const fetchFoods = async () => {
      const res = await fetch('https://pawplan-api.onrender.com/foods')
      const data = await res.json()
      setFoods(data)
    }
    fetchFoods()
  }, [])

  return (
    <div style={{ marginTop: '3rem' }}>
      <h2>Available Foods</h2>
      <ul>
        {foods.map((food: any, i) => (
          <li key={i}>
            <strong>{food.name}</strong> – {food.calories} kcal, {food.protein}g protein, {food.fat}g fat, {food.carbs}g carbs
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FoodList
