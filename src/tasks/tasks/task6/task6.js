import React from 'react'
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
      loaded: false,
      isCorrectName: false,
      isCorrectNumber: false,
      addedContact: false,
      isOpen: false,
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

    if (prevState.filter !== this.state.filter) {
      this.showContacts()
    }
  }

  fetchedChange = () => {
    this.setState(() => ({
      loaded: true,
    }))
  }

  getCloseModal = () => {
    this.setState(() => ({
      isOpen: false,
    }))
  }

  nullName = () => {
    this.setState(() => ({
      name: '',
    }))
  }
  nullTel = () => {
    this.setState(() => ({
      tel: '',
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

  OnClickHandler = () =>
    this.checkContacts().length > 0 ? this.showAlert : this.addOnClick

  addOnClick = () => {
    const newID = this.state.lastID + 1
    const contact = { name: this.state.name, tel: this.state.tel, id: newID }
    this.fetchedChange()
    setTimeout(
      () =>
        this.setState((prev) => ({
          contacts: [...prev.contacts, contact],
          lastID: newID,
          name: '',
          tel: '',
          loaded: false,
          addedContact: false,
        })),
      2000
    )
  }

  showAlert = () => {
    this.setState(() => ({
      isOpen: true,
      name: '',
      tel: '',
    }))
    // setTimeout(
    //   () =>
    //     this.setState(() => ({
    //       isOpen: false,
    //     })),
    //   2000
    // )
  }

  submitHandler = (e) => {
    e.preventDefault()
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
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

  showContacts = () => {
    const { contacts, filter } = this.state
    if (filter.length === 0) {
      return contacts
    }
    return contacts.filter((contact) => contact.name.includes(filter))
  }

  render() {
    let {
      tel,
      name,
      filter,
      loaded,
      isCorrectName,
      isCorrectNumber,
      addedContact,
      isOpen,
    } = this.state

    return (
      <PhoneListMUI
        contacts={this.showContacts()}
        tel={tel}
        loaded={loaded}
        name={name}
        filter={filter}
        isCorrectNumber={isCorrectNumber}
        isCorrectName={isCorrectName}
        isOpen={isOpen}
        onClick={this.OnClickHandler()}
        handleChange={this.handleChange}
        removeContact={this.removeContact}
        submitHandler={this.submitHandler}
        addedContact={addedContact}
        nullName={this.nullName}
        nullTel={this.nullTel}
        getCloseModal={this.getCloseModal}
      />
    )
  }
}

export default Task6
