import React from 'react';
import { FormGroup } from 'react-bootstrap';

export const Search = ({onChange, value, children, onSubmit}) => 
<form onSubmit={onSubmit}>
  <FormGroup>
   {children}
   <input 
     className="form-control"
     type="text" 
     onChange={onChange} 
     value={ value } 
   />
   </FormGroup>
 </form>