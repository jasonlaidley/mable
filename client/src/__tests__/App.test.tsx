import * as React from 'react';
import renderer from 'react-test-renderer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import DraggableListItem from '../components/DraggableListItem';

const person = {
  id: '1',
  name: 'John Doe',
  age: 25,
  location: 'New York'
};

const index = 0;

it('renders correctly', () => {
  const tree = renderer.create(
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <DraggableListItem person={person} index={index} key={person.id} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});