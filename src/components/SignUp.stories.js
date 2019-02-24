import React from 'react';
import { storiesOf } from '@storybook/react';
import SignUp from './SignUp'; 

storiesOf('SignUp', module)
  .add('emailbox', () => <SignUp stage='ENTER_EMAIL'/>)
  .add('emailbox_error1', () => <SignUp stage='ENTER_EMAIL' alert='Please agree to the Privacy Policy'/>)
  .add('emailbox_error2', () => <SignUp stage='ENTER_EMAIL' alert='Please enter a valid email address'/>)
  .add('namebox', () => <SignUp stage='ENTER_NAME'/>)
  .add('namebox_error', () => <SignUp stage='ENTER_NAME' alert='Please enter a first and last name' />)
  .add('congrats', () => <SignUp stage='COMPLETE'/>); 
