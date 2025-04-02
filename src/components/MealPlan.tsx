import React from 'react'

const MealPlan = ({ plan }: any) => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>Meal Plan</h2>
      <ul>
        {plan.meals.map((food: any, index: number) => (
          <li key={index}>
            <strong>{food.name}</strong> – {food.calories} kcal, {food.protein}g protein, {food.fat}g fat, {food.carbs}g carbs
          </li>
        ))}
      </ul>
      <p><strong>Total Calories:</strong> {plan.total_calories} kcal</p>
    </div>
  )
}

export default MealPlan

