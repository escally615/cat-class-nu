// Filename - App.js

import React from "react";
import Navbar from "./components/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import SurveyStudent from "./pages/SurveyStudent";
import SurveyTutor from "./pages/SurveyTutor";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/find-a-tutor" element={<SurveyStudent />} />
				<Route
					path="/become-a-tutor"
					element={<SurveyTutor />}
				/>
				<Route path="/faq" element={<Faq />} />
				
			</Routes>
		</Router>
	);
}

export default App;
