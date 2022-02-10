import Header from './components/Header';
import Map from './components/Map';
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Link,
  Paper
} from '@material-ui/core';
import ReportForm from './components/ReportForm';
import { useState } from 'react';
import { Feature } from 'geojson';

export interface IBird {
  name: string;
  quantity: number;
  details?: string;
  location: Feature | null;
}

const defaultBird = {
  name: '',
  details: '',
  quantity: ('' as unknown) as number,
  location: null
};

function App() {
  const [bird, setBird] = useState<IBird>(defaultBird);
  const [selectedBird, setSelectedBird] = useState<IBird>(defaultBird);
  const [birds, setBirds] = useState<IBird[]>([]);

  const handleFormSubmit = () => {
    setBirds([...birds, bird]);
    setBird(defaultBird);
  };

  return (
    <>
      <Header />
      <Box display="flex" pt={2} pl={2}>
        <Box style={{ width: '60%' }}>
          <Map selectedBird={selectedBird} bird={bird} setBird={setBird} />
        </Box>
        <Box pl={4} style={{ width: '35%', alignSelf: 'center' }}>
          <ReportForm handleFormSubmit={handleFormSubmit} bird={bird} setBird={setBird} />
        </Box>
      </Box>
      <Box style={{ width: '60%' }} pt={2} pl={2}>
        <Box pb={2}>
          <Typography variant="h5">Birds Spotted</Typography>
        </Box>
        {birds.length > 0 ? (
          <Paper>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {birds.map((birdValue: IBird) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Link underline="always" component="button" variant="body2" onClick={() => {
                          setSelectedBird(selectedBird.name ? defaultBird : birdValue)}}>
                          {birdValue.name}
                        </Link>
                      </TableCell>
                      <TableCell>{birdValue.quantity}</TableCell>
                      <TableCell>{birdValue.details || 'No additional details'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ) : <Typography>No birds have been spotted.</Typography>}
      </Box>
    </>
  );
}

export default App;
