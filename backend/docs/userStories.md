# User Stories

---

## User Story 1

---

### Title: Fetch latest Peeps API

### Priority: High

### User: Application

---

### User story:

## As the application, I need to fetch the latest peeps from the database, so they can be displayed on the homepage.

### Tasks:

- Create an API endpoint to fetch Peeps in reverse chronological order.

---

### Acceptance criteria:

- An API endpoint exists that returns the latest Peeps.

---

## User Story 2

---

### Title: Implement User Registration Endpoint

### Priority: High

### User: Application

---

### User story:

## As the application, I need to register new users, ensuring their email and username are unique.

### Tasks:

- Create an API endpoint for user registration.
- Validate the uniqueness of email and username.
- store user details in the database.

---

### Acceptance criteria:

- Users can register through the API.
- Email and username uniqueness is enforced.

---

## User Story 3

---

### Title: Implement user authentication endpoint

### Priority: High

### User: Application

---

### User story:

## As the application, I need to authenticate users based on their email/username and password.

### Tasks:

- Create an API for user authentication.
- Implement JWT token generation for authenticated sessions.

---

### Acceptance criteria:

- Users can authenticate via the API.
- JWT tokens are issued upon successful authentication.

---

## User Story 4

---

### Title: Implement create Peep endpoint

### Priority: High

### User: Application

---

### User story:

## As the application, I need to allow authenticated users to post new Peeps.

### Tasks:

- Create an API endpoint for posting new Peeps.
- Associate Peeps with the authenticated user's account.

---

### Acceptance criteria:

- Authenticated users can post new Peeps through the API.

---

## User Story 5

---

### Title: Implement reply and notification mechanism.

### Priority: Medium

### User: Application

---

### User story:

## As the application, I need to allow users to reply to Peeps and notify tagged users.

### Tasks:

- Implement a reply feature for Peeps in the database.
- Detect tags in Peeps and send email notifications to tagged users.

---

### Acceptance criteria:

- Users can reply to Peeps.
- Tagged users receive email notifications.

---
