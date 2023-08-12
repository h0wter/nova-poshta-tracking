import React, { useState } from 'react';
import { Box, Popover, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Schedule } from '../../../common/enums/offices/types';

type Props = {
  schedule: Schedule;
};

export const MouseOverPopover: React.FC<Props> = ({ schedule }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      aria-owns={open ? 'mouse-over-popover' : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        cursor: 'pointer'
      }}
    >
      <ExpandMoreIcon />

      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none'
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>Пн: {schedule.Monday}</Typography>
        <Typography sx={{ p: 1 }}>Вт: {schedule.Tuesday}</Typography>
        <Typography sx={{ p: 1 }}>Ср: {schedule.Wednesday}</Typography>
        <Typography sx={{ p: 1 }}>Чт: {schedule.Thursday}</Typography>
        <Typography sx={{ p: 1 }}>Пт: {schedule.Friday}</Typography>
        <Typography sx={{ p: 1 }}>Сб: {schedule.Saturday}</Typography>
        <Typography sx={{ p: 1 }}>Нд: {schedule.Sunday}</Typography>
      </Popover>
    </Box>
  );
};
