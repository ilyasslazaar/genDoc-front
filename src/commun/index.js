export function handleAdd(fieldName) {
    let currentState = this.state;
    let values = [...currentState[fieldName]];
    values.push({ value: currentState[fieldName].length });
    currentState[fieldName] = values;
    this.setState(currentState)
}
export function handleRemove(i, fieldName) {
    let currentState = this.state;
    let values = [...currentState[fieldName]];
    if (i !== 0)
        values.splice(i, 1);
    currentState[fieldName] = values;
    this.setState(currentState)
}
