import "./style/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AuthProvider } from "./components/auth/AuthProvider";
import PrivateRoute from "./components/auth/PrivateRoute";

// Import routes
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/hello" component={Dashboard} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
