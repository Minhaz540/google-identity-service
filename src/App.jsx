import { useState } from "react";
import "./App.css";
import jwtDecode from "jwt-decode";
import User from "./components/User";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

export default function App() {
	const [user, setUser] = useState({});

	const handleLogin = (response) => {
		setUser(jwtDecode(response.credential));
	};

	const logout = () => {
		setUser({});
		googleLogout();
	};

	return (
		<>
			<nav>
				{Object.keys(user).length <= 0 && (
					<GoogleLogin
						onSuccess={(credentialResponse) => {
							handleLogin(credentialResponse);
						}}
						onError={() => {
							console.log("Login Failed");
						}}
						shape="pill"
						text="continue_with"
						auto_select
						useOneTap
					/>
				)}
			</nav>
			<main>
				{Object.keys(user).length !== 0 && <User logout={logout} userInfo={user} />}
			</main>
		</>
	);
}
