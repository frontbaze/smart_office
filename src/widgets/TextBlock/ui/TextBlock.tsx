import cn from 'classnames';
import cls from './TextBlock.module.scss';
import { textBlocks } from '../model/textBlock';

interface TextBlockProps {
    id: number;
}

export const TextBlock = ({ id }: TextBlockProps) => {
    const textBlockIndex = textBlocks.findIndex(block => block.id === id)
    const block = textBlocks[textBlockIndex]
  return (
    <div className={cn(cls.TextBlock)}>{block.text}</div>
  )
}
