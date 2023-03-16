
import { useEffect, useState } from 'react'
import { apiGet } from './api/axios'
import Config from './components/Config'
import { selectedDays } from './components/Day'
import Days from './components/Days'
import Save from './components/Save'

function App(props: any) {
  selectedDays.push(...(props.data.days.map((d: any)=>{
    return d.id
  })))
  return (
    <div>
      <Config check={props.data.isActive} send={props.data.send}/>
      <Days days={props.data.days}/>
      <Save />
    </div>
  )
}

export default App


