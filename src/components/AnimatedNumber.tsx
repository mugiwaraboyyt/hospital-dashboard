import { useEffect, useState } from "react";

interface AnimatedNumberProps {
	value: number;
	duration?: number; // Duration in milliseconds
}
export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 1000 }) => {
	const [currentValue, setCurrentValue] = useState(0);

	useEffect(() => {
		const start = Date.now();
		const increment = value / duration;

		const animate = () => {
			const elapsed = Date.now() - start;
			const nextValue = Math.min(value, Math.ceil(increment * elapsed));

			if (nextValue < value) {
				setCurrentValue(nextValue);
				requestAnimationFrame(animate);
			} else {
				setCurrentValue(value);
			}
		};

		animate();
	}, [value, duration]);

	return <span>{currentValue}</span>;
};
