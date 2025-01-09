import { Typography } from '@mui/material';
import { DashBoardLayout } from '../layout/DashBoardLayout';
import { BasicTable } from '../components';
import { TodoTable } from '../components/tables/TodoTable';


export const DashBoardPage3 = ({ title = "Dashboard 3"}) => {
  return (
    <DashBoardLayout>                    
      <TodoTable title={title}></TodoTable>
    </DashBoardLayout>
  )
}
