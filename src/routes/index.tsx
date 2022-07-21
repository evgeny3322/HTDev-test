import * as React from "react";
import { Route, Routes } from "react-router";
import TaskList from "components/taskList";
import CreateForm from "components/createForm";

const RouterLink = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/create-task" element={<CreateForm />} />
    </Routes>
  );
}

export default RouterLink;
