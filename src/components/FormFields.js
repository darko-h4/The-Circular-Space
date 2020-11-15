import React from 'react';
import { Checkbox, Form } from 'semantic-ui-react';

export const ItemNameForm = () => (
  <Form>
    <Form.Field>
      <label>Item Name</label>
      <input placeholder='How can other people find your item?' />
    </Form.Field>
  </Form>
)

export const ItemDescription = () => (
  <Form>
    <Form.TextArea label='Description' placeholder='Describe your item (Condition, Usability, Reason for give away etc.)' />
  </Form>
)

export const LocationForm = () => (
  <Form>
    <Form.Field>
      <label>Your Location</label>
      <input placeholder='Where is the item located?' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
  </Form>
)
