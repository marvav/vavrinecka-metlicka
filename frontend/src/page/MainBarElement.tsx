import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

interface MainBarElementProps {
    to: string;
    title: string;
}

const MainBarElement: React.FC<MainBarElementProps> = ({ to, title }) => {
    return (
        <Button
            component={NavLink}
            to={to}
            sx={{
                color: 'white',
                position: 'relative',
                padding: '8px 16px',
                textTransform: 'none',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '2px',
                    bottom: '4px',
                    left: '50%',
                    backgroundColor: 'green',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'translateX(-50%)',
                },
                '&:hover::after, &.active::after': {
                    width: 'calc(100% - 32px)',
                },
            }}
        >
            <Typography variant="h6" sx={{ fontSize: '1rem' }}>{title}</Typography>
        </Button>
    );
};

export default MainBarElement;