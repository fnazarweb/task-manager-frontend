import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <p className={styles.subtitle}>About the project</p>
        <h1>About This Todo List</h1>
        <p>
          This Todo List is a simple web application created to practice
          building interfaces with React and working with data from a server.
        </p>

        <h2>Technologies</h2>

        <p>
          The application was built with React and uses several different
          technologies and approaches. It is written in JavaScript using JSX,
          without TypeScript or TSX. They were included to practice and
          demonstrate how they work in a real application.
        </p>

        <p>
          <strong>React Router DOM v6</strong> is used for navigation between
          pages. The project uses <code>useNavigate</code>,{" "}
          <code>useLocation</code>, and the <code>&lt;Navigate&gt;</code>{" "}
          component for different navigation tasks.
        </p>
        <p>
          For global state management, the project uses{" "}
          <strong>Redux Toolkit</strong> together with{" "}
          <strong>useContext</strong>. Both approaches were used for practice
          and to demonstrate how they work, even though using only one approach
          would usually be enough for a small project.
        </p>
        <p>
          For working with server data, the project uses{" "}
          <strong>React Query</strong> and <strong>RTK Query</strong>. Using
          several technologies for similar tasks was a deliberate choice by the
          author to practice and demonstrate their differences. In a real
          project, it would usually make more sense to choose one approach, such
          as RTK Query, instead of using several solutions together.
        </p>
        <p>
          Authentication in this project is intentionally very simple. It only
          checks whether the entered email exists in the available user data.
          This was done for learning purposes, so the project could focus more
          on React and frontend technologies without going deeply into backend
          authentication.
        </p>
        <p>
          <strong>CSS Modules</strong> are used to keep component styles
          isolated. The <strong>classnames</strong> library is used to
          conditionally combine CSS classes.
        </p>
        <p>
          <strong>JSON Server</strong> is used as a simple backend for storing
          and managing todo data.
        </p>
        <h2>About the Author</h2>
        <p>
          My name is Nazar, and I am a software developer focused on improving
          my frontend development skills. This project was created as part of my
          React learning journey and allowed me to practice components, hooks,
          routing, forms, API requests, state management, and different
          approaches to working with server data.
        </p>
        <p>
          The main goal of the project is not only to create a functional Todo
          List, but also to practice and demonstrate different React
          technologies and understand how they work together in an application.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
