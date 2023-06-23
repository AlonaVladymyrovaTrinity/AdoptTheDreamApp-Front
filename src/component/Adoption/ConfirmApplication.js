import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import style from './ConfirmApplication.module.css';
import Cookies from 'js-cookie';

const ConfirmApplication = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  //const [form, setForm] = useState([]);
  const [errors, setErrors] = useState({});
  //const [isSubmitting, setIsSubmitting] = useState(false);

  //------------------------select-------------------//
  const [selectedWorkFromHome, setSelectedWorkFromHome] = useState('');
  const [selectedAllergic, setSelectedAllergic] = useState('');
  const [selectedAgreementAdoptingPet, setSelectedAgreementAdoptingPet] =
    useState('');
  const [selectedFearAnimals, setSelectedFearAnimals] = useState('');
  const [selectedAreaAnimalRegulation, setSelectedAreaAnimalRegulation] =
    useState('');
  const [selectedOwnOrRentHome, setSelectedOwnOrRentHome] = useState('');
  const [selectedPlanningToMove, setSelectedPlanningToMove] = useState('');
  const [selectedHaveAYard, setSelectedHaveAYard] = useState('');
  const [selectedAlredyHavePets, setSelectedAlredyHavePets] = useState('');
  const [selectedSprayedNeutered, setSelectedSprayedNeutered] = useState('');
  const [selectedPetAGift, setSelectedPetAGift] = useState('');
  const [selectedVetCare, setSelectedVetCare] = useState('');
  const [
    selectedFinancialResponsibilities,
    setSelectedFinancialResponsibilities,
  ] = useState('');
  const [selectedHireProfTrainer, setSelectedHireProfTrainer] = useState('');
  const [selectedPetsInThePast, setSelectedPetsInThePast] = useState('');
  const [selectedPetsGottenLost, setSelectedPetsGottenLost] = useState('');
  const [selectedPetsBeenPoisoned, setSelectedPetsBeenPoisoned] = useState('');
  const [selectedPetHitByVehicle, setSelectedPetHitByVehicle] = useState('');
  const [selectedGivenPetToShelter, setSelectedGivenPetToShelter] =
    useState('');
  const [selectedGivenPetAway, setSelectedGivenPetAway] = useState('');

  //------------------------input type='text'----------------------------------//

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [coApplicantsFirstName, setCoApplicantsFirstName] = useState('');
  const [coApplicantsLastName, setCoApplicantsLastName] = useState('');
  const [applicantAge, setApplicantAge] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [occupationAndEmployer, setOccupationAndEmployer] = useState('');
  const [workAddress, setWorkAddress] = useState('');
  const [
    coApplicantOccupationEmployerWorkAddress,
    setCoApplicantOccupationEmployerWorkAddress,
  ] = useState('');
  const [nameAgeChildren, setNameAgeChildren] = useState('');
  const [allergicExplain, setAllergicExplain] = useState('');
  const [agreementExplain, setAgrimentExplain] = useState('');
  const [
    responsibleGroomingTrainingPerson,
    setResponsibleGroomingTrainingPerson,
  ] = useState('');
  const [fearAnimalsExplain, setFearAnimalsExplain] = useState('');
  const [managementCompanyInfo, setManagementCompanyInfo] = useState('');
  const [homeDescription, setHomeDescription] = useState('');
  const [fenceHigh, setFenceHigh] = useState('');
  const [kindAgeExistingPet, setKindAgeExistingPet] = useState('');
  const [reasonOfAdoption, setReasonOfAdoption] = useState('');
  const [keptPetAlone, setKeptPetAlone] = useState('');
  const [howLongPetLeftAlone, setHowLongPetLeftAlone] = useState('');
  const [returnPetPerson, setReturnPetPerson] = useState('');
  const [petsInThePastInfo, setPetsInThePastInfo] = useState('');
  const [petsInThePastPeriod, setPetsInThePastPeriod] = useState('');
  const [givenPetAwayExplain, setGivenPetAwayExplain] = useState('');
  const [notRelatedPeopleInfo, setNotRelatedPeopleInfo] = useState('');
  const [vetInfo, setVetInfo] = useState('');
  const [checked, setChecked] = useState(false);
  //--------------------------end input type='text'------------------------//

  const currentDate = new Date().toLocaleDateString(); //date of Application
  const petId = Cookies.get('PetID');
  const petType = Cookies.get('PetType');

  const petName = Cookies.get('PetName');
  useEffect(() => {
    if (!Cookies.get('PetID')) {
      navigate('/pets');
    } else {
      navigate('/application/confirm');
      // Continue with your logic for handling the cookie value
    }
  }, [navigate]);
  //-----------------------------------------------//

  const validateForm = () => {
    let formErrors = {};
    // Perform validation checks
    // if (name.trim() === '') {
    //   formErrors.name = 'Name is required';
    // }
    if (email.trim() === '') {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Invalid email format';
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (validateForm()) {
  //     // Perform form submission or other actions
  //     console.log('Form is valid');
  //   } else {
  //     console.log('Form validation failed');
  //   }
  // };
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label>Name:</label>
  //         <input type="text" value={name} onChange={handleNameChange} />
  //         {errors.name && <span>{errors.name}</span>}
  //       </div>
  //       <div>
  //         <label>Email:</label>
  //         <input type="email" value={email} onChange={handleEmailChange} />
  //         {errors.email && <span>{errors.email}</span>}
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // };
  //-----------------------------------------------------------------------//
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
      // Perform form submission or other actions
      console.log('Form is valid');

      Cookies.remove('PetID', { path: '' });
      Cookies.remove('PetType', { path: '' });
      Cookies.remove('PetName', { path: '' });
      console.log('Type of ID: ' + petId);
      console.log('Type of pet: ' + petType);
      console.log('Name of pet: ' + petName);
      console.log('First Name: ' + firstName);
      console.log('Last Name: ' + lastName);
      console.log('First Name of Co-Applicants: ' + coApplicantsFirstName);
      console.log('Last Name of Co-Applicants: ' + coApplicantsLastName);
      console.log('Age of Applicant: ' + applicantAge);
      console.log(
        'Address: ' + streetAddress + ' ' + city + ' ' + state + ' ' + zip
      );
      console.log('Phone Number: ' + mobile);
      console.log('E-mail Address: ' + email);
      console.log('Occupation and Employer: ' + occupationAndEmployer);
      console.log('Work Address: ' + workAddress);
      console.log(
        'Co-Applicant`s Occupation, Employer, and Work Address: ' +
          coApplicantOccupationEmployerWorkAddress
      );
      console.log('Do you work from home?: ' + selectedWorkFromHome);
      console.log(
        'Names and Ages of Children in Your Home: ' + nameAgeChildren
      );
      console.log(
        'Is anyone in your home allergic to animals?: ' + selectedAllergic
      );
      console.log('If yes, explain: ' + allergicExplain);
      console.log(
        'Is everyone in your home in agreement about adopting a pet?: ' +
          selectedAgreementAdoptingPet
      );
      console.log('If no, explain: ' + agreementExplain);
      console.log(
        'Who will be responsible for the grooming, housebreaking, and training of this pet?: ' +
          responsibleGroomingTrainingPerson
      );
      console.log(
        'Does anyone in your home fear animals?: ' + selectedFearAnimals
      );
      console.log('If yes, explain: ' + fearAnimalsExplain);
      console.log(
        'Are you familiar with animal regulations in your area? ' +
          selectedAreaAnimalRegulation
      );
      console.log('Do you own or rent your home? ' + selectedOwnOrRentHome);
      console.log(
        'Please list management company`s or landlord`s name, address, and phone number: ' +
          managementCompanyInfo
      );
      console.log(
        'Are you planning to move in the near future? ' + selectedPlanningToMove
      );
      console.log('Please briefly describe your home: ' + homeDescription);
      console.log('Do you have a yard? ' + selectedHaveAYard);
      console.log('If yes, is it fenced? How high is the fence? ' + fenceHigh);
      console.log(
        'Tell us briefly, in your own words, why you want to bring a pet into your home: ' +
          reasonOfAdoption
      );
      console.log(
        'Do you already have a pet(s) in your home? ' + selectedAlredyHavePets
      );
      console.log('If yes, what kind and how old? ' + kindAgeExistingPet);
      console.log(
        'Are all your current pets spayed/neutered? ' + selectedSprayedNeutered
      );
      console.log(
        'Is the pet you are applying for, going to be a gift? ' +
          selectedPetAGift
      );
      console.log(
        'If no one is home, where will the pet be kept? ' + keptPetAlone
      );
      console.log(
        'How many hours during a typical day will the pet be left alone? ' +
          howLongPetLeftAlone
      );
      console.log(
        'If you can no longer care for pet , who will contact our rescue to return pet? Please include their name, address, and phone number: ' +
          returnPetPerson
      );
      console.log(
        'Should your adopted pet develop special needs over time, will you still keep this pet, get proper veterinary care and follow your vet`s guidelines, including whatever treatments/medications/special foods are required? ' +
          selectedVetCare
      );
      console.log(
        'Will you assume all financial responsibilities for the pet you adopt, including inoculations, regular veterinary care, good quality food, licensing, ID tag, dog bed, leash, collar, etc.? ' +
          selectedFinancialResponsibilities
      );
      console.log(
        'Are you willing to hire a professional trainer to correct any behavioral issues that arise? ' +
          selectedHireProfTrainer
      );
      console.log('Have you had pets in the past? ' + selectedPetsInThePast);
      console.log('If yes, please tell us about them: ' + petsInThePastInfo);
      console.log(
        'How many years did you own your pet(s)? ' + petsInThePastPeriod
      );
      console.log(
        'Have any of your pets ever gotten lost? ' + selectedPetsGottenLost
      );
      console.log(
        'Have any of your pets ever been poisoned? ' + selectedPetsBeenPoisoned
      );
      console.log(
        'Has any pet in your care ever been hit by a vehicle? ' +
          selectedPetHitByVehicle
      );
      console.log(
        'Have you ever given a pet to a shelter? ' + selectedGivenPetToShelter
      );
      console.log(
        'Have you ever given a pet away to someone? ' + selectedGivenPetAway
      );
      console.log(
        'If you`ve given away a pet in the past, please explain: ' +
          givenPetAwayExplain
      );
      console.log(
        'Please provide names, phone numbers, and relationship of two (see vet reference note) people not related to you: ' +
          notRelatedPeopleInfo
      );
      console.log('Vet`s name, address, and phone number: ' + vetInfo);
      console.log(currentDate);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <>
      <Container style={{ width: '80%' }}>
        <h1 className="text-center mt-5 mb-5">Adoption Application</h1>
        {/* {Object.keys(errors).length === 0 && isSubmitting && (
          <span className="success-msg">Application submited successfuly</span>
        )} */}
        <Form
          //noValidate
          validated={validated}
          // method="post"
          onSubmit={handleSubmit}
        >
          <Row xs={1} md={1} lg={2} xl={2} className="ms-1 me-1">
            <Col md={8}>
              <p>Pet ID</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  id="inputPetID"
                  aria-label=" Input Pet ID" // for screen reader
                  required
                  placeholder="Type of ID"
                  defaultValue={Cookies.get('PetID')}
                  disabled
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Type of pet</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  id="inputPetType"
                  aria-label=" Input Pet Type" // for screen reader
                  required
                  placeholder="Type of pet"
                  defaultValue={Cookies.get('PetType')}
                  disabled
                />
              </Form.Group>
            </Row>
            <Col md={3}>Name of pet</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  id="inputPetName"
                  aria-label=" Input Pet Name" // for screen reader
                  required
                  placeholder="Name of pet"
                  defaultValue={Cookies.get('PetName')}
                  disabled
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Applicant's Full Name*</p>
            </Col>
            <Row>
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Control
                  type="text"
                  id="inputApplicantsFirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-label=" Input Applicants First Name" // for screen reader
                  required
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Control
                  type="text"
                  id="inputApplicantsLastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-label="Input Applicants Last Name" // for screen reader
                  required
                  placeholder="Last name"
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
                className="mb-3"
                //controlId="formValidationNull"
                validation={null}
              >
                <Form.Control
                  type="text"
                  id="inputCoApplicantsFirstName"
                  value={coApplicantsFirstName}
                  onChange={(e) => setCoApplicantsFirstName(e.target.value)}
                  aria-label=" Input Co-Applicants First Name" // for screen reader
                  //required
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                className="mb-3"
                //controlId="formValidationNull"
                validationstate={null}
              >
                <Form.Control
                  type="text"
                  id="inputCoApplicantsLastName"
                  value={coApplicantsLastName}
                  onChange={(e) => setCoApplicantsLastName(e.target.value)}
                  aria-label=" Input Co-Applicants Last Name" // for screen reader
                  //required
                  placeholder="Last name"
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Age of Applicant*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="number"
                  id="inputAgeOfApplicant"
                  value={applicantAge}
                  onChange={(e) => setApplicantAge(e.target.value)}
                  aria-label="Input Age of Applicant" // for screen reader
                  required
                  placeholder="Age"
                />
              </Form.Group>
            </Row>
            <Col md={3}>Address*</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  id="inputStreetAddress"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  aria-label="input Street Address" // for screen reader
                  required
                  placeholder="Street Address"
                />
              </Form.Group>
            </Row>
            <Col md={3}></Col>
            <Row>
              <Form.Group as={Col} md="6" className="mb-3">
                <Form.Control
                  type="text"
                  id="inputCity"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  aria-label="input City" // for screen reader
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3">
                <Form.Control
                  type="text"
                  id="inputState"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                  aria-label="input State" // for screen reader
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="4" className="mb-3">
                <Form.Control
                  type="text"
                  id="inputZip"
                  value={zip}
                  placeholder="Zip"
                  onChange={(e) => setZip(e.target.value)}
                  aria-label="input Zip code" // for screen reader
                  required
                />
              </Form.Group>
            </Row>
            <Col md={3}>Phone Number*</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="mobile"
                  id="mobile"
                  value={mobile}
                  placeholder="Phone Number"
                  onChange={(e) => setMobile(e.target.value)}
                  aria-label="input Phone Number" // for screen reader
                  required
                />
              </Form.Group>
            </Row>
            <Col md={3}>E-mail Address*</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Control
                  //className={errors.email && 'input-errors'}
                  // className={`input ${errors.email && 'is-danger'}`}
                  type="email"
                  //id="validationDefault01"
                  //id="email"
                  value={email}
                  placeholder="E-mail Address"
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="input E-mail Address" // for screen reader
                  required
                />
                {/* {errors.email && <span>{errors.email}</span>} */}
                {errors.email && (
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Row>

            <Col md={8}>
              <p>Occupation and Employer*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  id="inputOccupationAndEmployer"
                  value={occupationAndEmployer}
                  placeholder="Occupation and Employer"
                  onChange={(e) => setOccupationAndEmployer(e.target.value)}
                  aria-label="input Occupation And Employer" // for screen reader
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Work Address*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Control
                  type="text"
                  id="inputWorkAddress"
                  value={workAddress}
                  placeholder="Work Address"
                  onChange={(e) => setWorkAddress(e.target.value)}
                  aria-label="input Work Address" // for screen reader
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Co-Applicant's Occupation, Employer, and Work Address</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputCoApplicantOccupationEmployerWorkAddress"
                  value={coApplicantOccupationEmployerWorkAddress}
                  placeholder=""
                  onChange={(e) =>
                    setCoApplicantOccupationEmployerWorkAddress(e.target.value)
                  }
                  aria-label="input Co-Applicant's Occupation, Employer, and Work Address" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you work from home?*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedWorkFromHome}
                  onChange={(e) => setSelectedWorkFromHome(e.target.value)}
                  name="WorkFromHome"
                  id="WorkFromHome"
                  required
                  className="w-50"
                  aria-label="Work From Home"
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="sometimes">Sometimes</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Names and Ages of Children in Your Home*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputNameAgeChildren"
                  value={nameAgeChildren}
                  placeholder=""
                  onChange={(e) => setNameAgeChildren(e.target.value)}
                  aria-label="input Names and Ages of Children in Your Home" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Is anyone in your home allergic to animals?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedAllergic}
                  onChange={(e) => setSelectedAllergic(e.target.value)}
                  name="Allergic"
                  id="Allergic"
                  required
                  className="w-50"
                  aria-label="Allergic"
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputAllergicExplain"
                  value={allergicExplain}
                  placeholder=""
                  onChange={(e) => setAllergicExplain(e.target.value)}
                  aria-label="input Allergic Explanation" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Is everyone in your home in agreement about adopting a pet?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedAgreementAdoptingPet}
                  onChange={(e) =>
                    setSelectedAgreementAdoptingPet(e.target.value)
                  }
                  name="AgreementAdoptingPet"
                  id="AgreementAdoptingPet"
                  required
                  className="w-50"
                  aria-label="Agreement Adopting Pet" // for screen reader
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputAgreementExplain"
                  value={agreementExplain}
                  placeholder=""
                  onChange={(e) => setAgrimentExplain(e.target.value)}
                  aria-label="input Agreement Explanation" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Who will be responsible for the grooming, housebreaking, and
                training of this pet?*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputResponsibleGroomingTrainingPerson"
                  value={responsibleGroomingTrainingPerson}
                  placeholder=""
                  onChange={(e) =>
                    setResponsibleGroomingTrainingPerson(e.target.value)
                  }
                  aria-label="input Who will be responsible for the grooming, housebreaking, and training of this pet?" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Does anyone in your home fear animals?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedFearAnimals}
                  onChange={(e) => setSelectedFearAnimals(e.target.value)}
                  name="FearAnimals"
                  id="selectFearAnimals"
                  required
                  className="w-50"
                  aria-label="Fear Animals" // for screen reader
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputFearAnimalsExplain"
                  value={fearAnimalsExplain}
                  placeholder=""
                  onChange={(e) => setFearAnimalsExplain(e.target.value)}
                  aria-label="input Fear Animals Explanation" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are you familiar with animal regulations in your area?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedAreaAnimalRegulation}
                  onChange={(e) =>
                    setSelectedAreaAnimalRegulation(e.target.value)
                  }
                  name="AreaAnimalRegulation"
                  id="selectAreaAnimalRegulation"
                  required
                  className="w-50"
                  aria-label="Do you familiar with Area Animal Regulation" // for screen reader
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
              <Form.Group>
                <Form.Select
                  value={selectedOwnOrRentHome}
                  onChange={(e) => setSelectedOwnOrRentHome(e.target.value)}
                  name="OwnOrRentHome"
                  id="selectOwnOrRentHome"
                  required
                  className="w-50"
                  aria-label="Own Or Rent Home" // for screen reader
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
                and phone number:*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputManagementCompanyInfo"
                  value={managementCompanyInfo}
                  placeholder=""
                  onChange={(e) => setManagementCompanyInfo(e.target.value)}
                  aria-label="input Management Company Info" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are you planning to move in the near future?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedPlanningToMove}
                  onChange={(e) => setSelectedPlanningToMove(e.target.value)}
                  name="PlanningToMove"
                  id="selectPlanningToMove"
                  required
                  className="w-50"
                  aria-label="input Planning To Move" // for screen reader
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputHomeDescription"
                  value={homeDescription}
                  placeholder=""
                  onChange={(e) => setHomeDescription(e.target.value)}
                  aria-label="input Home Description" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you have a yard?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                {/* <Form.Group controlId="formSelect09"> */}
                <Form.Select
                  value={selectedHaveAYard}
                  onChange={(e) => setSelectedHaveAYard(e.target.value)}
                  // onChange={handleSelectHaveAYardChange}
                  name="HaveAYard"
                  id="selectHaveAYard"
                  required
                  className="w-50"
                  aria-label="Have A Yard" // for screen reader
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputFenceHigh"
                  value={fenceHigh}
                  placeholder=""
                  onChange={(e) => setFenceHigh(e.target.value)}
                  aria-label="input Fence High" // for screen reader
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Tell us briefly, in your own words, why you want to bring a pet
                into your home:*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputReasonOfAdoption"
                  value={reasonOfAdoption}
                  placeholder=""
                  onChange={(e) => setReasonOfAdoption(e.target.value)}
                  aria-label="input Reason Of Adoption" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you already have a pet(s) in your home?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedAlredyHavePets}
                  onChange={(e) => setSelectedAlredyHavePets(e.target.value)}
                  name="AlredyHavePets"
                  id="selectAlredyHavePets"
                  required
                  className="w-50"
                  aria-label="Do you already have a pet(s)" // for screen reader
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
              <p>If yes, what kind and how old?*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputKindAgeExistingPet"
                  value={kindAgeExistingPet}
                  placeholder=""
                  onChange={(e) => setKindAgeExistingPet(e.target.value)}
                  aria-label="what kind and how old?" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Are all your current pets spayed/neutered?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedSprayedNeutered}
                  onChange={(e) => setSelectedSprayedNeutered(e.target.value)}
                  name="SprayedNeutered"
                  id="selectSprayedNeutered"
                  required
                  className="w-50"
                  aria-label="Are all your current pets spayed/neutered?" // for screen reader
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
              <Form.Group>
                <Form.Select
                  value={selectedPetAGift}
                  onChange={(e) => setSelectedPetAGift(e.target.value)}
                  name="PetAGift"
                  id="selectPetAGift"
                  required
                  className="w-50"
                  aria-label="Is the pet you are applying for, going to be a gift?" // for screen reader
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
              <p>If no one is home, where will the pet be kept?*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputKeptPetAlone"
                  value={keptPetAlone}
                  placeholder=""
                  onChange={(e) => setKeptPetAlone(e.target.value)}
                  aria-label="input Kept Pet Alone" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                How many hours during a typical day will the pet be left alone?*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputHowLongPetLeftAlone"
                  value={howLongPetLeftAlone}
                  placeholder=""
                  onChange={(e) => setHowLongPetLeftAlone(e.target.value)}
                  aria-label="input How Long Pet Left Alone" // for screen reader
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                If you can no longer care for pet , who will contact our rescue
                to return pet? Please include their name, address, and phone
                number.*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputReturnPetPerson"
                  value={returnPetPerson}
                  placeholder=""
                  onChange={(e) => setReturnPetPerson(e.target.value)}
                  aria-label="input How Long Pet Left Alone" // for screen reader
                  rows={3}
                  required
                />
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
              <Form.Group>
                <Form.Select
                  value={selectedVetCare}
                  onChange={(e) => setSelectedVetCare(e.target.value)}
                  name="VetCare"
                  id="selectVetCare"
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
              <Form.Group>
                <Form.Select
                  value={selectedFinancialResponsibilities}
                  onChange={(e) =>
                    setSelectedFinancialResponsibilities(e.target.value)
                  }
                  name="FinancialResponsibilities"
                  id="selectFinancialResponsibilities"
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
              <Form.Group>
                <Form.Select
                  value={selectedHireProfTrainer}
                  onChange={(e) => setSelectedHireProfTrainer(e.target.value)}
                  name="HireProfTrainer"
                  id="selectHireProfTrainer"
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
              <Form.Group>
                <Form.Select
                  value={selectedPetsInThePast}
                  onChange={(e) => setSelectedPetsInThePast(e.target.value)}
                  name="PetsInThePast"
                  id="PetsInThePast"
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputPetsInThePastInfo"
                  value={petsInThePastInfo}
                  placeholder=""
                  onChange={(e) => setPetsInThePastInfo(e.target.value)}
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>How many years did you own your pet(s)?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputPetsInThePastPeriod"
                  value={petsInThePastPeriod}
                  placeholder=""
                  onChange={(e) => setPetsInThePastPeriod(e.target.value)}
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have any of your pets ever gotten lost?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedPetsGottenLost}
                  onChange={(e) => setSelectedPetsGottenLost(e.target.value)}
                  name="PetsGottenLost"
                  id="selectPetsGottenLost"
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
              <Form.Group>
                <Form.Select
                  value={selectedPetsBeenPoisoned}
                  onChange={(e) => setSelectedPetsBeenPoisoned(e.target.value)}
                  name="PetsBeenPoisoned"
                  id="selectPetsBeenPoisoned"
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
              <Form.Group>
                {/* <Form.Group controlId="formSelect19"> */}
                <Form.Select
                  value={selectedPetHitByVehicle}
                  onChange={(e) => setSelectedPetHitByVehicle(e.target.value)}
                  name="PetHitByVehicle"
                  id="selectPetHitByVehicle"
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
              <Form.Group>
                {/* <Form.Group controlId="formSelect20"> */}
                <Form.Select
                  value={selectedGivenPetToShelter}
                  onChange={(e) => setSelectedGivenPetToShelter(e.target.value)}
                  name="GivenPetToShelter"
                  id="selectGivenPetToShelter"
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
              <p>Have you ever given a pet away to someone?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                {/* <Form.Group controlId="formSelect21"> */}
                <Form.Select
                  value={selectedGivenPetAway}
                  onChange={(e) => setSelectedGivenPetAway(e.target.value)}
                  name="GivenPetAway"
                  id="selectGivenPetAway"
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
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputGivenPetAwayExplain"
                  value={givenPetAwayExplain}
                  placeholder=""
                  onChange={(e) => setGivenPetAwayExplain(e.target.value)}
                  rows={3}
                  //required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Please provide names, phone numbers, and relationship of two
                (see vet reference note) people not related to you:*
              </p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputNotRelatedPeopleInfo"
                  value={notRelatedPeopleInfo}
                  placeholder=""
                  onChange={(e) => setNotRelatedPeopleInfo(e.target.value)}
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Vet's name, address, and phone number:*</p>
            </Col>
            <Row className="mb-3">
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  type="text"
                  id="inputVetInfo"
                  value={vetInfo}
                  placeholder=""
                  onChange={(e) => setVetInfo(e.target.value)}
                  rows={3}
                  required
                />
              </Form.Group>
            </Row>
          </Row>
          <div className="ms-5">
            <p>
              If you do not have a vet, please include three personal references
              above.
            </p>
            <p>
              I agree that if I am permitted to adopt, I will have the adoptive
              pet checked by my own veterinarian within 7 days of said adoption,
              and will provide medical care, at my own expense, as well as
              routine yearly exams for as long as I own the pet. I understand
              and agree that giving false information in response to any of the
              questions above will disqualify me from adopting a pet, and will
              nullify all adoption(s) and/or adoption agreements.
            </p>
            <Form.Group className="mb-3">
              <Form.Check
                onChange={() => setChecked(!checked)}
                type="checkbox"
                id="checkboxAgreeToTermsAndConditions"
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                checked={checked}
                required
              />
            </Form.Group>
            <div className={style.currentDate}>
              <h5>{currentDate}</h5>
            </div>
            <div className={style.confirmApplicationSubmitBtn}>
              <Button
                className="mb-5 b"
                type="submit"
                onClick={handleSubmit}
                disabled={!checked}
              >
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
