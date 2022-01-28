import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import style from './ValidationField.module.css'
import React from 'react'

const ValidationField = ({
  handleChange,
  validation,
  inputErrorText,
  value,
  label,
  name,
  nullValue,
}) => {
  const [isIncorrectName, setInCorrectName] = useState(false)
  const [helper, setHelper] = useState(false)
  const [inputError, setinputError] = useState(false)

  useEffect(() => {
    const inputHandler = () => {
      if (value.match(validation)) {
        setInCorrectName(false)
      } else {
        setInCorrectName(true)
      }
    }
    if (value) {
      inputHandler()
    }
  }, [value, validation])

  const focusHandler = (e) => {
    setHelper(true)
    setinputError(false)
  }

  const blurHandler = (e) => {
    setHelper(false)
    return isIncorrectName
      ? (nullValue(), setInCorrectName(false), setinputError(true))
      : null
  }

  return (
    <div className={style.input}>
      <TextField
        onBlur={(e) => blurHandler(e)}
        onFocus={(e) => focusHandler(e)}
        required
        label={label}
        onChange={handleChange}
        value={value}
        type="text"
        name={name}
        id={name}
        autoComplete="off"
        helperText={Boolean(helper || inputError) ? inputErrorText : null}
        error={Boolean(inputError)}
        style={{ width: 400 }}
      />
    </div>
  )
}

export default ValidationField
