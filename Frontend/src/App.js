import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
//import LogoutPage from "./pages/LogoutPage";
//import InstructorHomePage from "./pages/InstructorHomePage";
//import ClassSessionPage from "./pages/ClassSessionPage";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import PostsPage from "./pages/PostsPage";
import AddPostPage from "./pages/AddPostPage";
import UserHomePage from "./pages/UserHomePage";

/**
 * CS-5356-TODO
 * App contains all the pages for this web application
 *
 * There are 4 pages
 * - /login
 * - /logout
 * - /instructor-home
 * - /:session-code
 *
 * When the App loads for the first time, make a
 * GET /api/user to see if the user is signed in.
 *
 * If you receive a 401, set the isSignedIn state
 * to false.
 *
 * If you receive a 200, set the isSignedIn state to true
 * and then set the user state to the user object
 * from the response of the request.
 *
 */
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  const requiresLogin = Component => {
    return isSignedIn ? Component : <Navigate to="/login" />;
  };

  useEffect(() => {
    console.log("[CS5356] Loading App for the first time");
    fetch('api/user').then(response =>{
      if (response.ok){
        response.json().then(data=>{
          setIsSignedIn(true)
          setUser(data)
          console.log(user)
        })
      }
    })
  }, []);

  return (
    <div>
        
      <Router>
        <Navbar isSignedIn={isSignedIn} user_name={user?.userId ?? null} />
        <Routes>
        <Route
            path="/signup"
            element={(<SignupPage />)}
          />
          <Route
            path="/addPost"
            element={(<AddPostPage user_name={user} />)}
          />
           <Route
            path="/userHome"
            element={(<UserHomePage user_name={user} />)}
          />
          {/*<Route
            path="/instructor-home"
            element={requiresLogin(<InstructorHomePage />)}
  />*/}
          <Route
            path="/login"
            element={
              <LoginPage
                onLogin={() => {
                  setIsSignedIn(true);
                }}
              />
            }
          />
          <Route
            path="/posts"
            element={
              <PostsPage
              user_name={user}
              />
            }
          />
          { /*<Route
            path="/:sessionCode"
            element={<ClassSessionPage isSignedIn={isSignedIn} />}
        />*/}
          { /*<Route exact path="/logout" element={<LogoutPage />} />*/}
          <Route exact path="/" element={<Home isSignedIn={isSignedIn} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
