import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary'
}

export const TextInput = ({ variant, ...props }: TextInputProps) => {
  return (
    <input
      {...props}
      className="border-[0.3px] p-2 w-full border-slate-400 rounded-md focus:outline-amber-500"
    />
  )
}
