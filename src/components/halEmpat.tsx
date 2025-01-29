import { section } from "framer-motion/client";
import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@mui/material/styles';

const HalEmpat = () => {
    return (
        <section className="h-auto container">
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
                <div className="flex flex-col items-center col-span-8 pt-4">
                    <h1 className="text-white text-lg sm:text-2xl lg:leading-normal text-center">
                        - My Skills -
                    </h1>
                    <p className="text-4xl sm:text-6xl text-center italic">
                        <span className="text-kuningNew-1">Language</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-14">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: { xs: 100, sm: 150 },
                            height: { xs: 100, sm: 150 },
                            borderRadius: 100,
                            bgcolor: '#ECDFCC',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            src={`/images/${item}.png`}
                            alt={`Deskripsi Gambar ${item}`}
                            sx={{
                                width: { xs: '70%', sm: '70%' },
                                height: 'auto',
                                borderRadius: '50%'
                            }}
                        />
                    </Box>
                ))}
            </div>
        </section>
    );
};

export default HalEmpat;