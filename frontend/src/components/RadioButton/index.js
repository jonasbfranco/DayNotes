import React from "react";
import Radio from '@mui/material/Radio';

import './style.css';

function RadioButton({ selectedValue, handleChange }) {
   
    
  
    
  
    return (
      <div className="radioOptions">
        <div>
          
          <Radio
            
            sx={{
              color: `#ffd3ca`,
              '&.Mui-checked': {
                color: `#eb8f7a`,
              },
            }}
            checked={selectedValue === 'all'}
            onChange={e => handleChange(e.target)}
            value="all"
            />
            <span>Todos</span>
            
        </div>

        <div>
          
          <Radio
            sx={{
              color: `#ffd3ca`,
              '&.Mui-checked': {
                color: `#eb8f7a`,
              },
            }}
            checked={selectedValue === 'true'}
            onChange={e => handleChange(e.target)}
            value="true"
            />
            <span>Prioridade</span>
            
        </div>

        <div>
          
          <Radio
            sx={{
              color: `#ffd3ca`,
              '&.Mui-checked': {
                color: `#eb8f7a`,
              },
            }}
            checked={selectedValue === 'false'}
            onChange={e => handleChange(e.target)}
            value="false"
            />
            <span>Normal</span>
            
        </div>
      </div>
    );
  }

export default RadioButton;
