import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { styles } from './styles';

export default function SearchInput({ onSearch }) {

    const [value, setValue] = React.useState('');

    return (
        <Paper
            component="form"
            sx={styles.root}
        >

            <InputBase
                sx={styles.input}
                placeholder="Search"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton size='small' sx={styles.btn} onClick={() => onSearch(value)}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}