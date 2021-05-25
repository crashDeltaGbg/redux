const decrement = (count) => {
    return {
    type: 'DECREMENT',
    payload: count
    }
  }

export default decrement;