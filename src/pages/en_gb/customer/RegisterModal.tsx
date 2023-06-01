import axios from "axios";
import { useState } from "react";

export default function CreateCustomerModal() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    axios
        .post("http://localhost:8080/customer", form, {
        headers: { "Content-Type": "application/json" },
        })
        .then(() =>  {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
              const cookie = cookies[i].trim(); // Trim whitespace if necessary
              if (cookie.startsWith("customerEmail")) {
                console.log(cookie);
                document.cookie = cookie +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
              }
            }
            document.cookie = "customerEmail=customerEmail: " + email + ";path=/;";
            document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
            window.location.reload();
            return null;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
  };

  return (
    <form onSubmit={handleSubmit} id="registerform" className="hidden">
        <div className="flex justify-end">
            <div className="form-control w-full max-w-xs pr-2">
                <label className="label">
                    <span className="label-text">First Name</span>
                </label>
                <input
                type="text"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                placeholder="Enter here"
                className="input-bordered input w-full max-w-xs"
                name="firstName"
                required
                />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                <span className="label-text">Last Name</span>
                </label>
                <input
                type="text"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                placeholder="Enter here"
                className="input-bordered input w-full max-w-xs"
                name="lastName"
                required
                />
            </div>
        </div>

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
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="email"
            required
        />
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="password"
            required
        />
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Street</span>
        </label>
        <input
            type="text"
            value={street}
            onChange={(e) => {
                setStreet(e.target.value);
            }}
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="street"
            required
        />
        </div>
        <div className="flex justify-end">
        <div className="form-control w-full max-w-xs pr-2">
            <label className="label">
            <span className="label-text">House No.</span>
            </label>
            <input
            type="text"
            value={house}
            onChange={(e) => {
                setHouse(e.target.value);
            }}
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="house"
            required
            />
        </div>
        <div className="form-control w-full max-w-xs">
            <label className="label">
            <span className="label-text">ZIP</span>
            </label>
            <input
            type="text"
            value={zip}
            onChange={(e) => {
                setZip(e.target.value);
            }}
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="plz"
            required
            />
        </div>
        </div>

        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">City</span>
        </label>
        <input
            type="text"
            value={city}
            onChange={(e) => {
                setCity(e.target.value);
            }}
            placeholder="Enter here"
            className="input-bordered input w-full max-w-xs"
            name="city"
            required
        />
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            <span className="label-text">Country</span>
        </label>
        <select 
            name="country" 
            className="select-bordered select w-full max-w-xs" 
            value={country}
            onChange={(e) => {
                setCountry(e.target.value);
            }}
            >
            <option disabled selected>Choose Country</option>
            <option>Great Britain</option>
            <option>USA</option>
            <option>Germany</option>
            <option>Switzerland</option>
            <option>Austria</option>
        </select>
        </div>
        <div className="modal-open modal-action">
        <label htmlFor="acc" className="btn-ghost modal-open btn"> Cancel</label>
        <button className="btn-primary btn" type="submit">
            Register
        </button>
        </div>
    </form>
  );
}

