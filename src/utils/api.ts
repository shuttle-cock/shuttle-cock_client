import axios from 'axios';

// export const SUCCESS_RETCODE = '100';

export enum HTTP_METHOD {
	GET = 'get',
	POST = 'post',
	OPTION = 'options',
	PUT = 'put',
	PATCH = 'patch',
	DELETE = 'delete',
	HEAD = 'head'
}

export type fetcherParam = {
	path: string;
	method: HTTP_METHOD;
	headers?: any;
	data?: any;
	parameter?: any;
};

export const makeUrl = (method: HTTP_METHOD, path: string, parameter?: any): string => {
	let option = '';
	if (parameter) {
		// if (method === HTTP_METHOD.GET) {
		option = `?${new URLSearchParams(parameter)}`;
		// }
	}
	return `${path}${option}`;
};

const isNoneDataRequest = (method: HTTP_METHOD) => {
	return (
		method === HTTP_METHOD.GET ||
		method === HTTP_METHOD.DELETE ||
		method === HTTP_METHOD.HEAD ||
		method === HTTP_METHOD.OPTION
	);
};

export const fetcher = async ({ method, path, headers, data, parameter }: fetcherParam) => {
	const results = await axios[method](
		makeUrl(method, path, parameter),
		isNoneDataRequest(method) ? { headers } : data,
		{ headers }
	);
	if (results.status !== 200) throw new Error('rsFetcher - http status :' + results.status);
	if (!results.data) throw new Error('rsFetch - invalid response');
	// if (
	// 	results.data.retcode === SUCCESS_RETCODE ||
	// 	allowRetcodes?.includes(results.data.retcode) ||
	// 	allowRetcodes?.includes(results.data.resultCode)
	// ) {
	// 	return results;
	// }
	throw new Error(results.data.message);
};
