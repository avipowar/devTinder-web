# devTinder-web

# devTinder UI Part : 1

    - Create Vite web-Project
    - remove unecceray code
    - and initialize git to the project

    - Install tailwind in my project
    - SetUp the tailwind

    - Install daisy-Ui
    - Make navbar component in app.jsx file

    - Make Navbar Component in separate file => Navbar.jsx

    - create component folder => inside that i make new component
    - we create routing in my app
    - for that we install react-router-dom => this gives us => (BrowserRouter , Routes , Route, Outlet)

    - Create Footer Component

# devTinder UI Part : 2

    - Make Login Page Inside => Login Component
    - make api call with => Login User => get back the res => user info
    - install axios => for making api call and get back the response

    - install in backend => cors
    - set cookie in browser successfully for that we add cors configuration in backend
    - and also add withcredintial => true when call the login api

    - create redux store
    - install @reduxjs/toolkit react-redux
    - create store using configstore
    - provide a store to app using provider
    - create slice using createsliece
    - add this slice in store

    - now i add the data in store using hook => useDispatch

    - now i get the data from store (basically subscribe to the store) => useSelector

    - if user login successfully navigate => Feed Page
    - for that we use hook which is useNavigate

    - refactor the code add constants in separate file

# devTinder UI Part : 3

    - user is logged-out show the login page OR -> do not access other information or ROUTES
    - and also handle when user call another APIs my redux data is empty
    - so handle this problem
    - we create api call in => BODY COMPONENT => Using UseEffect

    - Create LOgout Feature => call backend APIs Which is logoOut
    - add from validation also

    - Crate Feed page Inside Profile components => call the FEED APIs
    - and i make UserCard Component for that
    - Crease feedSlice in Redux store
