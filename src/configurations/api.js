import token from './token';

const POST = 'POST';

const sendRequest = (url, method, data={}) => {
	const headers = { AuthToken: token };
	if (method === POST) {
		const body = new FormData();
		Object.entries(data).forEach(([key, val]) => body.append(key, val));
		return fetch(url, { method, headers, body });
	}
	return fetch(url, { headers });
}

export const getUsers = () => sendRequest('https://devza.com/tests/tasks/listusers');
export const getTasks = () => sendRequest('https://devza.com/tests/tasks/list');
export const createTask = data => sendRequest('https://devza.com/tests/tasks/create', POST, data);
export const updateTask = data => sendRequest('https://devza.com/tests/tasks/update', POST, data);
export const deleteTask = data => sendRequest('https://devza.com/tests/tasks/delete', POST, data);