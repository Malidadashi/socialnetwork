import { Routes, Route } from 'react-router-dom';

import "../src/assets/global.css";
import SignupForm from "./assets/-auth/forms/SignupForm";
import SigninForm from "./assets/-auth/forms/SigninForm"
import { Home } from "./-root/pages";
import RootLayout from "./-root/RootLayout";
import AuthLayout from "./assets/-auth/AuthLayout";

const App = () => {
  return (
    <main className="flex h-screen">

        {/* public routes */}
        <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>


      {/* private routes */}
      <Route element={<RootLayout/>}/>
      <Route index element={<Home/>}/>
      </Routes>
    </main>
  );
};

export default App;
