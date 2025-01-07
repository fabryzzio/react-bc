import { IconButton } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

import { DashBoardLayout } from '../layout/DashBoardLayout';
import { ExampleView, NoteView, NothingSelectedView } from '../views';


export const DashBoardPage = () => {
  return (
    <DashBoardLayout>                  
      <ExampleView></ExampleView>
    </DashBoardLayout>
  )
}
