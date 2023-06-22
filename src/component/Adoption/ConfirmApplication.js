import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import style from './ConfirmApplication.module.css';
import { format } from 'date-fns';
import moment from 'moment';

const ConfirmApplication = () => {
  const [validated, setValidated] = useState(true);
  const [form, setForm] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const setField = (field, value) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  //------------------------select-------------------//
  const [selectedType, setSelectedType] = useState('');
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.value);
  // };
  //------------------------input type='text'----------------------------------//
  const [petName, setPetName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [coApplicantsFirstName, setCoApplicantsFirstName] = useState('');
  const [coApplicantsLastName, setCoApplicantsLastName] = useState('');
  const [applicantAge, setApplicantAge] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
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
  const [agreement, setAgreement] = useState('');
  //--------------------------end input type='text'------------------------//
  // const [dateOfApplication, setDateOfApplication] = useState(
  //   moment().format('MM/dd/yyyy')
  // );
  // const onChangeDate = (date) => {
  //   const newDate = setDateOfApplication(
  //     moment(new Date(date.target.value)).format('MM/dd/yyyy')
  //   );
  //   setDateOfApplication(newDate);
  // };
  const currentDate = new Date().toLocaleDateString();

  //-----------------------------------------------------------------------//
  //  const form = event.currentTarget;
  // if (form.checkValidity() === false) {
  //   event.preventDefault();
  //   event.stopPropagation();
  // }
  // setValidated(true);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setIsSubmitting(true);

    // setErrors(validate(values));
    //console.log(Form);
    // console.log('Type of pet: ' + selectedType);
    // console.log('Name of pet: ' + petName);
    // console.log('First Name: ' + firstName);
    // console.log('Last Name: ' + lastName);
    // console.log('First Name of Co-Applicants: ' + coApplicantsFirstName);
    // console.log('Last Name of Co-Applicants: ' + coApplicantsLastName);
    // console.log('Age of Applicant: ' + applicantAge);
    // console.log(
    //   'Address: ' + streetAddress + ' ' + city + ' ' + state + ' ' + zip
    // );
    // console.log('Phone Number: ' + phoneNumber);
    console.log('E-mail Address: ' + emailAddress);
    // console.log('Occupation and Employer: ' + occupationAndEmployer);
    // console.log('Work Address: ' + workAddress);
    // console.log(
    //   'Co-Applicant`s Occupation, Employer, and Work Address: ' +
    //     coApplicantOccupationEmployerWorkAddress
    // );
    // console.log('Do you work from home?: ' + selectedWorkFromHome);
    // console.log('Names and Ages of Children in Your Home: ' + nameAgeChildren);
    // console.log(
    //   'Is anyone in your home allergic to animals?: ' + selectedAllergic
    // );
    // console.log('If yes, explain: ' + allergicExplain);
    // console.log(
    //   'Is everyone in your home in agreement about adopting a pet?: ' +
    //     selectedAgreementAdoptingPet
    // );
    // console.log('If no, explain: ' + agreementExplain);
    // console.log(
    //   'Who will be responsible for the grooming, housebreaking, and training of this pet?: ' +
    //     responsibleGroomingTrainingPerson
    // );
    // console.log(
    //   'Does anyone in your home fear animals?: ' + selectedFearAnimals
    // );
    // console.log('If yes, explain: ' + fearAnimalsExplain);
    // console.log(
    //   'Are you familiar with animal regulations in your area? ' +
    //     selectedAreaAnimalRegulation
    // );
    // console.log('Do you own or rent your home? ' + selectedOwnOrRentHome);
    // console.log(
    //   'Please list management company`s or landlord`s name, address, and phone number: ' +
    //     managementCompanyInfo
    // );
    // console.log(
    //   'Are you planning to move in the near future? ' + selectedPlanningToMove
    // );
    // console.log('Please briefly describe your home: ' + homeDescription);
    // console.log('Do you have a yard? ' + selectedHaveAYard);
    // console.log('If yes, is it fenced? How high is the fence? ' + fenceHigh);
    // console.log(
    //   'Tell us briefly, in your own words, why you want to bring a pet into your home: ' +
    //     reasonOfAdoption
    // );
    // console.log(
    //   'Do you already have a pet(s) in your home? ' + selectedAlredyHavePets
    // );
    // console.log('If yes, what kind and how old? ' + kindAgeExistingPet);
    // console.log(
    //   'Are all your current pets spayed/neutered? ' + selectedSprayedNeutered
    // );
    // console.log(
    //   'Is the pet you are applying for, going to be a gift? ' + selectedPetAGift
    // );
    // console.log(
    //   'If no one is home, where will the pet be kept? ' + keptPetAlone
    // );
    // console.log(
    //   'How many hours during a typical day will the pet be left alone? ' +
    //     howLongPetLeftAlone
    // );
    // console.log(
    //   'If you can no longer care for pet , who will contact our rescue to return pet? Please include their name, address, and phone number: ' +
    //     returnPetPerson
    // );
    // console.log(
    //   'Should your adopted pet develop special needs over time, will you still keep this pet, get proper veterinary care and follow your vet`s guidelines, including whatever treatments/medications/special foods are required? ' +
    //     selectedVetCare
    // );
    // console.log(
    //   'Will you assume all financial responsibilities for the pet you adopt, including inoculations, regular veterinary care, good quality food, licensing, ID tag, dog bed, leash, collar, etc.? ' +
    //     selectedFinancialResponsibilities
    // );
    // console.log(
    //   'Are you willing to hire a professional trainer to correct any behavioral issues that arise? ' +
    //     selectedHireProfTrainer
    // );
    // console.log('Have you had pets in the past? ' + selectedPetsInThePast);
    // console.log('If yes, please tell us about them: ' + petsInThePastInfo);
    // console.log(
    //   'How many years did you own your pet(s)? ' + petsInThePastPeriod
    // );
    // console.log(
    //   'Have any of your pets ever gotten lost? ' + selectedPetsGottenLost
    // );
    // console.log(
    //   'Have any of your pets ever been poisoned? ' + selectedPetsBeenPoisoned
    // );
    // console.log(
    //   'Has any pet in your care ever been hit by a vehicle? ' +
    //     selectedPetHitByVehicle
    // );
    // console.log(
    //   'Have you ever given a pet to a shelter? ' + selectedGivenPetToShelter
    // );
    // console.log(
    //   'Have you ever given a pet away to someone? ' + selectedGivenPetAway
    // );
    // console.log(
    //   'If you`ve given away a pet in the past, please explain: ' +
    //     givenPetAwayExplain
    // );
    // console.log(
    //   'Please provide names, phone numbers, and relationship of two (see vet reference note) people not related to you: ' +
    //     notRelatedPeopleInfo
    // );
    // console.log('Vet`s name, address, and phone number: ' + vetInfo);
    //console.log(currentDate);

    //---------------------clear the forms--------------------------/
    setSelectedType('');
    setPetName('');
    setFirstName('');
    setLastName('');
    setCoApplicantsFirstName('');
    setCoApplicantsLastName('');
    setApplicantAge('');
    setStreetAddress('');
    setCity('');
    setState('');
    setZip('');
    setPhoneNumber('');
    setEmailAddress('');
    setOccupationAndEmployer('');
    setWorkAddress('');
    setCoApplicantOccupationEmployerWorkAddress('');
    setSelectedWorkFromHome('');
    setNameAgeChildren('');
    setSelectedAllergic('');
    setAllergicExplain('');
    setSelectedAgreementAdoptingPet('');
    setAgrimentExplain('');
    setResponsibleGroomingTrainingPerson('');
    setSelectedFearAnimals('');
    setFearAnimalsExplain('');
    setSelectedAreaAnimalRegulation('');
    setSelectedOwnOrRentHome('');
    setManagementCompanyInfo('');
    setSelectedPlanningToMove('');
    setSelectedHaveAYard('');
    setFenceHigh('');
    setReasonOfAdoption('');
    setSelectedAlredyHavePets('');
    setKindAgeExistingPet('');
    setSelectedSprayedNeutered('');
    setSelectedPetAGift('');
    setKeptPetAlone('');
    setHowLongPetLeftAlone('');
    setReturnPetPerson('');
    setSelectedVetCare('');
    setSelectedFinancialResponsibilities('');
    setSelectedHireProfTrainer('');
    setSelectedPetsInThePast('');
    setPetsInThePastInfo('');
    setPetsInThePastPeriod('');
    setSelectedPetsGottenLost('');
    setSelectedPetsBeenPoisoned('');
    setSelectedPetHitByVehicle('');
    setSelectedGivenPetToShelter('');
    setSelectedGivenPetAway('');
    setGivenPetAwayExplain('');
    setNotRelatedPeopleInfo('');
    setVetInfo('');
    // setDateOfApplication('');
  };
  //-----------------------------end clear the forms-------------------//

  return (
    <>
      <Container style={{ width: '80%' }}>
        <h1 className="text-center mt-5 mb-5">Adoption Application</h1>
        <Form
          // noValidate
          // validated={validated}
          // method="post"
          onSubmit={handleSubmit}
        >
          <Row xs={1} md={1} lg={2} xl={2} className="ms-1 me-1">
            <Col md={8}>
              <p>Type of pet</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                <Form.Select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  name="PetType"
                  id="selectPetType"
                  required
                  className="w-50"
                  aria-label="Pet Type" // for screen reader
                >
                  <option value="" disabled>
                    Please select
                  </option>
                  <option value="cat">Cat</option>
                  <option value="dog">Dog</option>
                </Form.Select>
              </Form.Group>
            </Row>
            {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text> */}
            <Col md={3}>Name of pet</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  // onChange={(e) => setPetName(e.target.value)}
                  id="inputPetName"
                  aria-label=" Input Pet Name" // for screen reader
                  // required
                  placeholder="Name of pet"
                  // defaultValue=""
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
                // controlId="validationCustom03"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  id="inputApplicantsFirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  aria-label=" Input Applicants First Name" // for screen reader
                  // aria-describedby="firstNameOfApplicantBlock" //for screen readers
                  required
                  placeholder="First name"
                  // defaultValue=""
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                //controlId="validationCustom04"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  id="inputApplicantsLastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  aria-label="Input Applicants Last Name" // for screen reader
                  // aria-describedby="lastNameOfApplicantBlock" //for screen readers
                  required
                  placeholder="Last name"
                  // defaultValue=""
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
                //controlId="validationCustom05"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  id="inputCoApplicantsFirstName"
                  value={coApplicantsFirstName}
                  onChange={(e) => setCoApplicantsFirstName(e.target.value)}
                  aria-label=" Input Co-Applicants First Name" // for screen reader
                  // aria-describedby="firstNameOfCoApplicantBlock" //for screen readers
                  required
                  placeholder="First name"
                  // defaultValue=""
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                //controlId="validationCustom06"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  id="inputCoApplicantsLastName"
                  value={coApplicantsLastName}
                  onChange={(e) => setCoApplicantsLastName(e.target.value)}
                  aria-label=" Input Co-Applicants Last Name" // for screen reader
                  // aria-describedby="lastNameOfCoApplicantBlock" //for screen readers
                  required
                  placeholder="Last name"
                  // defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Age of Applicant</p>
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
                  // defaultValue=""
                />
              </Form.Group>
            </Row>
            <Col md={3}>Address</Col>
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
                  // defaultValue=""
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
            <Col md={3}>Phone Number</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Control
                  type="text"
                  id="inputPhoneNumber"
                  value={phoneNumber}
                  placeholder="Phone Number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  aria-label="input Phone Number" // for screen reader
                  required
                />
                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
              </Form.Group>
            </Row>
            <Col md={3}>E-mail Address</Col>
            <Row className="mb-3">
              <Form.Group as={Col} md="12">
                <Form.Control
                  className={`input ${errors.email && 'is-danger'}`}
                  type="text"
                  id="inputEmailAddress"
                  value={emailAddress || ''}
                  // value={emailAddress}
                  placeholder="E-mail Address"
                  onChange={(e) => setEmailAddress(e.target.value)}
                  aria-label="input E-mail Address" // for screen reader
                  required
                />
              </Form.Group>
            </Row>

            <Col md={8}>
              <p>Occupation and Employer</p>
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
              <p>Work Address</p>
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
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Do you work from home?</p>
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
              <p>Names and Ages of Children in Your Home</p>
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
                  required
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
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Who will be responsible for the grooming, housebreaking, and
                training of this pet?
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
                  required
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
                and phone number:
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
                  required
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
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Tell us briefly, in your own words, why you want to bring a pet
                into your home:
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
              <p>If yes, what kind and how old?</p>
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
                {/* <Form.Group controlId="formSelect11"> */}
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
              <p>If no one is home, where will the pet be kept?</p>
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
                How many hours during a typical day will the pet be left alone?
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
                number.
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
                {/* <Form.Group controlId="formSelect13"> */}
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
                {/* <Form.Group controlId="formSelect14"> */}
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
                {/* <Form.Group controlId="formSelect15"> */}
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
                {/* <Form.Group controlId="formSelect16"> */}
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
                  required
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
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>Have any of your pets ever gotten lost?</p>
            </Col>
            <Row className="mb-3">
              <Form.Group>
                {/* <Form.Group controlId="formSelect17"> */}
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
                {/* <Form.Group controlId="formSelect18"> */}
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
                  required
                />
              </Form.Group>
            </Row>
            <Col md={8}>
              <p>
                Please provide names, phone numbers, and relationship of two
                (see vet reference note) people not related to you:
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
              <p>Vet's name, address, and phone number:</p>
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
                onChange={(e) => setAgreement(e.target.value)}
                type="checkbox"
                id="checkboxAgreeToTermsAndConditions"
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
                // defaultChecked={false}
                checked={agreement}
                required
              />
            </Form.Group>
            {/* <Form.Group as={Col} md="2"> */}
            {/* <Form.Control
                type="date"
                id="inputDate of Application"
                value={dateOfApplication}
                // placeholder=""
                onChange={(e) => onChangeDate(e)}
                required
                className="mb-3"
              /> */}
            <div className={style.currentDate}>
              <h5>{currentDate}</h5>
            </div>
            {/* </Form.Group> */}
            <div className={style.confirmApplicationSubmitBtn}>
              <Button
                className="mb-5 b"
                type="submit"
                onClick={handleSubmit}
                disabled={!agreement}
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
