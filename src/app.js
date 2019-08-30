import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import './style.scss'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value } // merge data on state with new data from form
    this.setState({ data }) // set the data back on to the state

    console.log('data', data)
    console.log('value', data.email)
    console.log('name', e.target.name)
    console.log('errors', this.state.errors)


    // const errors = { ...this.state.errors, [e.target.name]: e.target.name.message }
    // this.setState({ errors })


    if (!this.state.data.email.includes('@')) {
      // e.target.name.message = 'Invalid email address'
      this.setState({
        errors: {
          email: 'Invalid email address'
        }
      })
    } else if (isNaN(this.state.data.phone)) {
      this.setState({
        errors: {
          phone: 'Invalid phone number'
        }
      })
    }
  }

  // const errors = { ...this.state.errors, [e.target.name]: e.target.name.message }
  // this.setState({ errors })

  handleSubmit(e) {
    e.preventDefault()
    const form = document.forms[0]

    for (let i = 0; i < form.length - 1; i++) {
      if (form.elements[i].required === true && form.elements[i].value.length === 0) {
        const errors = { ...this.state.errors, [form.elements[i].name]: `${form.elements[i].name} is required`}
        this.setState({ errors })
      }
    }

    console.log('errors', this.state.errors)
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered is-mobile">
            <div className="column is-6-desktop is-8-tablet is-10-mobile">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="field">
                  <label className="label">First Name</label>
                  <div className="control">
                    <input
                      className="input"
                      name="firstName"
                      type="text"
                      placeholder="Anne"
                      required={true}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.firstName && <div className="help is-danger">{this.state.errors.firstName}</div>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      type="email"
                      placeholder="anne@email.com"
                      required={true}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
                </div>
                <div className="field">
                  <label className="label">Phone</label>
                  <div className="control">
                    <input
                      className="input"
                      name="phone"
                      type="number"
                      placeholder="07283645835"
                      required={true}
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.phone && <div className="help is-danger">{this.state.errors.phone}</div>}
                </div>

                <button
                  className="button is-primary"
                  onClick={this.handleSubmit}>
                    Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
