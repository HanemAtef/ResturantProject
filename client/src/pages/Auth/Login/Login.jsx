import  { useState } from 'react';
import logoImg from '../../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({email: '', password: '', });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(formData);
    try {

      const response = await axios.post(
        'http://localhost:5000/api/users/login',
        formData
      );

      console.log(response.data);

      alert('Login successful');

      localStorage.setItem(
        'user',
        JSON.stringify(response.data.user)
      );

      navigate('/');

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
            <img src={logoImg} alt="Warm Gourmet Logo"/>
          </div>

          <h1 className={styles.title}>Warm Gourmet</h1>

          <p className={styles.subtitle}>
            A digital concierge for urban dining
          </p>
        </div>

        <div className={styles.toggleContainer}>

          <button
            className={`${styles.toggleBtn} ${styles.activeBtn}`}>
            Login
          </button>

          <Link
            to="/register"
            className={`${styles.toggleBtn} ${styles.inactiveBtn}`}>
            Register
          </Link>

        </div>

        <form onSubmit={handleSubmit}>

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

            <div className={styles.labelRow}>
              <label className={styles.label}>
                Password
              </label>

              <a href="#" className={styles.forgotLink}>
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className={styles.input}
              onChange={handleChange}
              value={formData.password}/>
          </div>

          <button
            type="submit"
            className={styles.signInBtn}>
            Sign In
          </button>

        </form>

        <p className={styles.footerText}>
          Don't have an account?

          <Link to="/register" className={styles.link}>
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
