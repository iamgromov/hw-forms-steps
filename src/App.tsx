import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Training from './components/Training';
import { TrainingInterface } from './interface/TrainingInterface';

export default function App() {
  const [trainingList, setTreningList] = useState<TrainingInterface[]>([]); 

  const addTraining = (training: TrainingInterface): void => {!trainingList.some(({ date }) => date === training.date) ? setTreningList(prev => [...prev, training]) : changeTraining(training)}

  const changeTraining = (training: TrainingInterface): void => {
    setTreningList(prev => prev.map(item => item.date === training.date ? {...item, distance: item.distance + training.distance} : item))
  }

  const removeTraining = (date: string): void => {
    setTreningList(trainingList.filter(item => item.date !== date))
  }

  const sortedList = (): TrainingInterface[] => {
    return [...trainingList].sort((a, b) => +a.date - +b.date)
  }
  
  return (
    <div className='app'>
      <Form 
        addTraining={addTraining}
      />
      <div className="list">
        <div className="list-title">
          <span className="list-title-row">Дата (ДД.ММ.ГГ)</span>
          <span className="list-title-row">Пройдено км</span>
          <span className="list-title-row">Действия</span>
        </div>
        <div className="list-content">
          {
            sortedList().map(training => 
              <Training
                key={training.date}
                training={training}
                removeTraining={removeTraining}
              />
            )
          }
        </div>
        
      </div>
    </div>
  )
}