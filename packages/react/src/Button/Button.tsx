import type { ButtonHTMLAttributes } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      data-variant={variant}
      style={{
        padding: '10px 16px',
        borderRadius: 6,
        border: '1px solid #ccc',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  )
}
