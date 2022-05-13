# RT Challenge Reflection / Approach

## **What We’re Looking For:**

- Does the app meet the required specs?
  - Yes, I believe I've covered all the 'Review Detail Page Specs' along with any functionality associated with the requirements.
  - For Stretch Specs, I did include some Unit & Integration tests, but will say that the integration tests could definitely use some more work.
- Is the UI intuitive and well designed?
  - I believe so, navigating throughout the UI is fairly seamless, and any additional designs incorporated are consistent with the current theme of the designs given. Additionally, the responsiveness of the UI allows for interaction on any screen size.
- What technologies (outside of React) did you use and can they be justified?
  1. Sass / styled-components: For this application I used a combination of Sass & styled-components. The motivation behind using these two technologies was to leverage styled-component definitions as wrappers for the React components, while using Sass for styling the children elements (i.e. more specific styling). There were many opportunities where I could utilize the props feature with styled-components to make styling more re-usable. Additionally, I incorporated a BEM naming methodology with Sass to clearly demonstrate a hierarchy between HTML elements as well as to ensure that class names are unique to prevent overriding of styles. A BEM naming methodology also allows me to leverage nesting within my sass files to make it more readable.
  2. React Router: Incorporating React Router allowed me to handle dynamic routing efficiently & seamlessly. Because each review is unique and should be mapped to a separate review detail's page, I figured leveraging this library was an optimal solution. Moreover, if this application were to grow in the future as a single page application, adding additional routes would be a seamless process.
  3. Jest + RTL: Before this challenge, I've only experienced testing with Jest + Enzyme. The issue that I found with Enzyme though is that we typically test through accessing the state and props of a React component, i.e. tests are brittle and can fail easily if the name of a state or prop variable changes (even if functionality hasn't changed). After testing out the waters, I think RTL was the better solution relative to this application. Through RTL, we're able to more easily focus on testing through the user's perspective, i.e.:
     - Viewing a list of reviews and being able to route to another page after clicking
     - Interacting with the form to create a response
- Good state management.
  - For this application, I decided to use Context to manage state. The main reasons were because this was a relatively smaller application that does not have many side effects (i.e. making multiple network requests, storing data in local storage, etc.).
  - Although Context may not be the best solution if this application were to scale, I was still able to leverage it to prevent prop drilling and subscribe to any changes that were made throughout the application.
- Good coding practices.
  - I think in terms of general coding practices, I tried to structure this project in a way that is readable, re-usable and scalable given the requirements.

<hr/>

## **Project Hierarchy:**

Below is the way I structured my project files in the src/ directory. I've included brief descriptions to help explain some of the folders/files and tried to illustrate how they relate to each other.

```js
// Components
/src/components
|-  reviews/   // Review related component files
|   |-  ReviewsList.jsx   // Initial landing page where we are fetching our data from Context
|   |   |-  ReviewItem.jsx   // Each review is mapped to a ReviewItem
|   |   |   |-  ReviewCard.jsx   // Re-usable card component to display content of review (also used in ReviewDetail)
|   |-  ReviewDetail.jsx   // Parent component for a review's response
|   |   |-  ReviewResponse.jsx   // Controls content displayed below the review's complete details
|   |   |   |-  ReviewForm.jsx   // Form to add a response to a review
|
|   share/
|   |-  NavigationBar.jsx   // Header component displayed on every page
|
|
// Context
/src/context
|-  reviews-context.jsx   // Creates Reviews Context Provider. Initial state & methods for user interaction defined here.
|
|
// Styles
// Note: The motivation behind the _all.scss is to keep our global.scss file dry
/src/styles
|-  abstracts/   // The idea is to put re-usable styling across the application in this folder
|   |-  _all.scss   // Imports all partial files in this directory
|   |-  _classes.scss   // Misc. styling not related to a hierachy
|   |-  _placeholders.scss   // Re-usable styling definitions that can be extended
|   |-  _variables.scss   // Define common css across app. (i.e. colors, themes, etc.)
|
|   components/
|   |-  reviews/   // Mapped to reviews/ component directory (mainly nested styling involved here)
|   |   |-  _review-card.scss   // Mapped to ReviewCard.jsx
|   |   |-  _review-form.scss   // Mapped to ReviewForm.jsx
|   |   |-  _review-response.scss   // Mapped to ReviewResponse.jsx
|   |-  share/   // Mapped to share/ component directory
|   |   |-  _navigation-bar.scss   // Mapped to NavigationBar.jsx
|   |-  _all.scss   // Imports all partial files in reviews/ and share/
|
|   global.scss   // Imports the _all.scss partial files. Only this global file is imported into the entry point of our app.
|   styledComponents.jsx   // Contains all styled-component definitions
|
|
// Testing
src/_tests_
|-  components/
|   |-  ReviewResponse.test.js   // Tests related to the response/form portion of the Review Detail Page
|
|   share/
|   |-  NavigationBar.test.js   // Tests our header is rendering properly
|
|   App.test.js   // Tests Reviews are rendering properly + user navigation
|
|
// Images
/src/images   // Images used to help build our UI
|...
|
```
