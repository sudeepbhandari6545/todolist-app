import React from 'react'
//
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import './style.css'

const TodoList = () => {
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
            <input type="text" placeholder="Enter the List" />
            <AddIcon className="plus" />
            <div className="input_item">
              <p>
                Apple
                <EditIcon className="edit" />
                <DeleteIcon className="delet" />
              </p>
            </div>
          </div>
          <button className="my_button">Add list</button>
        </div>
      </div>
    </>
  )
}

export default TodoList
