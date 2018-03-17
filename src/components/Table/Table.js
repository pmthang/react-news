import React from 'react';
import { Button } from '../Button/Button';

export const Table = ({data, searchTerm, removeItem}) => {
    return (
      <div>
        {
          data.map(item => 
            <ul key = {item.objectID}>
              <h1><a href={item.url}>{item.title}</a> by {item.author}</h1>
              <h4>{item.num_comments} Comments | {item.points} Points</h4>
              <Button
                type="button"
                onClick={() => removeItem(item.objectID)}>
                Remove
              </Button>
  
            </ul>
          )
        }
      </div>
    )
  }