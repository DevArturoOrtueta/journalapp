import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: {sm:0}}}
    >
        <Drawer
            variant='permanent' //temporary
            open
            sx={{
                display: {xs: 'block'},
                '& .MuiDrawe-paper': {boxSizing: 'border-box', width: drawerWidth}
            }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Arturo Ortueta
                </Typography>
            </Toolbar>
            <Divider/>

            <List>
                {
                    ['Enero','Febrero','Marzo'].map(text => {
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    })
                }
            </List>

        </Drawer>

    </Box>
  )
}
