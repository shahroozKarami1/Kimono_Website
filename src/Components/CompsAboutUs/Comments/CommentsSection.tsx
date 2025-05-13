import { CommentsSectionWrapper } from '@/Elements/ElementsCustom'
import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import CommentCard from './CommentCard'
import SimpleSlider from '@/Components/Slider/SimpleSlider'

const CommentsSection = () => {
    return (
        <CommentsSectionWrapper>

            <Container>
                <Grid container alignItems='center'>
                    <Grid size={{ md: 7 }}>
                        <SimpleSlider dataSlider={[
                            <CommentCard id={"1"} commentText=' من یک جلسه عکاسی شگفت انگیز با تیم دارم
                  آژانس عکاسی کیمونو، به شدت توصیه می شود.
                         آنها فضای شگفت انگیزی در استودیوی خود دارند. من
                          دوست دارم دوباره بازدید کنم'
                                location='تهران'
                                name='محمد حسین حسینی'
                                profile='/images/AboutUsPage/Introduce/modelPerson.png'
                                rateValue={4}
                            />,
                            <CommentCard id={"2"} commentText=' همه چی عالی بود  !'
                                location='تهران'
                                profile='/images/AboutUsPage/Introduce/modelPerson.png'
                                rateValue={2}
                                name='محمد حسن خدامی '
                            />,


                        ]} />

                    </Grid>
                </Grid>
            </Container>
        </CommentsSectionWrapper>
    )
}

export default CommentsSection
