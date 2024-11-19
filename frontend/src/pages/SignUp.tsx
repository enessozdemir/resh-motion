export default function SignUp() {
  return (
    <div>
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>
  )
}
