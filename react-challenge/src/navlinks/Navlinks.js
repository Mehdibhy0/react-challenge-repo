import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import "./Navlinks.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ListIcon from "@mui/icons-material/List";
import AppsIcon from "@mui/icons-material/Apps";

const Navlinks = () => {
  return (
    <div>
      <nav aria-label="main mailbox folders">
        <List className="list">
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <AccessTimeIcon fontSize="x-small" />
              <h6 className="labels">LATEST</h6>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <StarIcon fontSize="x-small" />
              <h6 className="labels">POPULAR</h6>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <FavoriteIcon fontSize="x-small" />
              <h6 className="labels">FAVORITES</h6>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <ListIcon fontSize="x-small" />
              <h6 className="labels">WATCHLIST</h6>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <SearchIcon fontSize="x-small" />
              <h6 className="labels">SEARCH</h6>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className="listitem">
            <ListItemButton className="links">
              <AppsIcon fontSize="x-small" />
              <h6 className="labels">GENRES</h6>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </nav>
    </div>
  );
};

export default Navlinks;
