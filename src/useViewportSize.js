import { useEffect, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";



export function useViewportSize() {
	const [ height, setHeight ] = useState(0);
	const [ width, setWidth ] = useState(0);

	useEffect(() => {
		setHeight(window.innerHeight);
		setWidth(window.innerWidth);
	}, []);

	useWindowEvent('resize', handleResize);
	function handleResize(event) {
		setHeight(event.target?.innerHeight);
		setWidth(event.target?.innerWidth);
	}

	return {height, width};
}