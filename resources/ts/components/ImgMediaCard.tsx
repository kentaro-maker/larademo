import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import HandshakeIcon from '@mui/icons-material/Handshake';

export const ImgMediaCard = ({title, desc, icon}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="static/images/contemplative-reptile.jpg"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          { icon }
          { title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { desc }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ロール</Button>
      </CardActions>
    </Card>
  );
}