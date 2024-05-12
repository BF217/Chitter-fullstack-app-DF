[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/MNYGKdXk)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14323210&assignment_repo_type=AssignmentRepo)
# Challenge 6 - The Chitter Full Stack Challenge

```sh
  :                      :
  ::                    ::
  ::`.     .-""-.     .'::
  : `.`-._ : '>': _.-'.' :
  :`. `=._`'.  .''_.=' .':
   : `=._ `- '' -' _.-'.:
    :`=._`=.    .='_.=':
     `.._`.      .'_..'

       `-.:      :.-'
          :      :
          `:.__.:'
           :    :
          -'=  -'=
      CHITTER--CHATTER
```

## Introduction

DFCorp have decided to branch out and launch their own social media platform called Chitter. They have hired you to build the full stack of the application. The application should be a platform for registered users to post messages to a public stream.  The application will have a front end and a back end. The front end will be a single page application (SPA) and the back end will be a RESTful API, supported by a MongoDB database.

DFCorp hope that this new venture will cement their place as one of the world's leading tech companies and will help them to bring the users of their other applications together in a different way, as well as attracting new users.  They are looking for a modern, responsive, scalable and user-friendly application that will be easy to use and will be able to handle a large number of users.

## Core Features

One again, the Business Analysts have been hard at work and have come up with the following core features for the application:

- Site visitors should be able to see the latest 'Peeps' (posts to Chitter) from all users when they go to the site's homepage without having to create an account or log in
  - These should be displayed in reverse chronological order
- Users should be able to sign up to the application with their email, password, name and a username
  - The username and email should be unique
- Users should be able to log in to the application
  - This should be done using their email or username and password
  - Logged in users should be able to create and post a new 'Peep'
- 'Peeps' should have the name of the user and their user handle
- Users should be able to log out of the application
- The UI should be responsive and work well on different sized devices

> **Note:** The use of a generative AI tool to complete tasks relating to the specific requirements above is NOT allowed.  All work here should be your own.

## Additional Features

The Business Analysts have also come up with some additional features that they would like to see in the application, should time allow for you to do this:

- Logged in users should be able to reply to a 'Peep' from another user
- If a user is tagged in a 'Peep' (i.e. their username is used in the body of a 'Peep' proceeded by an `@` symbol), they should receive an email notification with a copy of the 'Peep' that they were tagged in
- User authentication should be done using JWT technology for added security
- The application should be deployed to a cloud platforms such as Netlify and Render and use a cloud database (e.g. MongoDB Atlas)

> **Note:** The use of a generative AI tool to help complete tasks relating to these further requirements is allowed but should be clearly documented.

---

## Tasks

1. Write an explanation of why DFCorp should use a single page application (SPA) for the front end of the application
   - Include a comparison of the advantages and disadvantages of using a SPA over a traditional multi-page application
   - Include a comparison of the advantages and disadvantages of using a SPA over a server-side rendered application
2. Generate user stories for the functionality in the application - these may be at an EPIC level in the first instance
   - Break down the EPIC user stories into smaller, more manageable tasks that focus on the front and back end functionality for *slices* of the application
3. For any front end user stories, create wireframes and/or mockups for the application along with the component hierarchy (you can use Miro for both of these tasks using plugins)
   - ***Note:*** For this application, DFCorp have granted you FULL creative control over the design of the application including layouts and colour schemes but they do urge you to remain focussed on the user experience and to ensure that the application is responsive and accessible
4. For any back end user stories, create a routing diagram and define any *Models* you think are necessary for the application to function
5. As much as possible, use TDD to drive the development of the application - work in slices of the application and write tests for the functionality you are working on
   - Remember to use the "Thinking in React" methodology to help you break down the development of the user interface
   - Remember to use the route-controller-service pattern to help you break down the development of the back end and to write some integration tests
6. Ensure that the application repository can clone and run locally - include a Markdown file with instructions on how to do this and with any initial usernames and passwords that can be used to log in to the application

### BONUS TASK

Deploy your front and back end applications using an online service such as Netlify and Render and use a cloud database such as MongoDB Atlas.  Include a Markdown file with instructions on how to access the deployed application.

---

## Tips

- Commit regularly to GitHub with clear commit messages - write a failing test, pass the test, commit, etc
- You should put your component hierarchies, state identification notation and test plans in the markdown file in the `docs` folder, if you decide to use some form of Scrum board to track your progress, you should include a screenshot of this in the markdown file
- Keep your frontend and backend code in the same repository, using the folders that are provided in the template and structure the folders within these in a suitable manner

> There are a large number of examples of Twitter clones on the internet.  Do not be tempted to simply follow one of these and submit that - these examples are unlikely to meet the requirements of the challenge fully and likely to introduce functionality that has not been asked for!  Often, they do not provide the documentation that you need for submission either and use different technologies to those that have been covered in the Academy.

---

## Grading Criteria

## Digital Futures Software Engineering Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Software Engineering Progression Management framework:

---

### Writes software that meets a user’s functional and non-functional requirements

|               | Description                                                                                                                                                                                                         | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| ***Level 3*** | The engineer can code a solution that functionally and non-functionally meets requirements for **several simple** requirements                                                                                      | Code submitted (*Core features fully implemented* ) |
| ***Level 3*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **refactor** code | Code submitted and Markdown file in `docs` folder |
| ***Level 4*** | The engineer can code a solution that functionally and non-functionally meets requirements for a *small number* of ***complex*** requirements (e.g. requirements requiring multiple functions or breaking down to fulfil)          | Code submitted (*some/all additional features implemented*) |
| ***Level 4*** | The engineer can code a solution that functionally and non-functionally meets requirements and can participate in group reviews of code identifying opportunities to make it more efficient and/or cleaner with the help of a Generative AI tool where appropriate | Code review issues in GitHub |
| ***Level 5*** | The engineer can code a solution that functionally and non-functionally meets requirements for a **number** of **complex** requirements | Code structure - separate servers for authentication and functionality |

---

### Can interpret business requirements into coding requirements
  
|               | Description                                                                                                                                                                                                  | Where assessed?                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------- |
| ***Level 1*** | The engineer can create **simple user stories** from user requirements (i.e. clearly defined story using “As a”, “Able to”, “So that” or “Given/When/Then” structure that could be solved using simple code) | Markdown file in `docs` folder  |
| ***Level 3*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***simple*** user stories | Markdown file in `docs` folder and code submitted (*Some of core features implemented*) |
| ***Level 4*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***moderately complex*** user stories (i.e. user stories that require multiple objects/domain models to fulfil) | Markdown file in `docs` folder and code submitted (*Core features fully implemented*) |
| ***Level 5*** | The engineer can create **routing diagrams** and/or apply object-oriented principles in them for ***complex*** user stories (i.e. user stories that require multiple objects/domain models and/or breaking down further to fulfil) | Markdown file in `docs` folder and code submitted (*Additional features attempted with some success*) |

---

### Develop code through Test-Driven Development and/or Behaviour Driven Development

|               | Description                                                                                                                                                                                                 | Where assessed?                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| ***Level 2*** | The engineer can write **tests** and/or **working code** that demonstrates that the **TDD process** has been followed through a commit history with clear commit messages                                   | Code submitted - GitHub commit history |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that pass covering the **main functionality** of the code using a standard, **third-party** testing framework | Code submitted |
| ***Level 3*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write test cases and/or code for tests | Code submitted and Markdown file in `docs` folder |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that passes tests that cover **some edge cases** of the code **that they have identified** using a standard, **third-party** testing framework | Code submitted |
| ***Level 4*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge cases** | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that passes tests that cover most **edge cases** of the code using a standard, **third-party** testing framework | Code submitted and Markdown file in `docs` folder |
| ***Level 5*** | The engineer can write **tests** and/or **working code** that demonstrates the use of a **Generative AI** tool to identify and write tests for **further edge or corner cases** | Code submitted and Markdown file in `docs` folder |

---

### Writes clean code

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 2***  | The engineer can write code that is **functionally correct** using applying **some** principles of clean-coding (e.g. 5-line functions, no nested loops or conditional statements)                                | Code submitted  |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has been made **more efficient** by a **Generative AI** tool | Code submitted and Markdown file in `docs` folder |
| ***Level 2***  | The engineer can write code that is **functionally correct** and has **demonstrated** the use of **Generative AI** to help within the **debugging** process | Code submitted and Markdown file in `docs` folder |
| ***Level 3***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **some** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 3*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **refactor** code | Code submitted and Markdown file in `docs` folder |
| ***Level 4***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to **most** of the classes/functions/methods and blocks of code | Code submitted  |
| ***Level 4*** | The engineer can write code that is **functionally correct** and can use **Generative AI** to help **document their own** or the **code of others** | Code submitted and Markdown file in `docs` folder |
| ***Level 5***  | The engineer can write code that is **functionally correct** using applying **single responsibility** and other clean-coding practices (e.g. **abstraction**) to all of the classes/functions/methods and blocks of code to create **loosely-coupled**, **highly-cohesive** code | Code submitted and Markdown file in `docs` folder |

---

#### Creating User Interfaces

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can create user interfaces that show good practice in using HTML/CSS and JavaScript | Code submitted |
| ***Level 2***  | The engineer can create user interfaces that are built in ReactJS and following the *“Thinking in React”* process to create **static** User Interfaces | Code submitted - tagged commits |
| ***Level 3***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process to create **interactive** User Interfaces | Code submitted - tagged commits |
| ***Level 4***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process that use **external APIs** to send and receive data and are **routed** appropriately | Code submitted - tagged commit |
| ***Level 5***  | The engineer can create user interfaces that are built *and tested* in ReactJS and following the *“Thinking in React”* process that are **routed** appropriately | Code submitted - tagged commit |

---

### Creates Backend Services meeting requirements

|                | Description                                                                                                                                                                                                       | Where assessed? |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| ***Level 1***  | The engineer can create backend service that can handle **simple requests** with **simple responses** | Code submitted  |
| ***Level 2***  | The engineer can create backend service that can handle **different request types** to the same route, **send appropriate responses** and have logic that is tested | Code submitted  |
| ***Level 3***  | The engineer can create backend service that can handle **different request types** to similar routes and **interface** with a **database** | Code submitted  |
| ***Level 3***  | The engineer can create backend service that can send **appropriate responses** that are **tested** | Code submitted  |
| ***Level 4***  | The engineer can create backend service that can handle **different request types** to similar routes, carrying out *validation* and *verification* of *request data* | Code submitted  |
| ***Level 4***  | The engineer can create backend service that return **response objects** with *appropriate status codes* and *data* using a **service-controller** architecture | Code submitted  |
| ***Level 5***  | The engineer can create backend service that can handle and ***authenticate*** requests to **complex** routes | Code submitted  |

---

---

## Digital Futures Professional Skills Progression Management Framework

In this Challenge, you will have the opportunity to demonstrate the following competencies from the Professional Skills Progression Management framework:

---

### Communications

|               | Description                                                                                            | Where assessed?                |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------ |
| ***Level 1*** | Can express themselves fluently in both verbal and written English                                     | Markdown file in `docs` folder |
| ***Level 1*** | Demonstrates attentive listening                                                                       | During assignment introduction |
| ***Level 2*** | Convey technical information to technical stakeholders in both verbal and written forms                | Markdown file in `docs` folder |
| ***Level 2*** | Creates content to a professional standard that is concise, well-structured, and grammatically correct | Markdown file in `docs` folder |
| ***Level 3*** | Articulates complex technical concepts with clarity and precision across both verbal and written forms. | Markdown file in `docs` folder |

---

### Professional Development (Assessed after submission via Self-Review)

|               | Description                                                                                                    | Where assessed?                  |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| ***Level 1*** | Demonstrates ability to listen to and act on constructive feedback or new ideas from others | SMART Goal Review |
| ***Level 2*** | Constructs SMART goal based on their identified areas of improvement | SMART goal review |
| ***Level 2*** | Achieves a self-made SMART goal | Previous SMART goal review |
| ***Level 3*** | Demonstrates consistency in achieving small to medium (<2 weeks) SMART goals (x3 goals)  | SMART Goal review |
| ***Level 3*** | Provides constructive input to peers and can communicate feedback in a supportive and helpful manner | Peer review comments |
| ***Level 3*** | Demonstrates ability to experiment with new techniques or approaches that work best for them | In code - Testing; In docs - Component Hierarchies |

---

### Business Awareness

|               | Description                                                                                                                                  | Where assessed?                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ***Level 1*** | Recognises importance of customer/stakeholder-centricity                                                                                     | Markdown file in `docs` folder                     |
| ***Level 2*** | Applies basic requirement elicitation techniques and can gather and document simple requirements that align towards the business’ objectives | Markdown file in `docs` folder                     |
| ***Level 3*** | Creates clear project documentation detailing project objectives, approach and results                                                       | Markdown file in `docs` folder and in code files   |
| ***Level 3*** | Applies prioritisation techniques to ensure resource efficiency and project alignment within timescales and business objectives              | Markdown file in `docs` folder (Trello screenshot) |

---

### Adaptability

|               | Description                                                                                                             | Where assessed?                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| ***Level 1*** | Individual may notice when processes, procedures, or tasks are altered but may not be entirely comfortable with changes | Markdown file in `docs` folder                   |
| ***Level 2*** | Understands fundamental Agile terms, such as User Stories, Scrum, Kanban, and the Agile Manifesto                       | Project files and Markdown file in `docs` folder |
| ***Level 3*** | Demonstrates experimentation with different approaches, tools, or methods                                               | Project files and Markdown file in `docs` folder |

---

## Submission

Your Challenge attempt should be submitted via commits to the forked project from GitHub Classroom.  Your trainer will have supplied you with the appropriate link to do access this, you need to take no further action on this platform.  To indicate that you have completed the Challenge, you should you the Assignment Submission link in the Challenge course for your Cohort on Noodle.  The Progression Management Frameworks will be assessed via a marking rubric in Noodle and you will be able to see how you performed in each competency.  Upload any ***`.env`*** files that are not included in your repository to Noodle with your submission.

You are not permitted to collaborate with anyone to complete this challenge.  You should complete the *Core Functionality* using traditional skills, knowledge and understanding of software engineering and all code submitted for this should be your own.  You may use a *Generative AI tool* to help you complete the *Additional Functionality* but this should be clearly documented.

---

## Feedback

After submission of your challenge attempt, your trainer will record and submit feedback in Noodle and/or via GitHub for comments in your code .  You will then be able to view this feedback via Noodle and your GitHub account.

Your trainer will also provide general feedback to the cohort via the Discord channel.

---
