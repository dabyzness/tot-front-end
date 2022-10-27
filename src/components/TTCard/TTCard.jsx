import Tok from "../Tok/Tok";

import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import clappertot from "../../assets/clappertot.png";
import styles from "./TTCard.module.css";

const TTCard = ({ ttreview }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{ p:"0px", marginRight: "10px"}}onClick={handleOpen}>
        <div className={styles.tcard}>
          {!hasError ? (
            <img
              className={styles.timg}
              src={ttreview.staticImg}
              alt="ttimg"
              onError={() => setHasError(true)}
            />
          ) : (
            <img className={styles.timg} src={clappertot} alt="clappertot" />
          )}
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Tok ttreview={ttreview} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default TTCard;
