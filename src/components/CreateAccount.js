import React from "react";
import "./CreateAccount.css";
import { Link, useHistory } from "react-router-dom";

const CreateAccount = () => {
    return (
        <div>
            <form action="" method="post" className="create-account-form">
                <h2>Create Account</h2>
                <label htmlFor="" className="form-left">
                    First Name:{" "}
                </label>
                <input type="text" name="" id="" className="form-left" />
                <label htmlFor="" className="form-right">
                    Last Name:{" "}
                </label>
                <input type="text" name="" className="form-right" id="" />
                <br />
                <label htmlFor="" className="form-left">
                    Email:{" "}
                </label>
                <input type="email" name="" id="" className="form-left" />
                <label htmlFor="" className="form-right">
                    Address:{" "}
                </label>
                <input type="address" name="" className="form-right" id="" />
                <br />
                <label htmlFor="" className="form-left">
                    Password:{" "}
                </label>
                <input type="password" name="" id="" className="form-left" />
                <label htmlFor="" className="form-right">
                    Retype Password:{" "}
                </label>
                <input type="password" name="" className="form-right" id="" />
                <br />
                <label htmlFor="" className="form-left">
                    City:{" "}
                </label>
                <input type="city" name="" id="" className="form-left" />
                <label htmlFor="" className="form-right">
                    State:{" "}
                </label>
                <input type="state" name="" className="form-right" id="" />
                <br />
                <label htmlFor="">Phone: </label>
                <input type="phone" name="" id="" />
                <br />
                <input type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default CreateAccount;
