import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

const Register = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 6 characters, include one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log("User created:", result.user);
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then((result) => {
        console.log("Google Login:", result.user);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="url"
          name="photoURL"
          placeholder="Your photoURL"
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Register
        </button>

        {/* error show */}
        {error && (
          <p className="text-red-500 text-sm mb-3 text-center">{error}</p>
        )}


{/* dynamic burron login or logOut */}

        <p className="mt-2">
          please go to the ?{" "}
          <Link to="/login">
            <span className="text-blue-600 font-bold">Login</span>
          </Link>
        </p>
        <div className="divider">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default Register;
