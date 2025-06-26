import { cn } from '@/lib/utils'
import React from 'react'
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export const CardFooter = ({
  className,
  children,
  ...props
}: CardFooterProps) => {
  return (
    <div className={cn('pt-4 flex items-center', className)} {...props}>
      {children}
    </div>
  )
}
