import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import logoImg from '../../../assets/logo.png';
import axios from 'axios';

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({username: '', email: '', password: '', confirmPassword: '', });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert('Passwords do not match');
    }

    try {

      const response = await axios.post(
        'http://localhost:5000/api/users/register',
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }
      );

      console.log(response.data);

      alert('Account created successfully');

      navigate('/login');

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message || 'Something went wrong'
      );
    }
  };

  return (

    <div className={styles.container}>

      <div className={styles.card}>

        <div className={styles.logoContainer}>

          <div className={styles.logoIcon}>
            <img src={logoImg} alt="Warm Gourmet Logo" />
          </div>

          <h1 className={styles.title}>
            Create Account
          </h1>

          <p className={styles.subtitle}>
            Join Warm Gourmet today
          </p>

        </div>

        <div className={styles.toggleContainer}>

          <Link
            to="/login"
            className={`${styles.toggleBtn} ${styles.inactiveBtn}`}>
            Login
          </Link>

          <button
            className={`${styles.toggleBtn} ${styles.activeBtn}`}>
            Register
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className={styles.inputGroup}>
            <label className={styles.label}>
              Full Name
            </label>

            <input
              type="text"
              name="username"
              placeholder="enter your name"
              className={styles.input}
              onChange={handleChange}
              value={formData.username}/>
          </div>

          <div className={styles.inputGroup}>

            <label className={styles.label}>
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              className={styles.input}
              onChange={handleChange}
              value={formData.email}/>
          </div>

          <div className={styles.inputGroup}>

            <label className={styles.label}>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className={styles.input}
              onChange={handleChange}
              value={formData.password}/>
          </div>

          <div className={styles.inputGroup}>

            <label className={styles.label}>
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              className={styles.input}
              onChange={handleChange}
              value={formData.confirmPassword}/>
          </div>

          <button
            type="submit"
            className={styles.signUpBtn}>
            Sign Up
          </button>

        </form>

        <p className={styles.footerText}>
          Already have an account?

          <Link to="/login" className={styles.link}>
            Login here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;
