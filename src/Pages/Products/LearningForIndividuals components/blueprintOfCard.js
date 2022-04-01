import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./blueprintOfCard.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function ImgMediaCard({imageUrl,courseBy,courseName,level}) {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={imageUrl}
      />
      <CardContent>
        <Typography sx={{ margin: "20px 0px"  }} gutterBottom variant="p" component="div">
            {courseBy}
        </Typography>
        <Typography variant="h5" color="text.primary">
          {courseName}
        </Typography>
      </CardContent>
      <CardActions className="card-btm">
        <h5>{level}</h5>
        <Button sx={{ width:"35%", height:"50px",color:"black" }} variant="outlined" endIcon={<ArrowForwardIcon />}>Preview</Button>
      </CardActions>
    </Card>
  );
}