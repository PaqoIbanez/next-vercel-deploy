import { FC } from "react"

export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding:'20px',
        borderRadius: '8px'
    }}>
        { children }
    </div>
  )
}
