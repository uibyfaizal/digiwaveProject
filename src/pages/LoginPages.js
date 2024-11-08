const LoginPages = () => {
    return <div className="login">
        <form>
            <h3>Sign In</h3>
            <div className="mb-2">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control" />
            </div>
        </form>
    </div>
}

export default LoginPages;