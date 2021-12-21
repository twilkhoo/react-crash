import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5',
            reminder: true,
        },
    
        {
            id: 2,
            text: 'Soccer Practice',
            day: 'March 5',
            reminder: false,
        },
        {
            id: 3,
            text: 'Shopping',
            day: 'March 5',
            reminder: false,
        }
    ]);


    return (
        <div className="container">
            <Header/>
            <Tasks tasks={tasks}/>
        </div>
    );
}

export default App;
