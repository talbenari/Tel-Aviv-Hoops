import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Stack } from '@mui/system';
import './footer.css';

function Footer() {



    const theme = createTheme({
        palette: {
            primary: {
                main: '#424242',
            },
            secondary: {
                main: '#fff'
            }
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <AppBar position='static' style={{ bottom: 0, height: 500, marginTop: 600 }}>
                <Toolbar style={{ height: '100%', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column' }}>
                    {/* <iframe src="https://storage.googleapis.com/maps-solutions-s3j131omlq/locator-plus/j6l6/locator-plus.html"
                        width="100%" height="100%"
                        style={{border:0}}
                        loading="lazy">
                    </iframe> */}
                    <Stack direction="row" spacing={8}>
                        <Button variant='' style={{ borderRadius: 20 }}><a target='blank' href='https://www.instagram.com/accounts/login/' color='white'><InstagramIcon /></a></Button>
                        <Button variant='' style={{ borderRadius: 20 }}><a target='blank' href='https://www.facebook.com/'><FacebookIcon /></a></Button>
                        <Button variant='' style={{ borderRadius: 20 }}><a target='blank' href='https://twitter.com/i/flow/login'><TwitterIcon /></a></Button>
                    </Stack>
                    <Stack alignItems='center' textAlign='center'>
                        <Typography variant='h4'>
                            Sign up and play with Tel-Aviv hoops
                        </Typography>
                        <Button variant='contained' style={{ marginTop: 30, width: '40%' }}>JOIN NOW</Button>
                    </Stack>
                    <Stack>
                        <Typography variant='caption'>
                            © 2023 TLVHoops
                        </Typography>
                    </Stack>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default Footer;