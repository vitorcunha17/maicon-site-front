import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer: FunctionComponent = ({ }) => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography style={{ color: "#fff" }} variant="h6" align="center" gutterBottom>
                    MAICOLA
                </Typography>
                <Typography style={{ color: "#fff" }} variant="subtitle1" align="center" color="textSecondary" component="p">
                    RUA FRANCISCO TEIXEIRA, N.194 - BANDEIRANTES - PR - CENTRO. CEP. 86360-000
                </Typography>
                <Typography style={{ color: "#fff" }} variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/vitorcunha17">
                        Vitor Cunha
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </footer>
    )
}

const useStyles = makeStyles(theme => ({
    footer: {
        background: "rgb(0, 57, 87)",
        padding: theme.spacing(3, 0),
    },
}))

export default Footer