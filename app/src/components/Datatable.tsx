import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Link,
  Paper
} from '@material-ui/core';
import { defaultBirdSpotting, IBirdSpotting } from '../Homepage';

interface IDatatableProps {
  birdSpottings: IBirdSpotting[];
  selectedBirdSpotting: IBirdSpotting;
  setSelectedBirdSpotting: (selectedBirdSpotting: IBirdSpotting) => void;
}

function Datatable(props: IDatatableProps) {
  return (
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
            {props.birdSpottings.map((birdSpotting: IBirdSpotting) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Link underline="always" component="button" variant="body2" onClick={() => props.setSelectedBirdSpotting(props.selectedBirdSpotting.name ? defaultBirdSpotting : birdSpotting)}>
                    {birdSpotting.name}
                  </Link>
                </TableCell>
                <TableCell>{birdSpotting.quantity}</TableCell>
                <TableCell>{birdSpotting.details || 'No additional details'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Datatable;
