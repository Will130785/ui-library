import { TextareaHTMLAttributes } from 'react'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary'
}

export const TextArea = ({ variant, ...props }: TextAreaProps) => {
  return (
    <textarea
      {...props}
      className="h-50 border-[0.3px] p-2 w-full border-slate-400 rounded-md focus:outline-amber-500"
    />
  )
}
