import cn from 'classnames';
import { memo } from 'react';

interface IconProps {
	className?: string;
	Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const Icon = memo((props: IconProps) => {
	const { className, Svg } = props;
	return <Svg className={cn('', {}, [className])} />;
});

export default Icon;
