import PropType from "prop-types";

export default function User({ userInfo, logout }) {
	return (
		<div>
			<img style={{ borderRadius: "50%" }} src={userInfo.picture} alt={userInfo.name} />
			<h4>Welcome, {userInfo.name}</h4>
			<button onClick={logout}>Logout</button>
		</div>
	);
}

User.propTypes = {
	userInfo: PropType.object.isRequired,
	logout: PropType.func.isRequired,
};
