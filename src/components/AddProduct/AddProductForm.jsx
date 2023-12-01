import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input, Button, Space } from "antd";
import { ProductContext } from "../../providers/ProductProvider";
import * as Yup from "yup";

// Custom Input Component for Formik
const CustomInput = ({ field, form, ...props }) => {
  return <Input {...field} {...props} />;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Product Name is required"),
  description: Yup.string().required("Product Description is required"),
  price: Yup.number().required("Product Price is required").positive("Price must be positive"),
});

const AddProductForm = () => {
  const { setProducts } = React.useContext(ProductContext);

  const initialValues = {
    name: "",
    description: "",
    price: "",
  };

  const handleAddProduct = (values, { resetForm }) => {
    const { name, description, price } = values;
    const newProduct = {
      name,
      description,
      price,
      image: "img/1.png",
    };

    // Assuming setProducts is a function to update products in context
    setProducts((prevProducts) => [...prevProducts, newProduct]);

    // Reset the form after adding the product
    resetForm();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleAddProduct}
        validationSchema={validationSchema}
      >
        <Form>
          <Space direction="vertical" size={10} align="center">
            <label htmlFor="name">Product Name</label>
            <Field
              name="name"
              render={(props) => (
                <>
                  <CustomInput {...props} placeholder="Enter the product name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </>
              )}
            />

            <label htmlFor="description">Product Description</label>
            <Field
              name="description"
              render={(props) => (
                <>
                  <CustomInput
                    {...props}
                    placeholder="Enter the product description"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error"
                  />
                </>
              )}
            />

            <label htmlFor="price">Product Price</label>
            <Field
              name="price"
              render={(props) => (
                <>
                  <CustomInput
                    {...props}
                    type="number"
                    placeholder="Enter the product price"
                  />
                  <ErrorMessage name="price" component="div" className="error" />
                </>
              )}
            />

            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Space>
        </Form>
      </Formik>
    </div>
  );
};

export default AddProductForm;
