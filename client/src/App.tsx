import * as React from 'react';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import DraggableListItem from './components/DraggableListItem';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import { purple } from '@mui/material/colors';

const App = () => {
  const [people, setPeople] = useState([]);

  type Person = {
    id: string;
    name: string;
    age: number;
    location: string;
  }

  // Fetch data from the server
  useEffect(() => {
    axios.get('http://localhost:5000/people')
      .then(response => setPeople(response.data));
  }, []);

  // Drag and drop
  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) {
      return
    };

    const newItems = reorder(people, source.index, destination.index);

    setPeople(newItems);
  };

  const reorder = (
    list: Array<Person>,
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };
  

  return (
    <Paper elevation={3} sx={{ margin: '50px auto', maxWidth: 360, bgcolor: purple[100] }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided, snapshot) => (
            <List >
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {people.map((person, index) => (
                  <DraggableListItem person={person} index={index} key={person.id} />
                ))}
                {provided.placeholder}
              </div>
            </List>
          )}
        </Droppable>
      </DragDropContext>
    </Paper>
  );
}

export default App;
