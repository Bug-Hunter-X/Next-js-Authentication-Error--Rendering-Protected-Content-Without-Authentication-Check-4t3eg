```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext

function About() {
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/'); // Redirect to login page
    return null;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Some secret information</p>
      <p>Welcome, {user.name}!</p> {/* Display user's name */}
    </div>
  );
}

export default About;
```

```javascript
// context/AuthContext.js (example)
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // ... Authentication logic (login, logout, etc.)

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, setUser, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
```