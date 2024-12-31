import React, { useState } from 'react';

const TodoInput = ({ list }) => {

    const [inputText, setInputText] = useState('');

    const handleEnterPress = (e) => {
        if (e.keyCode === 13) {
            list.addList(inputText)
            setInputText('')
        }
    }

    return (
        <>
            <div className='flex gap-5 justify-between mt-10 border rounded p-5'>
                <input className='border border-black rounded-lg text-black  ' type="text" placeholder="Enter your today's task"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleEnterPress} />

                <button className='border rounded-full bg-blue-600'
                    onClick={() => {
                        list.addList(inputText)
                        setInputText('')
                    }} > + </button>

            </div>
        </>

    );
}

export default TodoInput;
