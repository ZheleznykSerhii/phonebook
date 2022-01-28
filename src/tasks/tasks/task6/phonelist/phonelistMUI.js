import {
  Box,
  Button,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import Preloader from '../../../../common/preloader'
import style from './phonelist.module.css'
import TextField from '@mui/material/TextField'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import CustomizedSnackbars from './Snackbar'
import ValidationField from '../ValidationField'
import BasicModal from '../../../../common/Basicmodal'

const PhoneListMUI = ({
  contacts,
  onClick,
  name,
  tel,
  filter,
  handleChange,
  submitHandler,
  removeContact,
  loaded,
  isCorrectName,
  isCorrectNumber,
  addedContact,
  nullName,
  nullTel,
  isOpen,
  getCloseModal,
}) => {
  const validationName =
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/
  const validationTel =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?[-.\s]?\d{1,9}/

  return (
    <Box>
      <Typography variant="h3" mb={2}>
        Phonebook
      </Typography>
      <Box
        onSubmit={submitHandler}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <ValidationField
          handleChange={handleChange}
          value={name}
          name="name"
          label="Add contact`s name"
          validation={validationName}
          inputErrorText={
            'The name can only consist of letters, apostrophes, dashes and spaces.'
          }
          nullValue={nullName}
        />
        <ValidationField
          handleChange={handleChange}
          value={tel}
          name="tel"
          label="Contact`s number"
          validation={validationTel}
          inputErrorText={
            'The phone number must consist of at least 4 numbers and can contain spaces, dashes, letters, parentheses and can start with +'
          }
          nullValue={nullTel}
        />
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        disabled={Boolean(
          !name.match(validationName) || !tel.match(validationTel)
        )}
        onClick={onClick}
      >
        Add contact
      </Button>
      <Typography variant="h3" mt={10} mb={3}>
        Contacts
      </Typography>

      <List className={style.wrap} p={0}>
        {contacts.map((data) => (
          <li key={data.name}>
            <ListItemButton p={0}>
              <ListItemText className={style.name}>{data.name} </ListItemText>{' '}
              <ListItemText className={style.tel}>{data.tel} </ListItemText>
              <DeleteIcon
                type="input"
                onClick={() => removeContact(data.id)}
                variant="outlined"
              ></DeleteIcon>
            </ListItemButton>
          </li>
        ))}
      </List>
      {loaded && <Preloader />}
      <Box
        mt={10}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-search"
          label="Search"
          type="text"
          onChange={handleChange}
          value={filter}
          name="filter"
          required
          autoComplete="off"
          InputProps={{
            startAdornment: <SearchIcon position="start"></SearchIcon>,
          }}
          style={{ width: 400 }}
        />
        {addedContact && <CustomizedSnackbars />}
      </Box>
      {isOpen && <BasicModal isOpen={isOpen} getCloseModal={getCloseModal} />}
    </Box>
  )
}

export default PhoneListMUI

{
  /* <TextField
          required
          label="Add contact`s name"
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          error={Boolean(isCorrectName)}
          helperText={Boolean(isCorrectName) ? 'The name is not correct' : null}
        /> */
}
;<br />

{
  /* <TextField
          id="outlined-number"
          label="Contact`s number"
          type="text"
          onChange={handleChange}
          value={tel}
          autoComplete="off"
          name="tel"
          required
          error={Boolean(isCorrectNumber)}
          helperText={
            Boolean(isCorrectNumber) ? 'The number is not correct' : null
          }
        /> */
}
