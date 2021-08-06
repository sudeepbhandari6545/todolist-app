import React, { useEffect, useState } from 'react'
//
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import './style.css'

const getLocalData = () => {}
const TodoList = () => {
  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState(getLocalData())

  const addItem = () => {
    if (!inputData) {
      alert('input the item')
    } else {
      const myNewData = {
        id: new Date().getTime().toString(),
        name: inputData,
      }
      setItems([...items, myNewData])
      setInputData('')
    }
  }
  const deletItem = (index) => {
    const updateItem = items.filter((curElement) => {
      return curElement.id !== index
    })
    setItems(updateItem)
  }
  const removeAll = () => {
    setItems([])
  }
  useEffect(() => {
    localStorage.setItem('mytodolist', JSON.stringify(items))
  }, [items])

  return (
    <>
      <div className="main_div">
        <h1>TodoList</h1>
        <div className="my_list">
          <figure>
            <img
              className="list_img"
              src="https://clickup.com/blog/wp-content/uploads/2020/01/note-taking.png"
              alt="logo"
            />
          </figure>
          <p>Add your list here</p>
          <div className="list_input">
            <input
              type="text"
              placeholder="Enter the List"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <AddIcon className="plus" onClick={addItem} />
            {/* map method */}
            {items.map((curElement, index) => {
              return (
                <div className="input_item" key={curElement.id}>
                  <p>
                    {curElement.name}
                    <EditIcon className="edit" />
                    <DeleteIcon
                      className="delet"
                      onClick={() => deletItem(curElement.id)}
                    />
                  </p>
                </div>
              )
            })}
          </div>
          <button
            className="my_button"
            data-sm-link-text="Remove All"
            onClick={removeAll}
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  )
}

export default TodoList
