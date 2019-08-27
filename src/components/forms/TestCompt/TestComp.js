import React from 'react'

export default function TestComp(props) {
    return (
        <div onSubmit={props.handleClick}>
            <label> test input</label>
            <input type="text" name="tst" />
            <button type="submit">SSS</button>
        </div>
    )
}
