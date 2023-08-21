interface CounterProps {
	className?: string;
}

export const Counter = (props: CounterProps) => {
	const { className } = props;
	return <div>Counter</div>;
};

export default Counter;
