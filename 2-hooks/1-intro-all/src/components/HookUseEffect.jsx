import React, {useEffect} from 'react'

const HookUseEffect = () => {
  useEffect(() => {
    console.log('Hello World');
  })

  return (
    <>
      <h3>Hello World</h3>
    </>
  )
}

export default HookUseEffect