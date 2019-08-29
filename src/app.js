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
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value } // merge data on state with new data from form
    this.setState({ data }) // set the data back on to the state

    console.log('data', data)
    console.log('value', data.email)
    console.log('name', e.target.name)

    const errors = { ...this.state.errors, [e.target.name]: e.target.value }

    const validEmailRegex =
    RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

    switch (e.target.name) {
      case 'email':
        errors.email = validEmailRegex.test(data.email) ? '' : 'Email is invalid'
        break
    }


    console.log('errors', this.state.errors)

    // if (e.target.value === null) {
    //   const errors = { ...this.state.errors, [e.target.name]: e.target.value}
    //   this.setState({ errors })
    // }
  }

  handleSubmit(e) {
    e.preventDefault()


  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered is-mobile">
            <div className="column is-6-desktop is-8-tablet is-10-mobile">
              <form onSubmit={this.handleSubmit} noValidate>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      type="email"
                      placeholder="anne@email.com"
                      onChange={this.handleChange}
                    />
                  </div>
                  {this.state.errors.email && <div className="help is-danger">{this.state.errors.email}</div>}
                </div>

                <button className="button is-primary">Submit</button>
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
