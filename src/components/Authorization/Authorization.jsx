import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import useAuthorization from "../../hooks/useAuthorization";
import useConsoleLogger from "../../hooks/useConsoleLogger";
import { Modal, Button, Input } from "antd";
import styles from "./authorization.module.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const Authorization = () => {
  const { isAuthorized, toggleAuthorization } = useAuthorization();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsModalVisible(false);
      setIsLoading(false);
      toggleAuthorization();
      // You can access form values here with 'values'
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
            visible={isModalVisible}
            onOk={() => {}}
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
                onClick={() => {}}
              >
                Login
              </Button>,
            ]}
          >
            <Formik
              initialValues={{ username: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.username) {
                  errors.username = "Please, enter the username!";
                }
                if (!values.password) {
                  errors.password = "Please, enter the password!";
                }
                return errors;
              }}
              onSubmit={(values) => handleOk(values)}
            >
              <Form labelCol={{ span: 4 }}>
                <div>
                  <label>Login</label>
                  <Field
                    type="text"
                    name="username"
                    prefix={<UserOutlined />}
                    as={Input}
                  />
                  <ErrorMessage name="username" component="div" />
                </div>
                <div>
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    prefix={<LockOutlined />}
                    as={Input.Password}
                  />
                  <ErrorMessage name="password" component="div" />
                </div>
              </Form>
            </Formik>
          </Modal>
        </>
      )}
    </div>
  );
};
