import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [firstValidate, setFirstValidate] = useState(false);
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const [viewConfirm, setViewConfirm] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);

  const [validityArray, updateValidityArray] = useState([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    document.title = "Khybots | Login";

    if (firstValidate) {
      validateForm();
    }
    console.log(firstValidate);
  }, [firstValidate, email, password, confirm]);

  const emailPatternRegex = RegExp(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/);
  const passwordPatternRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );

  const newValidityArray = [...validityArray];

  const validateForm = () => {
    if (emailPatternRegex.test(email)) {
      console.log("Email is valid");
      newValidityArray[1] = true;
    } else {
      console.log("Email error");
      newValidityArray[1] = false;
    }

    if (passwordPatternRegex.test(password)) {
      console.log("Password is valid");
      newValidityArray[2] = true;
    } else {
      console.log("Password error");
      newValidityArray[2] = false;
    }

    if (confirm === password) {
      console.log("Password is valid");
      newValidityArray[3] = true;
    } else {
      console.log("Password error");
      newValidityArray[3] = false;
    }

    console.log("_______________");
    newValidityArray[0] = newValidityArray.slice(1).every((value) => value);

    setFirstValidate(true);
    updateValidityArray(newValidityArray);
  };

  const submitForm = (e) => {
    e.preventDefault();
    validateForm();

    if (validityArray.every((val) => val)) {
      setFormSubmitted(true);
    } else {
      setFirstValidate(true);
    }
  };

  const clearAll = () => {
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="h-3/4">
        {!isFormSubmitted ? (
          <div className="form-wrapper p-6 w-full rounded-lg">
            <form onSubmit={(e) => submitForm(e)}>
              <h1>Create an Account</h1>
              <div className="mb-3">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    value={name}
                    onChange={(val) => setName(val.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(val) => setUsername(val.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(val) => setEmail(val.target.value)}
                    required
                  />
                </div>
                {firstValidate && !validityArray[1] ? (
                  <span className="error email-error">
                    <i className="bx bx-error-circle error-icon"></i>
                    <p className="error-text">Please enter a valid email</p>
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-3 create-password">
                <div className="relative">
                  <input
                    type={!viewPassword ? "password" : "text"}
                    placeholder="Create password"
                    value={password}
                    onChange={(val) => setPassword(val.target.value)}
                    required
                  />
                  {!viewPassword ? (
                    <BsEyeSlash
                      className="absolute top-5 right-4 cursor-pointer text-violet-600"
                      onClick={() => setViewPassword(true)}
                    />
                  ) : (
                    <BsEye
                      className="absolute top-5 right-4 cursor-pointer text-violet-600"
                      onClick={() => setViewPassword(false)}
                    />
                  )}
                </div>
                {firstValidate && !validityArray[2] ? (
                  <span className="error password-error">
                    <i className="bx bx-error-circle error-icon"></i>
                    <p className="error-text">
                      Please enter at least 8 character with number, symbol,
                      small and capital letter.
                    </p>
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="mb-3">
                <div className="relative">
                  <input
                    type={!viewConfirm ? "password" : "text"}
                    placeholder="Confirm password"
                    value={confirm}
                    onChange={(val) => setConfirm(val.target.value)}
                    required
                  />
                  {!viewConfirm ? (
                    <BsEyeSlash
                      className="absolute top-5 right-4 cursor-pointer text-violet-600"
                      onClick={() => setViewConfirm(true)}
                    />
                  ) : (
                    <BsEye
                      className="absolute top-5 right-4 cursor-pointer text-violet-600"
                      onClick={() => setViewConfirm(false)}
                    />
                  )}
                </div>
                {firstValidate && !validityArray[3] ? (
                  <span className="error cPassword-error">
                    <i className="bx bx-error-circle error-icon"></i>
                    <p className="error-text">Password don't match</p>
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-row flex-wrap justify-center items-center btn-group">
                <input
                  type="submit"
                  value="Submit Now"
                  className="mx-3 flex-1"
                />
                <input
                  type="button"
                  value="Clear"
                  onClick={clearAll}
                  className="mx-3 flex-1"
                />
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center mt-20 text-xl mx-5">
            <h1>Hello, {name}</h1>
            <p>
              Your username is <span className="text-sky-600">{username}</span>
              <br />
              Your email is <span className="text-sky-600">{email}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
