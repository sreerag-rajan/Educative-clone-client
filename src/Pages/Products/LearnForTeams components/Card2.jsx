import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card2 from "../../../Assets/Products/card2.png";
import "./card.css";


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={card2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h3 class="cardcontent">Strengthen and Measure</h3>
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p class="cardcontent">You hired a team of lifelong learners. <br />
          Support their drive to improve with the <br />
          tools to test their current skills, then get <br />
          better.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}