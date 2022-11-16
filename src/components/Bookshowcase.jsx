import { Box, Card, Stack, Typography, CardMedia, CardContent, CardActions, Button, Grid, Link } from '@mui/material'
import React, { Component } from 'react'
import { books } from '../assets/index';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card1 from './Card'
export class Bookshowcase extends Component {
    render() {

        return (
            <Box className="my-5 mx-2 bg-milky ">
                <Box sx={{ display: 'flex', justifyContent: 'space-between ' }} className="px-12 py-4">
                    <Typography variant='h5'>All Books</Typography>
                    <Button variant='outlined' sx={{ borderRadius: '10px' }} endIcon={<ArrowRightAltIcon />} fontSize="medium" href='#'>Browse Books</Button>
                </Box>
                <Grid container spacing={3} >
                    {books.map((book) => (
                        <Grid item>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image={book.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {book.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    {/* <Grid item >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://m.media-amazon.com/images/I/5104I5rbhIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://m.media-amazon.com/images/I/5104I5rbhIL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid> */}

                </Grid>

            </Box >
        )
    }
}

export default Bookshowcase