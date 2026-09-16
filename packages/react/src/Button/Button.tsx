import type { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  let buttonClassList = ''
  if (variant === 'primary') {
    buttonClassList =
      'p-2 rounded-md bg-amber-500 text-white cursor-pointer text-xs'
  }
  if (variant === 'secondary') {
    buttonClassList =
      'p-2 rounded-md bg-green-500 text-white cursor-pointer text-xs'
  }
  if (variant === 'danger') {
    buttonClassList =
      'p-2 rounded-md bg-red-500 text-white cursor-pointer text-xs'
  }

  return (
    <button {...props} data-variant={variant} className={buttonClassList}>
      {children}
    </button>
  )
}
