import React from 'react';

export default function Todo ({ todo }) {
    const { id, title, completed } = todo;
    const h1 = <h1>todo - {title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1;

    return (
        <div data-testid={`todo-${id}`}>{ text }</div>
    )
}