// import DOM elements
const form = document.getElementById('mentorSignupForm'),
  fullName = document.getElementById('fullName'),
  // firstName = document.getElementById('firstName'),
  // lastName = document.getElementById('lastName'),
  email = document.getElementById('email'),
  phoneNo = document.getElementById('phoneNo'),
  track = document.getElementById('track'),
  cvLink = document.getElementById('cvLink'),
  employmentStatus = document.getElementById('employmentStatus'),
  state = document.getElementById('state'),
  country = document.getElementById('country'),
  aboutYou = document.getElementById('aboutYou'),
  submitBtn = document.getElementById('submitBtn');

// object for storing validation status (variable)
let validated = {};

// Show input error message
function showError(input, message) {
  const parent = input.parentElement;
  input.classList.add('is-invalid');
  let error = parent.querySelector('div');
  error.className = 'invalid-feedback';
  error.innerText = input.value !== '' ? message : '';
  validated[input.id] = false;
}

// clear error message
function clearError(input) {
  const parent = input.parentElement;
  input.classList.remove('is-invalid');
  input.classList.remove('is-valid');
  const error = parent.querySelector('div');
  error.innerText = '';
}

function showRequired(input, message) {
  const parent = input.parentElement;
  const error = parent.querySelector('div');
  input.classList.add('is-invalid');
  error.className = 'invalid-feedback';
  error.innerText = message;
  validated[input.id] = false;
}

// Show success outline
function showSuccess(input) {
  const parent = input.parentElement;
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  validated[input.id] = true;
}

// email validation
function checkEmail(input) {
  clearError(input);
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else if (input.value.length > 0) {
    showError(input, 'Email is not valid.');
  }
}

// full name validation
function checkFullName(input) {
  input.value = input.value.trim();
  const fullNameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+ [a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u;
  const nameWithSpaceRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+[ ]{2,}[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+$/u;
  const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð,.'-]+$/u;

  if (fullNameRegex.test(input.value)) {
    checkLength(input, 2);
  } else if (nameRegex.test(input.value) && input.value.length >= 2) {
    showError(input, 'Please enter your last name');
  } else if (nameWithSpaceRegex.test(input.value)) {
    showError(input, 'Please delete the extra whitespace');
  } else if (input.value !== '') {
    showError(input, 'Please enter a valid name');
  } else {
    clearError(input);
  }
}

// check names
function checkName(input) {
  const re = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  if (re.test(input.value)) {
    checkLength(input, 2);
  } else if (input.value !== '') {
    showError(input, 'Please enter a valid name');
  } else {
    clearError(input);
  }
}

// check phone number
function checkPhone(input) {
  const regex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  // const length = String(Number(input.value)).length;
  const length = input.value.length;
  if (length > 10 && length < 16) {
    if (!regex.test(input.value.trim())) {
      showError(input, 'Please enter a valid phone number');
      // showError(input, "Phone number must begin with 0");
    } else {
      showSuccess(input);
    }
  } else if (/\D/.test(input.value.trim())) {
    showError(input, 'Phone number must only contain digits');
  } else {
    showError(input, 'Phone number must be 11 to 15 digits');
  }
}

// link validation
function checkURL(input) {
  input.value = input.value.trim();
  const regex = /^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_=]*)?$/;

  if (!regex.test(input.value)) {
    showError(input, `Invalid URL, please begin with 'http://' or 'https://'`);
  } else {
    showSuccess(input);
  }
}

// Check Required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showRequired(input, `${getFieldName(input)} is required`);
    }
  });
}

// check input length
function checkLength(input, min, max = 30) {
  if (input.value.length < 1) {
    return;
  }
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must have at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must have less than ${max + 1} characters`
    );
  } else {
    showSuccess(input);
  }
}

// get field names from id
function getFieldName(input) {
  const fieldName = input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
  switch (fieldName) {
    case 'FullName':
      return 'Full Name';
    case 'FirstName':
      return 'First Name';
    case 'LastName':
      return 'Last Name';
    case 'CvLink':
      return 'CV Link';
    case 'EmploymentStatus':
      return 'Employment Status';
    case 'PhoneNo':
      return 'Phone Number';
    case 'AboutYou':
      return 'A Short Description';
    default:
      return fieldName;
  }
}

// event listeners
fullName.addEventListener('input', () => {
  fullName.value = fullName.value.trim();
  clearError(fullName);

  setTimeout(() => {
    checkFullName(fullName);
  }, 2000);
});

/* firstName.addEventListener('input', () => {
  firstName.value = firstName.value.trim();
  clearError(firstName);

  setTimeout(() => {
    checkName(firstName);
  }, 2000);
});

lastName.addEventListener('input', () => {
  lastName.value = lastName.value.trim();
  clearError(lastName);

  setTimeout(() => {
    checkName(lastName);
  }, 2000);
}); */

email.addEventListener('input', () => {
  email.value = email.value.trim();
  clearError(email);
  setTimeout(() => {
    if (email.value !== '') {
      checkEmail(email);
    } else {
      clearError(email);
    }
  }, 2000);
});

phoneNo.addEventListener('input', () => {
  phoneNo.value = phoneNo.value.trim();
  clearError(phoneNo);
  setTimeout(() => {
    if (phoneNo.value !== '') {
      checkPhone(phoneNo);
    } else {
      clearError(phoneNo);
    }
  }, 2000);
});

track.addEventListener('change', () => {
  clearError(track);
  showSuccess(track);
});

employmentStatus.addEventListener('change', () => {
  clearError(employmentStatus);
  showSuccess(employmentStatus);
});

cvLink.addEventListener('input', () => {
  cvLink.value = cvLink.value.trim();
  clearError(cvLink);
  setTimeout(() => {
    if (cvLink.value !== '') {
      checkURL(cvLink);
    } else {
      clearError(cvLink);
    }
  }, 2000);
});

country.addEventListener('change', () => {
  clearError(country);
  setTimeout(() => {
    checkLength(country, 3);
  }, 2000);
});

state.addEventListener('input', () => {
  state.value = state.value.trim();
  clearError(state);
  setTimeout(() => {
    checkLength(state, 3);
  }, 2000);
});

aboutYou.addEventListener('input', () => {
  aboutYou.value = aboutYou.value.trim();
  clearError(aboutYou);
  setTimeout(() => {
    if (aboutYou.value !== '') {
      showSuccess(aboutYou);
    }
  }, 2000);
});

// form submissions
form.addEventListener('submit', (event) => {
  event.preventDefault();

  checkFullName(fullName);
  // checkName(firstName);
  // checkName(lastName);
  checkEmail(email);
  checkPhone(phoneNo);
  checkURL(cvLink);

  checkRequired([
    fullName,
    // firstName,
    // lastName,
    email,
    phoneNo,
    track,
    cvLink,
    employmentStatus,
    state,
    country,
    aboutYou,
  ]);

  if (!Object.values(validated).includes(false)) {
    form.submit();
  }
});

// get countries list from API and populate select
async function getCountriesList() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');

  const data = await res.json();
  return data.sort((a, b) => {
    return a.value < b.value ? -1 : 1;
  });
}

async function fillCountries() {
  const countries = await getCountriesList();

  countries.forEach((country) => {
    // console.log(country);
    document.getElementById(
      'country'
    ).innerHTML += `<option value='${country.name.trim()}'>${country.name.trim()}</option>`;
  });
}

fillCountries();
