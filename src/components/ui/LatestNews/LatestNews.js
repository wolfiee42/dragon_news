import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import latest from "@/assests/latest.png"

const LatestNews = () => {
    return (
        <>
            <Card className='border-2 shadow-2xl my-5'>
                <CardMedia>
                    <Image src={latest} alt='Latest Image' width={800} height={400} />
                </CardMedia>
                <CardContent>
                    <p className='w-[100px] text-white text-center rounded py-1 my-5 bg-red-500'>Technology</p>
                    <Typography gutterBottom variant="h5" component="div">
                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className='my-3'>
                        By Saiful Islam - Mar 18 2023
                    </Typography>
                    <Typography>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                    </Typography>
                </CardContent>
            </Card>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} className='my-5'>
                    <Card className='border-2 shadow-2xl'>
                        <CardMedia>
                            <Image src={latest} alt='Latest Image' width={800} height={400} />
                        </CardMedia>
                        <CardContent>
                            <p className='w-[100px] text-white text-center rounded py-1 my-5 bg-red-500'>Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='my-3'>
                                By Saiful Islam - Mar 18 2023
                            </Typography>
                            <Typography>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} className='my-5'>
                    <Card className='border-2 shadow-2xl'>
                        <CardMedia>
                            <Image src={latest} alt='Latest Image' width={800} height={400} />
                        </CardMedia>
                        <CardContent>
                            <p className='w-[100px] text-white text-center rounded py-1 my-5 bg-red-500'>Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='my-3'>
                                By Saiful Islam - Mar 18 2023
                            </Typography>
                            <Typography>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} className='my-5'>
                    <Card className='border-2 shadow-2xl'>
                        <CardMedia>
                            <Image src={latest} alt='Latest Image' width={800} height={400} />
                        </CardMedia>
                        <CardContent>
                            <p className='w-[100px] text-white text-center rounded py-1 my-5 bg-red-500'>Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='my-3'>
                                By Saiful Islam - Mar 18 2023
                            </Typography>
                            <Typography>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} className='my-5'>
                    <Card className='border-2 shadow-2xl'>
                        <CardMedia>
                            <Image src={latest} alt='Latest Image' width={800} height={400} />
                        </CardMedia>
                        <CardContent>
                            <p className='w-[100px] text-white text-center rounded py-1 my-5 bg-red-500'>Technology</p>
                            <Typography gutterBottom variant="h5" component="div">
                                Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='my-3'>
                                By Saiful Islam - Mar 18 2023
                            </Typography>
                            <Typography>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
};

export default LatestNews;