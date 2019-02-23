import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Task from './Task';
import SignUp from './SignUp'; 

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('SignUp', module)
//   .add('default', () => <Task task={task} {...actions} />)
//   .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
//   .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)
  .add('emailbox', () => <SignUp stage='ENTER_EMAIL'/>)
  .add('emailbox_error1', () => <SignUp stage='ENTER_EMAIL' alert='Please agree to the Privacy Policy'/>)
  .add('emailbox_error2', () => <SignUp stage='ENTER_EMAIL' alert='Please enter a valid email address'/>)
  .add('namebox', () => <SignUp stage='ENTER_NAME'/>)
  .add('namebox_error', () => <SignUp stage='ENTER_NAME' alert='Please enter a first and last name' />)
  .add('congrats', () => <SignUp stage='COMPLETE'/>); 
