import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const categoryOptions = [
  {
    key: 'Home',
    text: 'Home',
    value: 'Home',
    },
  {
    key: 'Hobbies',
    text: 'Hobbies',
    value: 'Hobbies',
    },
  {
    key: 'Activities',
    text: 'Activities',
    value: 'Activities',
    },
  {
    key: 'Other',
    text: 'Other',
    value: 'Other',
  },
]

const numberOptions = [
  { key: 1, text: '1', value: 1 },
  { key: 2, text: '2', value: 2 },
  { key: 3, text: '3', value: 3 },
  { key: 4, text: '4', value: 4 },
  { key: 5, text: '5', value: 5 },
  { key: 6, text: '6', value: 6 },
  { key: 7, text: '7', value: 7 },
  { key: 8, text: '8', value: 8 },
  { key: 9, text: '9', value: 9 },
  { key: 10, text: '10', value: 10 },
  { key: 11, text: '11', value: 11 },
  { key: 12, text: '12', value: 12 },
]

const pointsOptions = [
  { key: 10, text: '10', value: 10 },
  { key: 20, text: '20', value: 20 },
  { key: 30, text: '30', value: 30 },
  { key: 40, text: '40', value: 40 },
  { key: 50, text: '50', value: 50 },
  { key: 60, text: '60', value: 60 },
  { key: 70, text: '70', value: 70 },
  { key: 80, text: '80', value: 80 },
  { key: 90, text: '90', value: 90 },
  { key: 10, text: '10', value: 10 },
]

const durationOptions = [
  {
    key: 'Months',
    text: 'Months',
    value: 'Months',
    },
  {
    key: 'Weeks',
    text: 'Weeks',
    value: 'Weeks',
    },
  {
    key: 'Days',
    text: 'Days',
    value: 'Days',
    },
]


const deliveryOptions = [
  {
    key: 'Mail',
    text: 'Mail',
    value: 'Mail',
    },
  {
    key: 'Pick-up',
    text: 'Pick-up',
    value: 'Pick-up',
    },
]

const conditionOptions = [
  {
    key: 'Mint',
    text: 'Mint',
    value: 'Mint',
    },
  {
    key: 'Slightly used',
    text: 'Slightly used',
    value: 'Slightly used',
    },
  {
    key: 'Worn',
    text: 'Worn',
    value: 'Worn',
    },
]

export const DropdownCategorySelection = () => (
  <Dropdown
    placeholder='Item type'
    fluid
    selection
    options={categoryOptions}
  />
)

export const DropdownNumberSelection = () => (
  <Dropdown
    search
    searchInput={{ type: 'number' }}
    selection
    options={numberOptions}
    placeholder='Select amount'
  />
)

export const DropdownPointsSelection = () => (
  <Dropdown
    search
    searchInput={{ type: 'points' }}
    selection
    options={pointsOptions}
    placeholder='Select amount'
  />
)

export const DropdownDurationSelection = () => (
  <Dropdown
    placeholder='Choose duration'
    fluid
    selection
    options={durationOptions}
  />
)

export const DropdownDeliverySelection = () => (
  <Dropdown
    placeholder='Choose delivery'
    fluid
    selection
    options={deliveryOptions}
  />
)

export const DropdownConditionSelection = () => (
  <Dropdown
    placeholder='Choose condtion'
    fluid
    selection
    options={conditionOptions}
  />
)

