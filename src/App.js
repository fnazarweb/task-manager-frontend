import TodoListPage from "./pages/List/TodoListPage";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import EditItemPage from "./pages/EditItem/EditItemPage";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/todoList" element={<TodoListPage />} />
          <Route path="/todoList/:id" element={<EditItemPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
