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
import { defaultBird } from '../Homepage';

function Datatable(props) {
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
            {props.birds.map((bird) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  <Link underline="always" component="button" variant="body2" onClick={() => props.setSelectedBird(props.selectedBird.name ? defaultBird : bird)}>
                    {bird.name}
                  </Link>
                </TableCell>
                <TableCell>{bird.quantity}</TableCell>
                <TableCell>{bird.details || 'No additional details'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Datatable;
