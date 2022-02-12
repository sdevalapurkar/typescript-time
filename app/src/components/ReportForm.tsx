import {
  Box,
  Typography,
  TextField,
  Button
} from '@material-ui/core';

function ReportForm(props) {
  return (
    <>
      <Box pb={2}>
        <Typography variant="h5">Report what you see!</Typography>
      </Box>
      <Box pb={2}>
        <TextField
          type="text"
          name="bird_name"
          label="What did you see?"
          id="bird_name"
          onChange={(e) => props.setBird({ ...props.bird, name: e.target.value })}
          variant="outlined"
          value={props.bird.name}
          fullWidth={true}
          required={true}
          placeholder="Blue jay"
        />
      </Box>
      <Box pb={2}>
        <TextField
          type="number"
          name="bird_quantity"
          label="How many did you see?"
          id="bird_quantity"
          onChange={(e) => props.setBird({ ...props.bird, quantity: e.target.value })}
          variant="outlined"
          value={props.bird.quantity}
          fullWidth={true}
          required={true}
          placeholder="4"
        />
      </Box>
      <Box pb={2}>
        <TextField
          multiline
          minRows={4}
          type="text"
          name="bird_description"
          label="Add more details"
          id="bird_description"
          onChange={(e) => props.setBird({ ...props.bird, details: e.target.value })}
          variant="outlined"
          value={props.bird.details}
          fullWidth={true}
          placeholder="Blue feathers with red beak, loud chirping"
        />
      </Box>
      <Box pb={2}>
        <Button
          variant="contained"
          component="label"
          size="medium"
          color="primary"
          onClick={props.handleFormSubmit}
        >
          Report
        </Button>
      </Box>
    </>
  );
}

export default ReportForm;
