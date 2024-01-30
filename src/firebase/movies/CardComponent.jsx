import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { Box,Avatar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import BackDropUpdate from './BackDropUpdate';


export default function CardComponent({data,deleteMovieHandler,getMovieList }) {
    // states for backdrop updater
    const [open, setOpen] = React.useState(false);
    // handlebackdrop close and open function
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };
    //   data distructuring 
    const {actorActress,id,movieTitle,rating ,realeseDate,recievedOscar,trailerLink}=data
  return (
    <Card sx={{ maxWidth:250 ,mt:3,ml:{xs:0,lg:3}}} key={id}>
        <Box sx={{width:"100%",position:"relative"}}>
            <CardMedia
                sx={{ height: 140 }}
                image="/image/ticket-2974645_1280.jpg"
                title="green iguana"
            />
            <Box className="visible-object-with-keyframes" sx={{width:"100%",height:"100%",bgcolor:"rgba(255, 255, 0, 0)",position:"absolute",top:0}}>
                <IconButton aria-label="delete" sx={{position:"absolute",top:0,right:0,}} onClick={()=>deleteMovieHandler (id)}>
                    <DeleteIcon />
                </IconButton>
                <IconButton  onClick={handleOpen} aria-label="delete" sx={{position:"absolute",right:0,bottom:0}}>
                    <TipsAndUpdatesIcon/>
                </IconButton>
            </Box>
        </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {actorActress}
        </Typography>
        <Box sx={{mt:2}} className="d-flex justify-content-between align-items-center">
            <Typography>{realeseDate}</Typography>
            <Rating name="read-only" value={rating} readOnly />
        </Box>
      </CardContent>
      <CardActions className='d-flex justify-content-between align-items-center'>
        <Chip avatar={<Avatar   className={` ${recievedOscar?"bg-success":"bg-danger"}`}>{recievedOscar?"yes":"No"}</Avatar>} label="Recived Oscar" />
        <Button size="small" href={trailerLink}>Trailer Link</Button>
      </CardActions>
      <BackDropUpdate 
      open={open} 
      handleClose={handleClose}
      actorActress={actorActress}
      id={id}
      movieTitle={movieTitle}
      rating ={rating}
      realeseDate={realeseDate}
      recievedOscar={recievedOscar}
      trailerLink={trailerLink}
      getMovieList={getMovieList}
      />
    </Card>
  );
}