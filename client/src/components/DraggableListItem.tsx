import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import { purple } from '@mui/material/colors';

// Define the DraggableListItemProps type
type DraggableListItemProps = {
  person: {
    id: string;
    name: string;
    age: number;
    location: string;
  };
  index: number;
};

const DraggableListItem = ({person, index}: DraggableListItemProps) => {
  return (
    <Draggable key={person.id} draggableId={person.id} index={index}>
      {(provided) => (
        <ListItemButton ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} divider={true} sx={{bgcolor: purple[50]}}>
          <ListItemText 
            primary={person.name} 
            secondary={
              <React.Fragment>
                <Typography sx={{display: 'inline'}} component="span" variant="body2" color="text.primary">
                  {person.age}
                </Typography>
                {` - ${person.location}`}
              </React.Fragment>
            } 
          />
        </ListItemButton>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
