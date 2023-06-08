import React, { useState } from "react";
import { Button, Form, Input, List, Modal } from "antd";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useDispatch } from "react-redux";

import TextArea from "antd/es/input/TextArea";
import { projectActionType } from "../store/reducers/projectReducer";

const Projects: React.FC = () => {
  const { projects } = useTypedSelector((state) => state.project);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [projectData, setProjectData] = useState({
    id: projects.length + 1,
    title: "",
    description: "",
  });
  const addProject = () => {
    dispatch({ type: projectActionType.ADD_PROJECT, payload: projectData });
  };

  return (
    <div>
      <h1>Projects</h1>
      <Button type="primary" onClick={showModal}>
        Add Project
      </Button>

      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(item) => (
          <List.Item actions={[<a key={"tasks"}>tasks</a>]}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
      <Modal
        title="Add Project"
        open={isModalOpen}
        okText={"Submit"}
        onOk={addProject}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Project name"
            name="username"
            rules={[{ required: true, message: "Please input project name!" }]}
          >
            <Input
              value={projectData.title}
              onChange={(event) =>
                setProjectData({ ...projectData, title: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: false }]}
          >
            <TextArea
              value={projectData.description}
              onChange={(event) =>
                setProjectData({
                  ...projectData,
                  description: event.target.value,
                })
              }
              rows={4}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Projects;
