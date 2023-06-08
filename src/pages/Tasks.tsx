import React, { useState } from "react";
import { Button, Form, Input, List, Modal, Select } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

import TextArea from "antd/es/input/TextArea";
import { tasksActionType } from "../store/reducers/tasksReducer";

const Tasks: React.FC = () => {
  const { tasks } = useTypedSelector((state) => state.tasks);
  const { projects } = useTypedSelector((state) => state.project);

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskData, setTaskData] = useState({
    id: tasks.length + 1,
    title: "",
    description: "",
    current_time: 0,
    project_id: 1,
  });
  const addTask = () => {
    dispatch({ type: tasksActionType.ADD_TASK, payload: taskData });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const options: any = [];
  const getOptions = () => {
    projects.map((project) => {
      options.push({ value: project.id, label: project.title });
    });
  };
  getOptions();

  return (
    <div>
      <h1>Tasks</h1>
      <Button type="primary" onClick={showModal}>
        Add Task
      </Button>

      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(item) => (
          <List.Item
            style={{ paddingBottom: "40px" }}
            actions={[<a key={"edit"}>edit</a>]}
          >
            {projects.map((project) =>
              item.project_id === project.id ? (
                <p style={{ float: "right", fontWeight: 700 }} key={project.id}>
                  {project.title}
                </p>
              ) : (
                ""
              )
            )}
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      <Modal
        title="Add Task"
        open={isModalOpen}
        okText={"Submit"}
        onOk={addTask}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Task name"
            name="username"
            rules={[{ required: true, message: "Please input task name!" }]}
          >
            <Input
              value={taskData.title}
              onChange={(event) =>
                setTaskData({ ...taskData, title: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: false }]}
          >
            <TextArea
              rows={4}
              value={taskData.description}
              onChange={(event) =>
                setTaskData({ ...taskData, description: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item
            label="Project"
            name="project"
            rules={[{ required: true, message: "Please choose project!" }]}
          >
            <Select
              defaultValue="Choose project"
              style={{ width: "100%" }}
              // onChange={(event) =>
              //   setTaskData({ ...taskData, project_id: event.target.value })
              // }
              options={options}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Tasks;
