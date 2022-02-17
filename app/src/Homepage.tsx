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

export interface IBirdSpotting {
  name: string;
  quantity: number;
  details?: string;
  location: Feature | null;
}

export const defaultBirdSpotting: IBirdSpotting = {
  name: '',
  details: '',
  quantity: ('' as unknown) as number,
  location: null
};

function Homepage() {
  // Used to add a new spotting of a bird
  const [birdSpotting, setBirdSpotting] = useState<IBirdSpotting>(defaultBirdSpotting);

  // Used to show a previously spotted bird on the map
  const [selectedBirdSpotting, setSelectedBirdSpotting] = useState<IBirdSpotting>(defaultBirdSpotting);

  // Used to track all the spotted birds as a list
  const [birdSpottings, setBirdSpottings] = useState<IBirdSpotting[]>([]);

  // Function called when Report button is clicked
  const handleFormSubmit = () => {
    setBirdSpottings([...birdSpottings, birdSpotting]);
    setBirdSpotting(defaultBirdSpotting);
  };

  return (
    <>
      <Header />
      <Box display="flex" pt={2} pl={2}>
        <Box style={{ width: '60%' }}>
          <Map selectedBirdSpotting={selectedBirdSpotting} birdSpotting={birdSpotting} setBirdSpotting={setBirdSpotting} />
        </Box>
        <Box pl={4} style={{ width: '35%', alignSelf: 'center' }}>
          <ReportForm handleFormSubmit={handleFormSubmit} birdSpotting={birdSpotting} setBirdSpotting={setBirdSpotting} />
        </Box>
      </Box>
      <Box style={{ width: '60%' }} pt={2} pl={2}>
        <Box pb={2}>
          <Typography variant="h5">Birds Spotted</Typography>
        </Box>
        {birdSpottings.length > 0 ? (
          <Datatable selectedBirdSpotting={selectedBirdSpotting} setSelectedBirdSpotting={setSelectedBirdSpotting} birdSpottings={birdSpottings} />
        ) :
          <Typography>No birds have been spotted.</Typography>
        }
      </Box>
    </>
  );
}

export default Homepage;
