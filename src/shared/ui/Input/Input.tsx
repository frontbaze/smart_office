import cn from 'classnames';
import cls from './Input.module.scss';

interface InputProps {
	className: string;
	value: string | number;
	onChange: (value: string) => void;
	autofocus?: boolean;
}

export function Input(props: InputProps) {
	const { value, onChange, className, ...otherProps } = props;
    return (
        <div className={cn(cls.InputWrapper)}>
            <input  />
        </div>
    );
}
