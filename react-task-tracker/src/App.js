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
    ])

    // Delete task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }



    return (
        <div className="container">
            <Header/>
            {tasks.length > 0 ? 
                <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
            : 'No Tasks to Show'}
        </div>
    );
} 

export default App;
