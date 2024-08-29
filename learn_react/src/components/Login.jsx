function LogIn(props) {
    return(
        <div>
            <h3>Welcome to the portal</h3>
            {
                props.isLoggedIn ? (
                    <div> Hi Sandhya</div>
                ) : (
                    <button>Sign In</button>
                )
            }

            {
                props.isLoggedIn && (<div> Hi Sandhya</div>)
            }
            {
                props.isLoggedIn || (<div> Hi Sandhya</div>)
            }
        </div>
    )
}
export default LogIn;