import React from 'react';
import { useFormik, Formik, Form, Field } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ConfirmApplication = () => {
  const formik = useFormik({
    initialValues: {
      petType: '',
      fearPet: '',
      petRegulation: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });
  return (
    <div>
      <Container style={{ width: '80%' }}>
        <h1 className="text-center mt-5 mb-5">Adoption Application</h1>
        <Formik
          initialValues={{ petType: '', fearPet: '', petRegulation: '' }}
          onSubmit={formik.handleSubmit}
        >
          <Form>
            {/* <Row xs={1} md={1} lg={2} xl={2} className="ms-1 me-1"> */}
            <Col md={8}>
              <p>Type of pet</p>
            </Col>
            <Row className="mb-3">
              {/* <Form.Group as={Col} md="6" controlId="validationCustom02"> */}
              <Field name="petType" as="select">
                <option value="" disabled>
                  Please select
                </option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
              </Field>
              {/* </Form.Group> */}
            </Row>
            <Col md={3}>Name of pet</Col>
            <Row className="mb-3">
              <input
                id="petName"
                name="petName"
                type="text"
                onChange={formik.handleChange}
                value={formik.petName}
              />
            </Row>
            <Col md={8}>
              <p>Does anyone in your home fear animals?</p>
            </Col>
            <Row className="mb-3">
              <Field name="fearPet" as="select">
                <option value="" disabled>
                  Please select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
            </Row>
            <Col md={8}>
              <p>Are you familiar with animal regulations in your area?</p>
            </Col>
            <Row className="mb-3">
              <Field name="petRegulation" as="select">
                <option value="" disabled>
                  Please select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Field>
            </Row>
            <button type="submit">Submit</button>
            {/* </Row> */}
          </Form>
        </Formik>
      </Container>
    </div>
  );
};

export default ConfirmApplication;
