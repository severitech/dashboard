import { UserRound } from 'lucide-react'
import { CardSumary } from './components/CardSumary'
import React from 'react'

function page() {
  return (
    <div>
      <h2 className='text-2xl mb-4'>Dashboard</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <CardSumary
        icon={UserRound} 
        total="12.450" 
        average= {15}
        title= "Compañias creadas"
        tooltip = "Este es el total de compañias creadas"
        />
        
      </div>
    </div>
  )
}

export default page
