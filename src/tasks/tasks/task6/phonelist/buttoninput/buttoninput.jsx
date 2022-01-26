const ButtonInput = ({ onclick, value, name, tel }) => {
  return (
    <button onClick={onclick} disabled={name === '' || tel === ''}>
      {value}
    </button>
  )
}

export default ButtonInput
