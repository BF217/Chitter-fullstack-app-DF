# Single Page Application Proposal

## Introduction

As we begin the development of Chitter, we are faced with making a decision on the choice of architecture for our front-end application. This document aims to outline the benefits and considerations of adopting a Single Page Application (SPA) model, comparing it against traditional Multi-Page Applications (MPA) and Server-Side Rendered (SSR) Applications. Our goal is to ensure we make the right architectural decision that aligns with our project goals of offering an engaging, performant and scalable user experience.

## What is a Single Page Application (SPA) ?

An SPA is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach results in a more fluid and app-like user experience, as it minimises page reloads and displays content more seamlessly.

## Advantages of SPAs

- Better user experience: SPAs offer a smoother, faster interaction since only data is exchanged with the server, not entire pages. This reduces load time and makes the application feel more responsive.
- Client-Side rendering: By leveraging the browser for page rendering, SPAs offload processing from the server, potentially reducing server load and use of bandwidth.
- Seamless integration with APIs: SPAs work well with RESTful APIs, which is a natural fit for the MERN stack. This decouples front-end from the back-end, allowing for more flexible development and scalability.

## Disadvantages of SPAs

- SEO difficulties: SPAs can rank poorly for search Engine Optimisation (SEO) due to their dynamic content loading.
- Slow initial load: The first load of an SPA can be slower than other options because the browser must download the entire application.

# SPA vs Traditional Multi-Page Application

MPAs reload the entire page and assets from the server upon each user interaction, leading to a more disjointed user experience compared to SPAs.

## Advantages of MPAs over SPAs

- SEO: MPAs score better for search engine visibility due to content being static.
- Simplicity: For small pages, MPA might offer simpler development and deployment processes.

## Disadvantages of MPAs compared to SPAs

- User experience: MPAs feel much slower and more fragmented than SPAs, with frequent full-page reloads disrupting flow of content.
- Development complexity: for large projects, MPAs can result in more complex codebases, leading to higher development costs.

# SPA vs Server-Side Rendered (SSR) Application

-SSR applications work by pre-rendering pages on the server, which can improve initial load times and SEO. However, they still need page reloads for navigating to different areas of the application, unlike SPA.

## Advantages of SPAs over SSR Applications

- Better interactivity: SPAs offer more dynamic and complex user interactions, closely resembling native desktop or mobile applications.
- Client resource utilisation: SPAs can better leverage client-side resources for rendering, potentially reducing server load.
- Statefulness: SPAs maintain state on the client side, providing a consistent user experience without needed to call the server for data.

## Disadvantages of SPAs compared to SSR Applications

- Initial load time: SSR offers fater initial page loads by sending pre-rendered HTML to the browser, which benefits users with slower internet connections.
- SEO: SSR applications offer better SEO capabilities by serving fully rendered pages to search engine crawlers.

# Conclusion

For our social media application, Chitter, adopting an SPA front-end architecture offers many advantages in terms of user experience, scalability and efficiency. This aligns with our goal to make engaging social media platform that prioritises providing a responsive user experience. While there are some challenges associated with SPAs, such as SEO and initial load performance, these can be managed through using React and following best practices. By using the MERN stack (MongoDB, Express.js, React.js and Node.js) alongside SPA archictecture, we can build a solid, user friendly application that effective delivers the requirements listed by the product owner.
