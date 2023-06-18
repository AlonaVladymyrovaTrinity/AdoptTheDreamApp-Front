import { useState, useId } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import style from './ConfirmApplication.module.css';

const ConfirmApplication = () => {
  const [validated, setValidated] = useState(false);
  const [value, setValue] = useState();
  const selectID = useId();
  console.log({ value });

  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);

    // const onChange = (event) => {
    //   setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);

    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
  };
  // const [selectedFruit, setSelectedFruit] = useState('');
  console.log(selectID);

  return (
    <>
      <Container style={{ width: '80%' }}>
        <h1 className="text-center mt-5 mb-5">Adoption Application</h1>
        <Form
          noValidate
          validated={validated}
          method="post"
          onSubmit={handleSubmit}
        >
          <Row xs={1} md={1} lg={2} xl={2} className="ms-1 me-1">
            <Col md={8}>
              <p>Type of pet</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="formBasicSelect">
                <Form.Label>Select Pet Type</Form.Label>
                {/* <Form.Group controlId={selectID}> */}
                {/* <Form.Group controlId="formSelectPetType"> */}
                <Form.Select
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  // onChange={handleChange}
                  name="petType"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={3}>Name of pet</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Control
                  required
                  type="text"
                  placeholder="Name of pet"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Applicant's Full Name</p>
            </Col>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom03"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom04"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Co-Applicant's First Name (If Any)</p>
            </Col>
            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom05"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom06"
                className="mb-3"
              >
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Age of Applicant</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom07">
                <Form.Control
                  required
                  type="text"
                  placeholder="Age"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={3}>Address</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom08">
                <Form.Control
                  required
                  type="text"
                  placeholder="Street Address"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={3}></Col>

            <Row>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom09"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="City" required />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom10"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="State" required />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom11"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Zip" required />
              </Form.Group>
            </Row>
            <Col md={3}>Phone Number</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom12">
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone Number"
                  defaultValue=""
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Col md={3}>E-mail Address</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom13">
                <Form.Control
                  required
                  type="text"
                  placeholder="E-mail Address"
                  defaultValue=""
                />
              </Form.Group>
            </Row>

            <Col md={8}>
              <p>Occupation and Employer</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom14">
                <Form.Control
                  required
                  type="text"
                  placeholder="Occupation and Employer"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Work Address</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="validationCustom15">
                <Form.Control
                  required
                  type="text"
                  placeholder="Work Address"
                  defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Co-Applicant's Occupation, Employer, and Work Address</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom16">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you work from home?</p>
            </Col>
            <Row className="mb-3 ms-0">
              {/* <Form.Group controlId="formSelect"> */}
              <Form.Select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // onChange={handleChange}
                name="workFromHome"
                id={selectID}
                required
                className="w-50"
                aria-label="Default select example"
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="sometimes">Sometimes</option>
              </Form.Select>
              {/* </Form.Group> */}
            </Row>
            <Col md={8}>
              <p>Names and Ages of Children in Your Home</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom18">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Is anyone in your home allergic to animals?</p>
            </Col>
            <Row className="mb-3">
              {/* <Form.Group controlId="formSelect"> */}
              <Form.Select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                // onChange={handleChange}
                name="allergic"
                id={selectID}
                required
                className="w-50"
                aria-label="Default select example"
              >
                <option value="" disabled>
                  Please select
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              {/* </Form.Group> */}
            </Row>
            <Col md={8}>
              <p>If yes, explain:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom20">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Is everyone in your home in agreement about adopting a pet?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="formSelect">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="agreementAdoptingPet"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If no, explain:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom22">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Who will be responsible for the grooming, housebreaking, and
                training of this pet?
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom23">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Does anyone in your home fear animals?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom24">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="fearAnimals"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If yes, explain:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom25">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are you familiar with animal regulations in your area?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom26">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="animalRegulation"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you own or rent your home?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom27">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="ownRentHome"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="own">Own</option>
                  <option value="rent">Rent</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Please list management company's or landlord's name, address,
                and phone number:
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom28">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are you planning to move in the near future?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom29">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="planningToMove"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Please briefly describe your home:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom30">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you have a yard?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom31">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="haveAYard"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If yes, is it fenced? How high is the fence?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom32">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Tell us briefly, in your own words, why you want to bring a pet
                into your home:
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom33">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you already have a pet(s) in your home?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom34">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="alredyHavePets"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If yes, what kind and how old?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom35">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are all your current pets spayed/neutered?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom36">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="sprayedNeutered"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Is the pet you are applying for, going to be a gift?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom37">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="petGift"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If no one is home, where will the pet be kept?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom38">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                How many hours during a typical day will the pet be left alone?
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom39">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                If you can no longer care for pet , who will contact our rescue
                to return pet? Please include their name, address, and phone
                number.
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom40">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Should your adopted pet develop special needs over time, will
                you still keep this pet, get proper veterinary care and follow
                your vet's guidelines, including whatever
                treatments/medications/special foods are required?
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom41">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="vetCare"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="depends on the expense">
                    Depends on the expense
                  </option>
                  <option value="not sure/Can't answer">
                    Not sure/Can't answer
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Will you assume all financial responsibilities for the pet you
                adopt, including inoculations, regular veterinary care, good
                quality food, licensing, ID tag, dog bed, leash, collar, etc.?
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom42">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="financialResponsibilities"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="depends on the expense">
                    Depends on the expense
                  </option>
                  <option value="not sure/Can't answer">
                    Not sure/Can't answer
                  </option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Are you willing to hire a professional trainer to correct any
                behavioral issues that arise?
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom43">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="hireProfTrainer"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have you had pets in the past?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom44">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="petsInThePast"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If yes, please tell us about them:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom45">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>How many years did you own your pet(s)?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom46">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have any of your pets ever gotten lost?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom47">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="petsGottenLost"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have any of your pets ever been poisoned?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom48">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="petsBeenPoisoned"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Has any pet in your care ever been hit by a vehicle?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom49">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="petHitByVehicle"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have you ever given a pet to a shelter?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom50">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="givenPetToShelter"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option disabled defaultValue="Please select">
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have you ever given a pet away to someone?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group controlId="validationCustom51">
                <Form.Select
                  value={value}
                  onChange={handleChange}
                  name="givenPetAway"
                  id={selectID}
                  required
                  className="w-50"
                  aria-label="Default select example"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="n/a">N/A</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>If you've given away a pet in the past, please explain:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom52">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Please provide names, phone numbers, and relationship of two
                (see vet reference note) people not related to you:
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom53">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Vet's name, address, and phone number:</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="validationCustom54">
                <Form.Control as="textarea" rows={3} required />
              </Form.Group>
            </Row>
          </Row>
          <div className="ms-5">
            <p>
              If you do not have a vet, please include three personal references
              above.
            </p>
            <p>
              {' '}
              I agree that if I am permitted to adopt, I will have the adoptive
              pet checked by my own veterinarian within 7 days of said adoption,
              and will provide medical care, at my own expense, as well as
              routine yearly exams for as long as I own the pet. I understand
              and agree that giving false information in response to any of the
              questions above will disqualify me from adopting a pet, and will
              nullify all adoption(s) and/or adoption agreements.
            </p>
            <Form.Group className="mb-3" controlId="invalidCheck1" required>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Control
                required
                type="date"
                placeholder="First name"
                defaultValue=""
                className="mb-3"
              />
            </Form.Group>
            <div className={style.confirmApplicationSubmitBtn}>
              <Button className="mb-5 b" type="submit">
                Submit form
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ConfirmApplication;
