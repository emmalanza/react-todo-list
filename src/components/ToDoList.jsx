import React, {useState} from "react";
import Button from "./Button.jsx";
import deleteIcon from "../assets/delete.png";
import downIcon from "../assets/down.png";
import upIcon from "../assets/up.png";

export default function ToDoList() {
    const [tasks, setTasks] = useState(["Eat", "Sleep", "Repeat"]);
    const [newTask, setNewTask] = useState('');
  
    function handleInputChange(event){
      setNewTask(event.target.value);
    }
  
    function addTask(){
    
      if(newTask === "") return;

      setTasks([...tasks, newTask]);
      setNewTask("");

    }
    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index){

        if(index>0){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
          setTasks(updatedTasks);
        }
  
    }
  
    function moveTaskDown(index){

        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
          }
      
    }

    return (
        <div className="text-center mt-12 sm:mt-24 px-4 sm:px-0">
      
          <h1 className="text-3xl sm:text-5xl mb-6">To Do List</h1>
      
          <div className="mb-4 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-3xl mx-auto">
            <input
              className="text-lg sm:text-2xl p-3 rounded-md border-2 border-white/50 w-full sm:w-80"
              type="text"
              placeholder="Añade una tarea"
              value={newTask}
              onChange={handleInputChange}
            />
            <button
              className="text-lg sm:text-2xl font-bold py-3 px-5 rounded-md cursor-pointer bg-customViolet-700/85
              transform transition-all duration-300 hover:bg-customViolet-600 hover:scale-105 w-full sm:w-auto"
              onClick={addTask}
            >
              Añadir
            </button>
          </div>
      
          <ol className="p-0 max-w-lg mx-auto">
            {tasks.map((task, index) => (
              <li
                className="text-xl sm:text-2xl font-bold p-4 mb-4 bg-customViolet-600 rounded-lg 
                flex flex-col sm:flex-row items-center justify-between"
                key={index}
              >
      
                <div className="flex-1 min-w-0 mr-4 mb-3 sm:mb-0">
                  <span className="break-words whitespace-normal block max-h-[4.5rem] overflow-hidden text-ellipsis">
                    {task}
                  </span>
                </div>
      
                <div className="flex flex-shrink-0 space-x-3 sm:space-x-4 mt-3 sm:mt-0">
                  <Button
                    onClick={() => deleteTask(index)}
                    iconSrc={deleteIcon}
                    iconAlt="Borrar tarea"
                    bgColor="bg-customViolet-700/75"
                    borderColor="border-slate-500"
                  />
                  <Button
                    onClick={() => moveTaskUp(index)}
                    iconSrc={upIcon}
                    iconAlt="Mover hacia arriba"
                    bgColor="bg-customViolet-700/75"
                    borderColor="border-slate-500"
                  />
                  <Button
                    onClick={() => moveTaskDown(index)}
                    iconSrc={downIcon}
                    iconAlt="Mover hacia abajo"
                    bgColor="bg-customViolet-700/75"
                    borderColor="border-slate-500"
                  />
                </div>
      
              </li>
            ))}
          </ol>
      
        </div>
  );  
}

