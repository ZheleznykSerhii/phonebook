import React from 'react'
import Preloader from '../../../../common/preloader'
import ButtonInput from './buttoninput'
import style from './phonelist.module.css'

const PhoneList = ({
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
}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>Phonebook</div>
      <div className={style.card}>
        <form onSubmit={submitHandler}>
          <label>
            <div>Name</div>
            <input
              onChange={handleChange}
              value={name}
              className={style.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id="name"
              autoComplete="off"
            />
          </label>

          {isCorrectName ? (
            <div className={style.notCorrect}>The name is not corrrect</div>
          ) : (
            <div className={style.Correct}></div>
          )}

          <label>
            <div>Number</div>
            <input
              onChange={handleChange}
              value={tel}
              className={style.input}
              type="text"
              autoComplete="off"
              name="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          {isCorrectNumber ? (
            <div className={style.notCorrect}>The number is not corrrect</div>
          ) : (
            <div className={style.Correct}></div>
          )}
        </form>
        <br />
        <ButtonInput
          value="Add contact"
          onclick={onclick}
          name={name}
          tel={tel}
        />
      </div>
      <div className={style.header}>Contacts</div>

      <label>
        <div>Find contacts by Name</div>
        <input
          onChange={handleChange}
          value={filter}
          className={style.input}
          type="text"
          name="filter"
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          id="name"
        />
      </label>
      <div className={style.blank}></div>
      <ul>
        {contacts.map((data) => (
          <li key={data.name} className={style.list}>
            <span className={style.name}>{data.name}</span>{' '}
            <span className={style.tel}>{data.tel} </span>
            <button
              type="input"
              onClick={() => removeContact(data.id)}
              className={style.button}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {Loaded ? <Preloader /> : null}
    </div>
  )
}

export default PhoneList
