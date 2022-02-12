import Button, { ButtonProps } from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { ReactNode } from 'react';

interface IYesNoDialogProps {
  dialogContent?: ReactNode;
  dialogTitle: string;
  dialogText: string;
  open: boolean;
  onClose: () => void;
  onNo: () => void;
  onYes: () => void;
  yesButtonLabel?: string;
  noButtonLabel?: string;
  yesButtonProps?: Partial<ButtonProps>;
  noButtonProps?: Partial<ButtonProps>;
}

/**
 * A dialog for displaying a title + message (typically a question), and giving the user the option to say
 * `Yes` or `No`.
 */
const YesNoDialog: React.FC<IYesNoDialogProps> = (props) => {
  if (!props.open) {
    return <></>;
  }

  return (
    <Dialog
      open={props.open}
      onClose={props.onClose}
      data-testid="yes-no-dialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">{props.dialogTitle}</DialogTitle>
      <DialogContent>
        {props.dialogText && <DialogContentText id="alert-dialog-description">{props.dialogText}</DialogContentText>}
        {props.dialogContent}
      </DialogContent>
      <DialogActions>
        <Button
          data-testid="yes-button"
          onClick={props.onYes}
          color="primary"
          variant="contained"
          {...props.yesButtonProps}>
          {props.yesButtonLabel ? props.yesButtonLabel : 'Yes'}
        </Button>

        <Button
          data-testid="no-button"
          onClick={props.onNo}
          color="primary"
          variant="outlined"
          {...props.noButtonProps}>
          {props.noButtonLabel ? props.noButtonLabel : 'No'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default YesNoDialog;
