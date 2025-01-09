import { DashBoardLayout } from '../layout/DashBoardLayout';
import { TodoTable } from '../components/tables/TodoTable';


export const PersonalesPage = ({ title = "Personales"}) => {
  return (
    <DashBoardLayout>                  
      <TodoTable title={title}></TodoTable>
    </DashBoardLayout>
  )
}
