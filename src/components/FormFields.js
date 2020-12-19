import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export const ItemNameForm = (props) => (
  <Form>
    <Form.Field>
      <label>Item Name</label>
      <input placeholder='How can other people find your item?' id={props.id}/>
    </Form.Field>
  </Form>
)

export const ItemDescription = (props) => (
  <Form>
    <Form.TextArea label='Description' placeholder='Describe your item (Condition, Usability, Reason for give away etc.)' id={props.id}/>
  </Form>
)

export const LocationForm = (props) => (
  <Form>
    <Form.Field>
      <label>Your Location</label>
      <input placeholder='Where is the item located?' id={props.id}/>
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
  </Form>
)

export const NoteField = (props) => (
  <Form>
    <Form.TextArea label='Note' placeholder='If you wish to, you can leave a note to the owner' id={props.id}/>
  </Form>
)


