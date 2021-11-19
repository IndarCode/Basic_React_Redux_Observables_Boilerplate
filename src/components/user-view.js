import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { fetchUser } from '../actions/app-action';

const styles = (theme) => ({
    container: {
      padding: '30px',
      backgroundColor: '#ccc',
    },
    root: {

    },
    airlineBlock: {

    }
});

class UserView extends Component {
    componentDidMount(){
        const { fetchUser, userId, isLoadingUser } = this.props
        fetchUser(userId)
    }
    render() {
        const { isLoadingUser } = this.props
        if(isLoadingUser){
            return (
                <img 
                src="https://lh3.googleusercontent.com/proxy/F5_7p-pxjUmk8mlzgdKcDZ5suCuvP0j1Er74CrtDjhnd75-2NkpoElPqUsG0AmFWzpTm9XaCMS7WUzL_J-If2XAgySQQWM6UPqPE9P-Vf0Fjb_ckuHenXvuDFiongp7Kg5ejydBC6K1jehZLI8kbkgc"
                alt="loader"
                className="loader"
                />
            )
        }
        console.log(this.props, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
        const { classes, userId, history, user } = this.props;
        return (
            <div className="container">
                <h1>USER VIEW : {user && user.name && user.name.toUpperCase()}({user.trips})</h1>
                {user && user.airline && user.airline.length > 0 &&
                user.airline.map((airline) => <div className={classes.airlineBlock}>
                    <img src={airline.logo} alt="logo" />
                    <h3>{airline.name}</h3>
                    <span>{airline.slogan}</span><br />
                    <a hef={airline.website} style={{ color: 'purple', fontSize: 12, margin: '5px 0 20px', display: 'block', textDecoration: 'underline'}}>{airline.website}</a>
                    <p><strong>Country: </strong>{airline.country}</p>
                    <p><strong>Head Quarter: </strong>{airline.head_quaters}</p>
                    </div>) }
                <div className="button" onClick={() => history.push('/')}>
                    USER LIST
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.app.errors,
    user: state.app.user,
    isLoadingUser: state.app.isLoadingUser
})

const mapDispatchToProps =  dispatch => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserView))