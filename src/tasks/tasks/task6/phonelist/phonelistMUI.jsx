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

const PhoneListMUI = ({
  contacts,
  onclick,
  name,
  tel,
  filter,
  handleChange,
  submitHandler,
  removeContact,
  Loaded,
  isCorrectName,
  isCorrectNumber,
  addedContact,
}) => {
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
        <TextField
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
        />
        <br />

        <TextField
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
        />
      </Box>
      <br />
      <Button
        mt={10}
        variant="outlined"
        color="inherit"
        disabled={Boolean(name === '' || tel === '')}
        onClick={onclick}
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
      {Loaded && <Preloader />}
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
        />
        {addedContact && <CustomizedSnackbars />}
      </Box>
    </Box>
  )
}

export default PhoneListMUI
