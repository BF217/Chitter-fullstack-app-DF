const rules = [
  {
    field: "name",
    tests: [
      {
        test: (value) => !!value.trim(),
        message: "Name is required",
      },
    ],
  },
  {
    field: "username",
    tests: [
      {
        test: (value) => !!value.trim(),
        message: "Username is required",
      },
      {
        test: (value) => /^[a-zA-Z0-9_]+$/.test(value),
        message: "Username can only contain letters, numbers, and underscores",
      },
    ],
  },
  {
    field: "email",
    tests: [
      {
        test: (value) => !!value.trim(),
        message: "Email is required",
      },
      {
        test: (value) => /\S+@\S+\.\S+/.test(value),
        message: "Email is invalid",
      },
    ],
  },
  {
    field: "password",
    tests: [
      {
        test: (value) => value.length >= 8,
        message: "Password must be at least 8 characters",
      },
      {
        test: (value) => /[A-Z]/.test(value),
        message: "Password must contain at least one uppercase letter",
      },
      {
        test: (value) => /[a-z]/.test(value),
        message: "Password must contain at least one lowercase letter",
      },
      {
        test: (value) => /[0-9]/.test(value),
        message: "Password must contain at least one number",
      },
      {
        test: (value) => /[!@#$%^&*]/.test(value),
        message:
          "Password must contain at least one special character (!@#$%^&*)",
      },
    ],
  },
  {
    field: "confirmPassword",
    tests: [
      {
        test: (value, formData) => value === formData.password,
        message: "Passwords must match",
      },
    ],
  },
  {
    field: "terms",
    tests: [
      {
        test: (value) => value,
        message: "You must agree to the terms and conditions",
      },
    ],
  },
];

const validateField = (field, value, formData) => {
  for (let rule of field.tests) {
    if (!rule.test(value, formData)) {
      return rule.message;
    }
  }
  return "";
};

export const validateForm = (formData) => {
  let valid = true;
  const errors = {};

  rules.forEach(({ field }) => {
    const value = formData[field];
    const errorMessage = validateField(
      { tests: rules.find((r) => r.field === field).tests },
      value,
      formData
    );
    if (errorMessage) {
      errors[field] = errorMessage;
      valid = false;
    }
  });

  return { valid, errors };
};
