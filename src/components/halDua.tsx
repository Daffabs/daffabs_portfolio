import { section } from "framer-motion/client";
import React from "react";
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

const HalDua = () => {
    return (
        <section className="h-auto">
            <div className="grid grid-cols-1 sm:grid-cols-12">
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
                    <Box
                        sx={{
                            width: '100%',
                            height: 50,
                            bgcolor: 'transparent',
                            background: 'linear-gradient(45deg, #3C3D37 0%, #A0A393 50%, #3C3D37 100% )',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    />
                </ThemeProvider>
            </div>

            <div className="flex flex-col items-center col-span-8 pt-6">
                <h1 className="text-white text-lg sm:text-2xl lg:text-4xl xl:text-5xl text-center">
                    - Services -
                </h1>
                <p className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl pt-4 text-center">
                    <span className="text-kuningNew-1 italic">Services</span>
                    <span className="text-white"> I Provide</span>
                </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 sm:gap-8 pt-10">
                <Box
                    sx={{
                        width: { xs: '100%', sm: 250, md: 275, lg: 300 },
                        height: 250,
                        borderRadius: 5,
                        bgcolor: '#ECDFCC',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    className="mb-6 sm:mb-0"
                >
                    <img
                        src="/images/uiux.png"
                        alt="Deskripsi Gambar"
                        style={{
                            width: '40%',
                            height: 'auto',
                            borderRadius: '50%',
                        }}
                    />
                    <p className="mt-3 text-dark-1 text-center font-bold text-lg sm:text-xl md:text-2xl">
                        UI/UX Design
                    </p>
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', sm: 250, md: 275, lg: 300 },
                        height: 250,
                        borderRadius: 5,
                        bgcolor: '#ECDFCC',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    className="mb-6 sm:mb-0"
                >
                    <img
                        src="/images/frontend.png"
                        alt="Deskripsi Gambar"
                        style={{
                            width: '40%',
                            height: 'auto',
                            borderRadius: '50%',
                        }}
                    />
                    <p className="mt-3 text-dark-1 text-center font-bold text-lg sm:text-xl md:text-2xl">
                        Frontend
                    </p>
                </Box>

                <Box
                    sx={{
                        width: { xs: '100%', sm: 250, md: 275, lg: 300 },
                        height: 250,
                        borderRadius: 5,
                        bgcolor: '#ECDFCC',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    className="mb-6 sm:mb-0"
                >
                    <img
                        src="/images/webdesign.png"
                        alt="Deskripsi Gambar"
                        style={{
                            width: '40%',
                            height: 'auto',
                            borderRadius: '50%',
                        }}
                    />
                    <p className="mt-3 text-dark-1 text-center font-bold text-lg sm:text-xl md:text-2xl">
                        Website Design
                    </p>
                </Box>
            </div>
        </section>
    );
};

export default HalDua;
