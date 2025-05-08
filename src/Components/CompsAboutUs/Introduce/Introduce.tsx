import { IntroduceWrapper } from '@/Elements/ElementsCustom'
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import LeftSideInfo from './LeftSideInfo'

const Introduce = () => {
    return (
        <IntroduceWrapper >
            <Container>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid size={{ md: 3 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5
                        }}>

                            <Typography sx={{
                                fontWeight: 'bold',
                                fontSize: '3.3rem',

                            }}>
                                20 <span style={{
                                    color: "var(--red-color)",
                                    textShadow: " -8px 1px 7px var(--red-color)"
                                }}>
                                    عکاس
                                </span> شگفت انگیز
                            </Typography>
                            <Typography sx={{
                                lineHeight: 2,
                                color: '#ccc'
                            }}>
                                استعداد در کیمونو طیف گسترده ای از خدمات را ارائه می دهد. در بسیاری از بازارها، مناطق جغرافیایی و با توجه به نوع شناسی، اعضای تیم ما برخی از بهترین افراد عکاس در صنعت گسترده و عمیق هستند. از بسیاری از بازارها، مناطق جغرافیایی و مرزها
                            </Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}>
                                <Box sx={{
                                    backgroundColor: 'var(--red-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: "1rem",
                                    borderRadius: '50%',
                                }}>
                                    <Typography sx={{
                                        fontSize: '1.7rem',
                                        color: 'white'
                                    }}>+15</Typography>
                                </Box>
                                <Typography sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem'
                                }}>سال تجربه </Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid size={{ md: 6 }}>
                        <Box sx={{
                            height: '100%',
                            width: '100%',
                        }}>
                            <img src="/images/AboutUsPage/Introduce/modelPerson.png" alt="" style={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'contain',
                                objectPosition: 'center',
                                display: 'block',
                            }} />
                        </Box>
                    </Grid>
                    <Grid size={{ md: 3 }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 3
                        }}>
                            <LeftSideInfo title="دوربین حرفه ایی" number={11} />
                            <LeftSideInfo title="لوازم عکاسی" number={98} />
                            <LeftSideInfo title="پوشش رویدادها" number={992} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </IntroduceWrapper >
    )
}

export default Introduce
