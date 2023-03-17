import React, { useState } from 'react'
import { Tabs, Tab, Box, Typography } from '@mui/material';



const ForexTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="container px-6 py-10 mx-auto">
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab label="ABOUT THE COURSE" className='text-bold'/>
                    <Tab label="COURSE CONTENT" />
                    <Tab label="REVIEWS" />
                </Tabs>
            </Box>
            <Box>
                <Box sx={{ padding: 2 }}>
                    {value === 0 && (
                        <Box>
                            <Typography>
                                The first tab
                            </Typography>
                        </Box>
                    )}
                    {value === 1 && (
                        <Box>
                            <Typography>
                                The second tab
                            </Typography>
                        </Box>
                    )}
                    {value === 2 && (
                        <Box>
                            <Typography>
                                The third tab
                            </Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </div>
    )
}

export default ForexTabs
