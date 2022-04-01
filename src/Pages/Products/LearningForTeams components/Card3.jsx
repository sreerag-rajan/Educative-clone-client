import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card3 from "../../../Assets/Products/card3.png";
import "./card.css";


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={card3}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <h3 class="cardcontent">Go Fast</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p class="cardcontent">Nothing to download, nothing to install,<br />
          nothing to configure. You'll be online and<br />
          learning in minutes, not hours.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}