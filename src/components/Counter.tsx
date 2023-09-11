import { useState } from 'react';
import cls from './Counter.module.scss';

interface CounterProps {
	className?: string;
}

export const Counter = (props: CounterProps) => {
	const [count, setCount] = useState(0);
	const increment = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<h1>{count}</h1>
			<button className={cls.btn} onClick={increment}>
				increment
			</button>
		</div>
	);
};

export default Counter;
