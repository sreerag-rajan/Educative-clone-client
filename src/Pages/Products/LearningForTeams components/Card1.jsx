import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import card1 from "../../../Assets/Products/card1.png";
import "./card.css";


export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          image={card1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h3 class="cardcontent">Learn in a new way</h3>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p class="cardcontent">Videos are boring. And slow. Learn at <br />
              your own pace with our vast and <br />
              growing library of interactive hands-on <br />
              courses.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}