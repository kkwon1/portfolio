import React, { useState, useEffect, useRef, forwardRef } from "react";
import Link from "../constants/Link";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import SourceSection from "../constants/SourceSection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const SourceMenu = forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [frontendUrl, setFrontendUrl] = useState("");
  const [backendUrl, setBackendUrl] = useState("");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (ref.current && ref.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      ref.current.focus();
    }

    prevOpen.current = open;

    setFrontendUrl(props.frontendUrl);
    setBackendUrl(props.backendUrl);
  }, [open, props.backendUrl, props.frontendUrl, ref]);

  return (
    <div className={classes.root}>
      <div>
        <SourceSection>
          <Link
            ref={ref}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            [Source]
          </Link>
        </SourceSection>
        <Popper
          open={open}
          anchorEl={ref.current}
          placement={"bottom-end"}
          role={undefined}
          transition
          disablePortal
          style={{ zIndex: 100 }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow">
                    <MenuItem onClick={handleClose}>
                      <Link
                        href={frontendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        Front-end
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Link
                        href={backendUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "black" }}
                      >
                        Back-end
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
});

export default SourceMenu;
