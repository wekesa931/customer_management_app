# CUSTOMER MANAGEMENT SYSTEM
The purpose of this project is to create an aplication that can easily manage customers by creating a div with all their details

### REACT js
I opted to use React Js framework because of:
1. The JSX feature which means we create the DOM using Javascript and different modules hence creating clean code
2. React allows us create reusable code hence we achieve more but work less
3. It creates SINGLE PAGE APPLICATIONS meaning that there is no continued page refresh making the app faster and suitable for offline use.
4. React STATE property alows us to detect changes in the application and render the DOM without refreshing the page hence we achieve more for just a liitle coding.
5. React is good for content management and its ability to create templates means that the code can be used and reused for a long time before it needs any updating
6. React allows us to use other frameworks and dependencies like BOOTSTRAP which further enhances our experience with the application and improves te quality

## Running The App Locally
1. Ensure you have installed node on your computer
2. Clone or download the code from the repository
3. Navigate to the folder where the code files are and run `npm install` on the comand prompt
4. Once the node module are installed, run `npm start` to host it on your browser

## Testing the Application
Currently the app is not running completely as it ought to. The challenges I faced include:
1. On form submission, the app is redirected to a different route hence the customer div with details does not appear. This can, however, be corrected by using `jQuery with Ajax` which I later found out and I'm working on. To temporrily manouver this problem, I hav disabled **form authentication** so that the page does no refresh.
2. Currently, only one customer can be rendered onto the dashboard. I have, however, discovered that to render more customer divs, I have to use array storage with unique keys which I'm also working on at the moment.