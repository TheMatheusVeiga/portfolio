import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
      </Box>
   );
}

export default PortfolioBlock;