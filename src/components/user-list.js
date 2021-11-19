import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { fetchUserList } from '../actions/app-action';


const styles = (theme) => ({
    container: {
      padding: '30px',
      backgroundColor: '#ccc',
    },
    blockHolder: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    block: {
        border: '1px solid #eee',
        padding: '20px',
        margin: 10,
        textAlign: 'center',
        minWidth: '200px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#2074ff'
        },
        '&:hover h3': {
            color: '#fff',
        },
        '&:hover div': {
            color: '#fff',
        },
    }
});

class UserList extends Component {
    componentDidMount(){
        const { fetchUserList } = this.props
        fetchUserList()
    }
    render() {
        const { classes, history, userList, isLoadingUserList } = this.props;
if(isLoadingUserList){
    return (
        <img 
        src="https://lh3.googleusercontent.com/proxy/F5_7p-pxjUmk8mlzgdKcDZ5suCuvP0j1Er74CrtDjhnd75-2NkpoElPqUsG0AmFWzpTm9XaCMS7WUzL_J-If2XAgySQQWM6UPqPE9P-Vf0Fjb_ckuHenXvuDFiongp7Kg5ejydBC6K1jehZLI8kbkgc"
        alt="loader"
        className="loader"
        />
    )
}

        return (
            <div className="container">
                <h1>USER LIST</h1>
                <div className={classes.blockHolder}>
                {userList && userList.length > 0 && userList.map((user) => (
                    <div className={classes.block} onClick={() => history.push(`/user/${user._id}`)} key={user._id}>
                        <h3>{user.name}</h3>
                        <div><strong>Trips:</strong> {user.trips}</div>
                    </div>
                ))}
                </div>
                <div className="button" onClick={() => history.push('/create-user')}>
                    CREATE USER
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    errors: state.app.errors,
    userList: state.app.userList,
    isLoadingUserList: state.app.isLoadingUserList
})

const mapDispatchToProps =  dispatch => ({
    fetchUserList: (userId) => dispatch(fetchUserList()),
  })

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserList))