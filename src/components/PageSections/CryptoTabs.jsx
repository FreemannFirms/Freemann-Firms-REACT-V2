import * as React from 'react'
import { useState } from 'react';
import { Tabs, Tab, Box, Typography, ThemeProvider, createTheme } from '@mui/material';


//COMPONENTS//
import CryptoAbout from './CryptoAbout';
import CryptoContent from './CryptoContent';
import CryptoReviews from './CryptoReviews';


const sxStyle = {
    backgroundColor: '#fafafa',
}

const THEME = createTheme({
    typography: {
        "fontFamily": `"Poppins"`,
        "fontSize": 18,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});


const CryptoTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



  return (
    <ThemeProvider theme={THEME}>
            <div className="container px-6 py-10 mx-auto">
                <Box sx={sxStyle}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        theme={THEME}
                    >
                        <Tab label="ABOUT THE COURSE" />
                        <Tab label="COURSE CONTENT" />
                        <Tab label="REVIEWS" />
                    </Tabs>
                </Box>
                <Box sx={sxStyle}>
                    <Box sx={{ padding: 2 }}>
                        {value === 0 && (
                            <Box>
                                <Typography>
                                    <CryptoAbout />
                                </Typography>
                            </Box>
                        )}
                        {value === 1 && (
                            <Box>
                                <Typography>
                                    <CryptoContent />
                                </Typography>
                            </Box>
                        )}
                        {value === 2 && (
                            <Box>
                                <Typography>
                                    <CryptoReviews />
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </div>
        </ThemeProvider>
  )
}


export default CryptoTabs