import { API_URL } from "../../constants/app";
import { headersToken, headersJson } from "./requestHeaders";

export async function login(payload) {
	let res = await fetch(`${API_URL}/login`, {
		method: "POST",
		headers: headersJson(),
		body: JSON.stringify(payload),
	})
		.then((res) => res.json())
		.then((data) => {
			return data;
			// if (data.header.statusCode === 200 && data.header.result) {
			// 	return { token: data.body.accessToken };
			// }
		});
	return res;
}
export async function getUserProfile() {
	return await fetch(`${API_URL}/user/me`, {
		method: "POST",
		headers: headersToken(),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.body) {
				let menuPermission = {};
				data.body.moduleTypeList.forEach(({ name, moduleList }) => {
					let modulePermisson = {};
					moduleList.map(({ type, checked }) => (modulePermisson[type] = checked));
					menuPermission[name] = modulePermisson;
				});

				return {
					...data.body,
					photo: data.body.photo,
					menuPermission: menuPermission,
				};
			}
		});
}
export async function logout() {
	let res = await fetch(`${API_URL}/auth/logout?deviceId=1`, {
		method: "POST",
		headers: headersToken(),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.header.statusCode === 200 && data.header.result) {
				return data;
			}
		});
	return res;
}
