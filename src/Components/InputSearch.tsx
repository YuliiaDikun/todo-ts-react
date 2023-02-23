import React from 'react'
interface IProps { 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputSearch: React.FC<IProps> = ({onChange }) => {
  return (
      <>
          <p>Enter your search value: </p>
          <input type="text" onChange={onChange}/>
      </>
  )
}

export default InputSearch
