'use client'

import { CustomButtonProp } from '@/types'
import { FC } from 'react'

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProp) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={'flex-1'}>{title}</span>
    </button>
  )
}

export default CustomButton
