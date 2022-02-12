import Header from './components/Header';
import Map from './components/Map';
import {
  Box,
  Typography
} from '@material-ui/core';
import ReportForm from './components/ReportForm';
import { useState } from 'react';
import { Feature } from 'geojson';
import Datatable from './components/Datatable';

export interface IBird {
  name: string;
  quantity: number;
  details?: string;
  location: Feature | null;
}

export const defaultBird: IBird = {
  name: '',
  details: '',
  quantity: ('' as unknown) as number,
  location: null
};

function Homepage() {
  // Used to add a new spotting of a bird
  const [bird, setBird] = useState<IBird>(defaultBird);

  // Used to show a previously spotted bird on the map
  const [selectedBird, setSelectedBird] = useState<IBird>(defaultBird);

  // Used to track all the spotted birds as a list
  const [birds, setBirds] = useState<IBird[]>([]);

  // Function called when Report button is clicked
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
          <Datatable selectedBird={selectedBird} setSelectedBird={setSelectedBird} birds={birds} />
        ) :
          <Typography>No birds have been spotted.</Typography>
        }
      </Box>
    </>
  );
}

export default Homepage;
