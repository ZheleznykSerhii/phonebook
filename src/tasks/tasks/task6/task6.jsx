import React from 'react'
import PhoneList from './phonelist'
import PhoneListMUI from './phonelist/phonelistMUI'

class Task6 extends React.Component {
  constructor() {
    super()
    this.state = {
      contacts: [
        { name: 'Serhii Zheleznyk', tel: '0938539561', id: 1 },
        { name: 'Valentyna Zheleznyk', tel: '0938539562', id: 2 },
      ],
      name: '',
      tel: '',
      filter: '',
      lastID: 2,
      Loaded: false,
      isCorrectName: false,
      isCorrectNumber: false,
      addedContact: false,
      availableName:
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      availableNumber:
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    }
  }

  fetchedChange = () => {
    this.setState(() => ({
      Loaded: true,
    }))
  }

  nameChange = () => {
    this.setState(() => ({
      isCorrectName: true,
    }))
  }
  numberChange = () => {
    this.setState(() => ({
      isCorrectNumber: true,
    }))
  }

  // винесу у окрему змінну
  regularName = () => {
    const { name, tel, availableName, availableNumber, lastID } = this.state

    const newID = lastID + 1

    const contact = { name: name, tel: tel, id: newID }

    if (name.match(availableName) && tel.match(availableNumber)) {
      return (
        this.fetchedChange(),
        setTimeout(
          () =>
            this.setState((prev) => ({
              contacts: [...prev.contacts, contact],
              lastID: newID,
              name: '',
              tel: '',
              Loaded: false,
              addedContact: false,
            })),
          2000
        )
      )
    } else if (name.match(availableName) && !tel.match(availableNumber)) {
      this.numberChange()
      return (
        this.setState(() => ({
          tel: '',
        })),
        setTimeout(
          () =>
            this.setState(() => ({
              isCorrectNumber: false,
            })),
          2000
        )
      )
    } else if (tel.match(availableNumber) && !name.match(availableName)) {
      this.nameChange()
      return (
        this.setState(() => ({
          name: '',
          tel: '',
        })),
        setTimeout(
          () =>
            this.setState(() => ({
              isCorrectName: false,
              isCorrectNumber: false,
            })),
          2000
        )
      )
    } else if (!tel.match(availableNumber) && !name.match(availableName)) {
      this.numberChange()
      this.nameChange()
      return (
        this.setState(() => ({
          name: '',
          tel: '',
        })),
        setTimeout(
          () =>
            this.setState(() => ({
              isCorrectName: false,
              isCorrectNumber: false,
            })),
          2000
        )
      )
    } else {
      return false
    }
  }

  // addOnClick = () => {
  //   if (this.regularName() === true) {
  //     const newID = this.state.lastID + 1
  //     const contact = { name: this.state.name, tel: this.state.tel, id: newID }
  //     this.fetchedChange()
  //     setTimeout(
  //       () =>
  //         this.setState((prev) => ({
  //           contacts: [...prev.contacts, contact],
  //           lastID: newID,
  //           name: '',
  //           tel: '',
  //           Loaded: false,
  //           addedContact: false,
  //         })),
  //       2000
  //     )
  //   } else {
  //     this.setState(() => ({
  //       name: '',
  //       tel: '',
  //     }))
  //     setTimeout(
  //       () =>
  //         this.setState(() => ({
  //           isCorrectName: false,
  //           isCorrectNumber: false,
  //         })),
  //       2000
  //     )
  //   }
  // }

  showAlert = () => {
    alert('This contact is already exist')
    this.setState(() => ({
      name: '',
      tel: '',
    }))
  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  getVisibleContact = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) => contact.name.includes(filter))
  }

  checkContacts = () => {
    const { contacts, name } = this.state
    return contacts.filter((contact) => contact.name.includes(name))
  }

  removeContact = (id) => {
    const confirmDelete = window.confirm(`Do you want to delete the contact?`)
    if (confirmDelete) {
      this.setState((prevState) => {
        return {
          contacts: prevState.contacts.filter((contact) => contact.id !== id),
        }
      })
    }
  }

  componentDidMount() {
    const localStContacts = localStorage.getItem('contacts')

    if (localStContacts) {
      this.setState({
        contacts: JSON.parse(localStContacts),
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.contacts.length)
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    let {
      tel,
      name,
      filter,
      Loaded,
      isCorrectName,
      isCorrectNumber,
      addedContact,
    } = this.state

    return (
      <PhoneListMUI
        contacts={
          filter.length > 0 ? this.getVisibleContact() : this.state.contacts
        }
        tel={tel}
        Loaded={Loaded}
        name={name}
        filter={filter}
        isCorrectNumber={isCorrectNumber}
        isCorrectName={isCorrectName}
        onclick={
          this.checkContacts().length > 0 ? this.showAlert : this.regularName
        }
        handleChange={this.handleChange}
        removeContact={this.removeContact}
        submitHandler={this.submitHandler}
        addedContact={addedContact}
      />
    )
  }
}

export default Task6
