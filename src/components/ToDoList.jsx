import React, { useState } from "react";
import Button from "./Button.jsx";
import deleteIcon from "../assets/delete.png";
import checkIcon from "../assets/check.png";
import downIcon from "../assets/down.png";
import upIcon from "../assets/up.png";

export default function ToDoList() {

  const [tasks, setTasks] = useState(["Eat", "Sleep", "Code","Repeat"]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

    if (newTask === "") return;

    setTasks([...tasks, newTask]);
    setNewTask("");

  }

  function completeTask(index) {
    const taskToComplete = tasks[index];
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, taskToComplete]);
  }

  function deleteTask(index) {

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

  }

  function moveTaskUp(index) {

    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  function moveTaskDown(index) {

    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }

  return (
    <section className="hidden sm:flex flex-col md:flex-row justify-between items-start gap-6 
    mt-4 sm:mt-6 lg:mt-10 px-4 sm:px-6 lg:px-8">

      <div className="flex-1 w-full md:w-1/2 p-6 sm:p-8 shadow-custom hover:shadow-xl transition-shadow duration-300 
      rounded-2xl flex flex-col h-[500px] sm:h-[600px]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">To Do List</h2>

        <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            className="text-sm sm:text-base lg:text-lg p-3 rounded-md border border-gray-300 w-full sm:w-3/4 lg:w-4/5"
            type="text"
            placeholder="Añade una tarea"
            value={newTask}
            onChange={handleInputChange}
          />
          <button
            className="text-sm sm:text-base lg:text-lg font-bold py-2 px-3 rounded-md bg-customViolet-700 transition-transform duration-300 hover:bg-customViolet-600 hover:scale-105 w-full sm:w-auto"
            onClick={addTask}
          >
            Añadir
          </button>
        </div>

        <ol className="flex-1 overflow-y-auto px-2 space-y-3 w-full">
          {tasks.map((task, index) => (
            <li
              className="text-sm sm:text-base lg:text-lg font-medium p-4 h-[100px]
               bg-customViolet-600 rounded-lg 
               flex flex-col lg:flex-row items-center"
              key={index}
            >
              <span className="break-words whitespace-normal flex-1 overflow-hidden text-ellipsis 
              pr-2 mb-4 lg:mb-0">
                {task}
              </span>
              <div className="flex gap-2">
                <Button
                  onClick={() => completeTask(index)}
                  iconSrc={checkIcon}
                  iconAlt="Marcar como completada"
                  bgColor="bg-customViolet-700"
                  borderColor="border-slate-500"
                />
                <Button
                  onClick={() => deleteTask(index)}
                  iconSrc={deleteIcon}
                  iconAlt="Borrar tarea"
                  bgColor="bg-customViolet-700"
                  borderColor="border-slate-500"
                />
                <Button
                  onClick={() => moveTaskUp(index)}
                  iconSrc={upIcon}
                  iconAlt="Mover hacia arriba"
                  bgColor="bg-customViolet-700"
                  borderColor="border-slate-500"
                />
                <Button
                  onClick={() => moveTaskDown(index)}
                  iconSrc={downIcon}
                  iconAlt="Mover hacia abajo"
                  bgColor="bg-customViolet-700"
                  borderColor="border-slate-500"
                />
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="flex-1 w-full md:w-1/2  p-6 sm:p-8 shadow-custom hover:shadow-xl transition-shadow duration-300 
      rounded-2xl flex flex-col h-[500px] sm:h-[600px]">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">Done</h2>

        <ol className="flex-1 overflow-y-auto px-2 space-y-3 w-full">
          {completedTasks.map((task, index) => (
            <li
              className="text-sm sm:text-base lg:text-lg font-medium p-4 h-[100px]
              bg-[#c5dce4]/80 rounded-lg 
              flex items-center"
              key={index}
            >
              <img src={checkIcon} alt="Completada" className="w-10 h-10 mr-4"/>
              <span className="flex-1 break-words whitespace-normal overflow-hidden text-ellipsis pr-2
              line-through text-gray-500">
                {task}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );

}