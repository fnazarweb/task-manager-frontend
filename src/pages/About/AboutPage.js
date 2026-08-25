import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <p className={styles.subtitle}>About the project</p>

        <h1>About This Todo List</h1>

        <p>
          This Todo List is a simple web application created to practice
          building modern interfaces with React and working with data from a
          server.
        </p>

        <h2>Technologies</h2>

        <p>
          The application was built using React. It also uses React Router DOM
          for navigation, React Query for working with server data, useQuery for
          fetching todos and useMutation for creating, updating and deleting
          them.
        </p>

        <p>
          CSS Modules are used to keep component styles isolated. JSON Server is
          used as a simple backend for storing and managing todo data.
        </p>

        <h2>About the Author</h2>

        <p>
          My name is Nazar, and I am a software developer focused on improving
          my frontend development skills. This project was created as part of my
          React learning journey and allowed me to practice components, hooks,
          routing, forms, API requests and server state management.
        </p>

        <p>
          The goal of the project is not only to create a functional Todo List,
          but also to understand how different React technologies work together
          in a real application.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
