import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import InterestsIcon from '@mui/icons-material/Interests';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ImgMediaCard } from "./ImgMediaCard";
import HandshakeIcon from '@mui/icons-material/Handshake';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PanToolIcon from '@mui/icons-material/PanTool';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#24292f',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
  });

export const Album = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <InterestsIcon sx={{ mr: 2}} />
          <Typography variant="h6" color="inherit" noWrap>
            ポートフォリオ
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
                ポートフォリオ
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                &apos;&apos;ここの説明文を入れる。どんなサービスなのか一言で説明する&apos;&apos;
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">ログイン</Button>
              <Button variant="outlined">サインアップ</Button>
            </Stack>
          </Container>
        </Box>
        {/* End hero unit */}
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <ImgMediaCard
                        title='Giver'
                        desc='決める(場所,時間,素材)'
                        icon={ <VolunteerActivismIcon sx={{ mr:2 }} /> } />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ImgMediaCard
                        title='Taker'
                        desc='決める(組み合わせ(素材))'
                        icon={ <PanToolIcon  sx={{ mr:2 }} /> } />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ImgMediaCard
                        title='Fixer'
                        desc='決める(コスト)'
                        icon={ <HandshakeIcon sx={{ mr:2 }} /> } />
                </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}