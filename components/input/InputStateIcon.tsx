import theme from '@/styles/themes/default'

export function SucessIcon() {
  return (
    <svg aria-label="ok" height="16" viewBox="0 0 16 16" width="16">
      <path
        fillRule="evenodd"
        fill={theme.colors.success}
        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
      ></path>
    </svg>
  )
}

export function ErrorIcon() {
  return (
    <svg aria-label="error" height="16" viewBox="0 0 16 16" width="16">
      <path
        fillRule="evenodd"
        fill={theme.colors.error}
        d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
      ></path>
    </svg>
  )
}