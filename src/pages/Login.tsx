import { useState } from "react";

export function Login() {
    const [user, setUser] = useState('');
    return (
        <div>
            <div>
                <h1>Login</h1>
                <input type="text" />
                <input type="password" name="" id="" />
            </div>
        </div>
    )

}
