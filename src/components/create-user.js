import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { createUser } from '../actions/app-action';

const styles = {
    container: {
      padding: '30px',
      backgroundColor: '#ccc',
    },
  };

  const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 15) {
      errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
  }
  
  const warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }
  
  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

export class CreateUserForm extends Component {
    render() {
        const { classes, handleSubmit, pristine, reset, submitting, history } = this.props;
        
        return (
            <div className="container">
                <h1>CREATE USER</h1>
                <div className="button" onClick={() => history.push('/')}>
                    USER LIST
                </div>

                <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="age" type="number" component={renderField} label="Age" />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.app.errors,
    isCreatingUser: state.app.isCreatingUser,
})

const mapDispatchToProps =  dispatch => ({
    createUser: (data) => dispatch(createUser(data)),
  })
  

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'createForm',
    validate,
    warn,
  })(withStyles(styles)(CreateUserForm)))