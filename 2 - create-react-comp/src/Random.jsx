import React from 'react'

const Random = () => {
  return (
    <div>Random Number : {Math.trunc(Math.random()*10)}</div>
  )
}

export default Random