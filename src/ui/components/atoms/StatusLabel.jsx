import { Chip } from "@mui/material"
import CircleIcon from '@mui/icons-material/Circle';

export const StatusLabel = ({label = 'default', color ='primary'}) => {
  return (
    <>
      <Chip color={color} label={label} size="small" icon={<CircleIcon  sx={{width:8}} />} 
      sx={{
            minWidth:100 
          , textAlign: 'center' 
          , justifyContent: 'flex-start'        
          , p:1
          , color:'white'
      }} />            
    </>    
  )
}
