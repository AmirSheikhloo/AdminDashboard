import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Where does your curry sauce come from?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Our Sweet Curry Dip is made by our sauce supplier who is based in Lancashire.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                  What's the sugar content of your products?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                  You can find a full ingredient declaration for all food (including our sugar content) served in the U.K. by visiting our online nutritional calculator tool here or downloading our Allergen Booklet here.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    What time does the breakfast service start in 24-hour restaurants?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                In a 24-hour McDonald's restaurant, our breakfast menu is served from 5am.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    Your Right To Know
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                  You can find a full ingredient declaration for all food (including our Happy Meal® products) served in the U.K. by visiting our online nutritional calculat or tool here or downloading our Allergen Booklet here.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                   Can you give me some nutritional information about the Quaker Oat So Simple porridge?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                You can find a full ingredient declaration for all food served (including our Quaker Oat So Simple porridge) in the U.K. by visiting our online nutritional calculator tool here or downloading our Allergen Booklet here.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant="h5">
                    What's your Big Mac® packaging made from?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Our Big Mac packaging is made from carton board with the middle layer from recycled sources (around 70%) and the outside layer from controlled wood forestry sources.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}


export default FAQ