import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./drawer.css";
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Flights from '@mui/icons-material/AirplaneTicket';
import Cars from '@mui/icons-material/DirectionsCar';
import Cruises from '@mui/icons-material/Houseboat';
import Things from '@mui/icons-material/ConfirmationNumber';

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <div id="popoverid" aria-describedby={id} variant="contained" onClick={handleClick}>
        More travel
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
       
      >
          <div id='moreTravel'>
              <div  className='iconstyle'>
                  <ShopTwoIcon/>
                    <div>Packages</div>
          </div>
           <div  className='iconstyle'>
                  <LocationCityIcon/>
                    <div>Stays</div>
          </div>
           <div  className='iconstyle'>
                  <Cars/>
                    <div>Cars</div>
          </div>
           <div  className='iconstyle'>
                  <Flights/>
                    <div>Flights</div>
          </div>
           <div  className='iconstyle'>
                  <Cruises/>
                    <div>Cruises</div>
          </div>
           <div  className='iconstyle'>
                  <Things/>
                    <div>Things to do</div>
          </div>
          
       <div>Trips for me</div>
       <div>Discover</div>
       <div>Travel Deals</div>
       <div>Get inspired</div>
       <div>Groups & Meetings</div>
       </div>
      </Popover>
    </div>
  );
}
