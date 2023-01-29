import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

type Props = {
  title: string
  desc: string
  icon: typeof Icon
}


export const ImgMediaCard = (props: Props) => {
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
          { props.title }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          { props.desc }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ロール</Button>
      </CardActions>
    </Card>
  );
}