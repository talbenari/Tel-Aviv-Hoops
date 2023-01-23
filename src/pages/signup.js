import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {ThemeProvider} from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {useSelector} from "react-redux";
import axios from "axios";
import {Alert} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const theme = useSelector((state) => state.theme)
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    const [bday, setBday] = useState()
    const [town, setTown] = useState()
    const [height, setHeight] = useState()
    const [message, setMessage] = useState("")

    const navigate = useNavigate();

    function HandleSub(e) {
        e.preventDefault()
        axios.post("http://localhost:2000/signup", {
            name,
            password,
            email,
            birthDay: bday,
            town,
            height
        }).then((res) => {
            console.log(res.data)
            setMessage(res.data.message)
            if (res.data.data) {
                navigate("/")
            }
        })

    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                {message.length > 0 ?
                    <Alert sx={{position: "fixed", bottom: 0, left: 0}} severity="error">{message}</Alert> :
                    <p></p>
                }
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: "secondary.main"}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box
                        component="form"
                        className={"modal-content animate"}
                        method={"post"}

                        noValidate
                        sx={{mt: 1, border: "none"}}
                        onSubmit={HandleSub}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Name"
                            type="text"
                            id="name"
                            onChange={e => setName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type={"email"}
                            autoComplete="email"
                            autoFocus
                            onChange={e => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="birthDay"
                            label="Date of Birth"
                            type="date"
                            id="birthday"
                            onChange={e => setBday(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="town"
                            label="town"
                            type="town"
                            id="town"
                            onChange={e => setTown(e.target.value)}/>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="height"
                            label="height"
                            type="number"
                            id="height"
                            onChange={e => setHeight(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="./login" variant="body2">
                                    {" Have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>)
}