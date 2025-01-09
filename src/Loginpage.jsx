import React from 'react'
import '../public/Login.css'

const Loginpage = () => {
  return (
   <>
    <form method="post">
                <tr>
                    <h1>sign in</h1>
                </tr>

                <tr>
                    <th>email</th>
                </tr>
                <tr>
                    <td>
                        <input className='input' type="email" name='email' />
                    </td>
                </tr>

                <tr>
                    <th>password</th>
                </tr>
                <tr>
                    <td>
                        <input className='input' type="password" name='password' />
                    </td>
                </tr>

                <tr>
                    <td>
                        <input className='check' type="checkbox" />Remember Me <b>What's this?</b>
                    </td>
                </tr>

                <tr>
                    <td>
                        <a href="#">Forgot Your Password?</a>
                    </td>
                </tr>

                <tr className='sub'>
                    <th>
                        <input className='input' type="submit" value='SIGN IN' />
                    </th>
                </tr>
            </form>
   </>
  )
}

export default Loginpage