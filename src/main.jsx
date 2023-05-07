import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const googleClientId = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId={googleClientId}>
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>
);
