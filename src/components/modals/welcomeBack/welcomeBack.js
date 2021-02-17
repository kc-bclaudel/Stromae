import React from 'react';
import { Button } from 'components/designSystem/Button';
import Dictionary from 'i18n';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MarkdownTypo } from 'components/designSystem';

const WelcomeBack = ({ open, setOpen, goToFirstPage }) => {
  const goToCurrentPage = () => {
    setOpen(false);
  };

  const goToFirst = () => {
    goToFirstPage();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      disableBackdropClick
      disableEscapeKeyDown
      onClose={goToCurrentPage}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {Dictionary.welcomeBackTitle}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description" component="div">
          <MarkdownTypo>{Dictionary.welcomeBackBody}</MarkdownTypo>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={goToCurrentPage}>
          {Dictionary.goBackToCurrentPage}
        </Button>
        <Button onClick={goToFirst}>{Dictionary.goToFirstPage}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeBack;
