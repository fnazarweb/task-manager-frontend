import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.about}>
      {" "}
      <div className={styles.content}>
        {" "}
        <p className={styles.subtitle}>About the project</p>{" "}
        <h1>About This Todo List</h1>{" "}
        <p>
          {" "}
          This Todo List is a full-stack web application created to practice
          building a React frontend, developing a custom backend, working with a
          database, authentication, and preparing the application for
          deployment.{" "}
        </p>{" "}
        <h2>Technologies</h2> <h3 className={styles.subheading}>Frontend</h3>{" "}
        <p>
          {" "}
          The frontend is built with <strong>React</strong> and written in
          JavaScript using JSX, without TypeScript or TSX.{" "}
          <strong>React Router DOM v6</strong> is used for navigation between
          pages.{" "}
        </p>{" "}
        <p>
          {" "}
          For state management, the project uses <strong>
            Redux Toolkit
          </strong>{" "}
          together with <strong>useContext</strong>. <strong>RTK Query</strong>{" "}
          is used for Todo CRUD operations, while Context is used for
          application-level authentication state.{" "}
        </p>{" "}
        <p>
          {" "}
          <strong>React Query</strong> is also included as part of the learning
          process to practice different approaches to server-state
          management.{" "}
        </p>{" "}
        <p>
          {" "}
          <strong>Axios</strong> is used for authentication requests such as
          registration, login, logout, and checking the current authenticated
          user.{" "}
        </p>{" "}
        <p>
          {" "}
          <strong>CSS Modules</strong> are used to keep component styles
          isolated, while <strong>classnames</strong> is used to conditionally
          combine CSS classes.{" "}
        </p>{" "}
        <h3 className={styles.subheading}>Backend</h3>
        <p>
          The backend is built with <strong>Node.js</strong> and{" "}
          <strong>Express</strong>. It provides a <strong>RESTful API</strong>{" "}
          for user authentication and Todo operations, including creating,
          reading, updating, and deleting tasks. Protected routes verify the
          authenticated user and ensure that users can access and modify only
          their own tasks.
        </p>
        <p>
          Authentication is implemented using <strong>JWT</strong>. Passwords
          are securely hashed with <strong>bcrypt</strong>, while JWT tokens are
          stored in <strong>HttpOnly cookies</strong> instead of localStorage.{" "}
          <strong>cookie-parser</strong> is used to handle cookies, and{" "}
          <strong>CORS</strong> is configured to allow the frontend to
          communicate with the backend. <strong>Postman</strong> was used to
          test API endpoints and authentication flows during development. API
          documentation is provided using <strong>Swagger</strong>.
        </p>
        <h3 className={styles.subheading}>Database</h3>{" "}
        <p>
          {" "}
          <strong>MongoDB</strong> is used as the database, with{" "}
          <strong>Mongoose</strong> for defining models and working with
          database documents. Each Todo is associated with the user who created
          it.{" "}
        </p>{" "}
        <h3 className={styles.subheading}>Tools & Deployment</h3>{" "}
        <p>
          {" "}
          <strong>Git</strong> and <strong>GitHub</strong> are used for version
          control and project development. <strong>ESLint</strong> is used for
          code quality and detecting potential problems, while{" "}
          <strong>Prettier</strong> is used for consistent code formatting.{" "}
        </p>{" "}
        <p>
          {" "}
          The frontend and backend are containerized separately using{" "}
          <strong>Docker</strong>. The backend is packaged as a Docker image and
          prepared for deployment, while the frontend is also being configured
          as a separate Docker container.{" "}
        </p>{" "}
        <p>
          The application is deployed using <strong>Render</strong>, with the
          frontend and backend deployed as separate services.
        </p>
        <h2>About the Author</h2>{" "}
        <p>
          {" "}
          My name is Nazar, and I am a junior full-stack developer with
          experience in both frontend and backend development.{" "}
        </p>{" "}
        <p>
          {" "}
          I created this project as part of my full-stack learning journey. It
          allowed me to practice React, state management, routing, forms, REST
          APIs, as well as backend development with Node.js, Express, MongoDB,
          Mongoose, JWT authentication, and password hashing.{" "}
        </p>{" "}
        <p>
          {" "}
          My goal is to continue developing my skills across the full stack
          while building practical applications and gaining professional
          experience.{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
};
export default AboutPage;
