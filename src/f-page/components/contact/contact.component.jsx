import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import {ValidatingFormGroup} from "reactstrap-validation";
import "./contact.styles.css"


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state

    let templateParams = {
      from_name: email,
      to_name: 'Florin Ionut',  
      subject: subject,
      message_html: message,
     }
     try {
      emailjs.send('gmail', 'list_template',templateParams,'user_OnGgSdq6Zzde4sLZ4Pyku')
     } catch (error) {
       console.log(error)
     }
    
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
 
    return (
      <div className="contact-container">
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <ValidatingFormGroup id="formBasicEmail" trigger="change"  onStateChange={console.log}>
              <Label className="text-muted">Email address</Label>
            
              <Input
                required
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </ValidatingFormGroup>
            <ValidatingFormGroup id="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                required
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </ValidatingFormGroup>
            <ValidatingFormGroup id="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                required
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </ValidatingFormGroup>
            <ValidatingFormGroup id="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                required
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </ValidatingFormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
    )
  }
}
export default ContactForm