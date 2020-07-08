import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Link from '@material-ui/core/Link';

const social = [
    {
        name: "Instagram",
        icon: InstagramIcon,
        link: "https://www.instagram.com/mttacademia/"
    },
    {
        name: "Facebook",
        icon: FacebookIcon,
        link: "https://www.facebook.com/mttcentrodetreinamento/"
    }
]

const AboutUs: FunctionComponent = ({ }) => {
    const classes = useStyles()

    return (
        <Grid id="nossaHistoria">
            <Grid item xs={12} md={12} lg={12}>
                <Paper elevation={0} className={classes.sidebarAboutBox}>
                    <Typography variant="h6" gutterBottom>
                        Nossa História
                    </Typography>
                    <Typography>
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                        Aqui vc tem que escrever um texto bem bonito e legal.Aqui vc tem que escrever um texto bem bonito e legal.
                    </Typography>
                </Paper>
                <Typography id="social" variant="h6" gutterBottom className={classes.sidebarSection}>
                    Social
                </Typography>
                {
                    social.map(network => (
                        <Link display="block" variant="body1" href={network.link} key={network.name}>
                            <Grid container direction="row" spacing={1} alignItems="center">
                                <Grid item>
                                    <network.icon />
                                </Grid>
                                <Grid item>{network.name}</Grid>
                            </Grid>
                        </Link>
                    ))
                }
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
}))

export default AboutUs