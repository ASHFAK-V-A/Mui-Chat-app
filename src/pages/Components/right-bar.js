import React from 'react'
import {
    Box,
    Container,
    Stack
}
    from '@mui/material';
function Rightbar() {
    return (
        <Box bgcolor={'pink'} flex={1} p={2} display={{ xs: 'none', sm: 'block' }}>
            <h2>right bar</h2>
        </Box >
    )
}

export default Rightbar
