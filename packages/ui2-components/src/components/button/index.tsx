import React from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  label: string
  variant: 'primary' | 'standard'
}

const Button = ({
  label,
  variant
}: ButtonProps): JSX.Element => {
  return (
    <button className={`${styles.Button} ${ variant === 'primary' ? styles.Button___primary : ''}`}>{label}</button>
  )
}

export default Button
