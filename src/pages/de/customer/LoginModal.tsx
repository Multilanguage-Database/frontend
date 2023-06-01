import axios from "axios";
import { useState } from "react";

export default function LoginCustomerModal() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        try {
          await axios.get("http://localhost:8080/customer", {params: {email, password}});
          const cookies = document.cookie.split(";");
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim(); // Trim whitespace if necessary
            if (cookie.startsWith("customerEmail")) {
              console.log(cookie);
              document.cookie = cookie +
              ";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
            }
          }
          document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
          document.cookie = "customerEmail=customerEmail: " + email;
          window.location.reload();
          return null;
        } catch (error) {
          console.log(error);
          return error;
        }       
    };

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleLoginSubmit} id="loginForm" className="">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Hier eingeben"
              className="input-bordered input w-full max-w-xs"
              name="email"
              required
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Passwort</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Hier eingeben"
              className="input-bordered input w-full max-w-xs"
              name="password"
              required
            />
          </div>
          <div className="modal-open modal-action">
            <label htmlFor="acc" className="btn-ghost modal-open btn"> Abbruch</label>
            <button type="submit" className="btn-primary modal-open btn">Login</button>
          </div>
        </form>
    )
}