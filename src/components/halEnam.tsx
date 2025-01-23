import React from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School'; 
import WorkIcon from '@mui/icons-material/Work'; 

const HalEnam = () => {
    return (
        <section className="h-auto">
            <div className="grid-cols-1 sm:grid-cols-12">
                <ThemeProvider
                    theme={{
                        palette: {
                            primary: {
                                main: '#FFA600',
                                dark: '#CC8500',
                            },
                        },
                    }}
                >
                </ThemeProvider>
            </div>
            <div className="flex flex-wrap justify-center items-center h-4/6 gap-4 pt-4">
                {/* Kotak Education */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: 300 },
                        height: 250,
                        borderRadius: 5,
                        bgcolor: '#ECDFCC',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2,
                        boxShadow: 1,
                        position: 'relative'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                        <SchoolIcon sx={{ fontSize: '2rem', color: '#181C14', marginRight: 1 }} />
                        <Typography variant="h6" sx={{ color: '#181C14', fontWeight: 'bold' }}>
                            Education
                        </Typography>
                    </Box>
                    <Divider sx={{ width: '100%', bgcolor: '#181C14', marginBottom: 2 }} />
                    <Box sx={{
                        width: '4px',
                        height: '28%', 
                        backgroundColor: '#181C14',
                        position: 'absolute',
                        borderRadius: 5,
                        left: '35px', 
                        top: '43%', 
                        transform: 'translateY(-50%)' 
                    }} />
                    <Box sx={{ marginLeft: '32px' }}>
                        <Typography variant="body1" sx={{ color: '#838B7E' }}>
                            2020-2024
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#181C14', fontWeight: 'bold' }}>
                            UNIKOM
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#4CAF50' }}>
                            Informatics Engineering
                        </Typography>
                    </Box>
                </Box>
  
                {/* Kotak Intern Experience */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: 300 },
                        height: 250,
                        borderRadius: 5,
                        bgcolor: '#ECDFCC',
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 2,
                        boxShadow: 1,
                        position: 'relative'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                        <WorkIcon sx={{ fontSize: '2rem', color: '#181C14', marginRight: 1 }} />
                        <Typography variant="h6" sx={{ color: '#181C14', fontWeight: 'bold' }}>
                        Intern Experience
                        </Typography>
                    </Box>
                    <Divider sx={{ width: '100%', bgcolor: '#181C14', marginBottom: 2 }} />
                    <Box sx={{
                        width: '4px',
                        height: '28%',
                        backgroundColor: '#181C14',
                        position: 'absolute',
                        borderRadius: 5,
                        left: '35px',
                        top: '44%',
                        transform: 'translateY(-50%)'
                    }} />
                    <Box sx={{ marginLeft: '32px' }}>
                        <Typography variant="body1" sx={{ color: '#838B7E', marginBottom: 0.5 }}>
                            Jul 2023 - Sep 2023
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#181C14', fontWeight: 'bold' }}>
                            Palang Merah Indonesia
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#4CAF50' }}>
                            Frontend Developer
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '4px',
                        height: '28%', 
                        backgroundColor: '#181C14',
                        position: 'absolute',
                        borderRadius: 5,
                        left: '35px',
                        top: '76%',
                        transform: 'translateY(-50%)',
                    }} />
                    <Box sx={{ marginLeft: '32px', marginTop: 1 }}> 
                        <Typography variant="body1" sx={{ color: '#838B7E', marginBottom: 0.5 }}>
                            Aug 2023 - Sep 2024
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#181C14', fontWeight: 'bold' }}>
                            Perdana Photo Group
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#4CAF50' }}>
                            Fullstack Developer
                        </Typography>
                    </Box>
                </Box>
            </div>
        </section>
    );
};

export default HalEnam;
