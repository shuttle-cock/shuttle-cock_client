import { useEffect, useState } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';

interface IEventProps<T> {
	url: string;
	onParsing?: (data: string) => T;
}

const parseData = (dataStr: string) => {
	const parts = dataStr.split(',');
	const data: any = {};
	parts.map(part => {
		const [key, value] = part.split(':');
		const trimmedKey = key.trim();
		data[trimmedKey] = Number(value.trim());
	});

	return data;
};

// const headers = {};

export const useSSE = <T>({ url, onParsing = parseData }: IEventProps<T>) => {
	const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');
	const [data, setData] = useState<T>();

	useEffect(() => {
		if (!url) return;
		let eventSource: EventSourcePolyfill | null = null;

		const closeEventSource = () => {
			if (eventSource) {
				eventSource.close();
				eventSource = null;
			}
			setStatus('closed');
		};

		const openEventSource = () => {
			eventSource = new EventSourcePolyfill(`/api/v1/${url}`, {
				heartbeatTimeout: 3600 * 1000 * 4,
				withCredentials: false
				// headers
			});

			eventSource.onopen = () => {
				setStatus('open');
			};

			eventSource.onmessage = event => {
				const parsedData = onParsing(event.data);
				setData(parsedData);
			};

			eventSource.onerror = () => {
				closeEventSource();
			};
		};

		const handleVisibilityChange = () => {
			if (document.visibilityState === 'hidden') {
				closeEventSource();
			} else {
				openEventSource();
			}
		};

		openEventSource();
		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			closeEventSource();
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	return {
		data,
		status
	};
};
