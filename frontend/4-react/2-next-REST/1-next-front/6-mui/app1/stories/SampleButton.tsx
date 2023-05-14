import { Button } from '@mui/material'

interface Props {
  readonly color?: 'primary' | 'secondary' | undefined
  readonly backgroundColor?: string
  readonly size?: 'small' | 'medium' | 'large'
  readonly label: string
  readonly onClick?: () => void
}

export const SampleButton = ({
  color = 'primary',
  size = 'medium',
  label,
  onClick,
}: Props) => {
  return (
    <Button variant="contained" color={color} size={size} onClick={onClick}>
      {label}
    </Button>
  )
}
