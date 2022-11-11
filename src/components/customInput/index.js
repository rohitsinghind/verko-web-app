import React from 'react';
import TextField from '@mui/material/TextField';
import { styles } from './styles';


export default function CustomInput(props) {
    const { id, label, value, onChange, rowStyle, topMargin, btargin, padding = '12px', height = '18px', variant= "outlined"} = props;
    return (
        <TextField
            sx={[styles.root, rowStyle && styles.minWidthChange, topMargin && styles.marginTop, btargin && styles.marginBottom]}
            id={id}
            label={label}
            size="small"
            value={value}
            onChange={onChange}
            variant={variant}
            {...props}
            inputProps={{
                style: {
                    padding,
                    height,
                },
            }}
        />
    );
}
