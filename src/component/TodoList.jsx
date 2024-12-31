import React from 'react';

const TodoList = (props) => {


    return (
        <div>
            <div>
                <p className='border my-3 rounded p-2 flex justify-between items-center capitalize' key={props.index}>
                    {props.item}

                    <button onClick={props.deleteitem}>
                        <i className="fa-solid fa-trash-can hover:bg-red-900 hover:text-lg"></i>
                    </button>

                </p>
            </div>

        </div>
    );
}

export default TodoList;
