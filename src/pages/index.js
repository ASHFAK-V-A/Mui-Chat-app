
import Sidebar from './Components/side-bar';
import Feed from './Components/feed';
import Rightbar from './Components/right-bar';
import {
  Box,
  Container,
  Stack
}
  from '@mui/material';
import Navbar from './Components/navbar';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Stack spacing={2} direction={'row'} justifyContent={'space-between'} >

        <Sidebar />
        <Feed />
        <Rightbar />

      </Stack>
    </ Box>
  )
} 
