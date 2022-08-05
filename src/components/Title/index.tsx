import React, { memo } from 'react'

/**
 * Title Components
 * @returns
 */
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000' }}>
      {children}
    </div>
  )
}

export default memo(Title)
