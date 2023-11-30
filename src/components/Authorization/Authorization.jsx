import React, { useState } from "react";
import useAuthorization from "../../hooks/useAuthorization";
import useConsoleLogger from "../../hooks/useConsoleLogger";
import { Modal, Button, Form, Input, Col } from "antd";
import styles from "./authorization.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const Authorization = () => {
  const { isAuthorized, toggleAuthorization } = useAuthorization();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsLoading(false);
      toggleAuthorization();
    }, 1000);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useConsoleLogger(isAuthorized);

  return (
    <div className={styles.container__auth}>
      {isAuthorized ? (
        <a
          className={`${styles.auth__button} ${styles.logout}`}
          onClick={toggleAuthorization}
          href="#login"
        >
          logout
        </a>
      ) : (
        <>
          <a
            className={`${styles.auth__button} ${styles.login}`}
            onClick={showModal}
            href="#logout"
          >
            login
          </a>
          <Modal
            title="Authorization"
            open={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            centered
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key="submit"
                type="primary"
                loading={isLoading}
                onClick={handleOk}
              >
                Login
              </Button>,
            ]}
          >
            <Form labelCol={{ span: 4 }}>
              <Form.Item
                label="Login"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please, enter the username!",
                  },
                ]}
              >
                <Input prefix={<UserOutlined />}/>
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please, enter the password!",
                  },
                ]}
              >
                <Input.Password prefix={<LockOutlined />}/>
              </Form.Item>
            </Form>
          </Modal>
        </>
      )}
    </div>
  );
};
