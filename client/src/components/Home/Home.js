import React, { useState, useEffect } from 'react';
import Form from '../Forms/Form';
import Posts from '../Posts/Posts';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from '../../styles';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';


const Home = () => {
    const classes = useStyles();

    const [ currentId, setCurrentId ] = useState();
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch]);  

  return (
    <div>
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
  </div>
  )
}

export default Home