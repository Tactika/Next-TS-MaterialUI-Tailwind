import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "./ImageSlider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const project = props.project;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <h3 onClick={handleOpen}>
        <button>{project.name}</button>
      </h3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="w-3/4 container mx-auto bg-slate-300 m-3 p-8 rounded-3xl">
          <Typography
            className="text-center"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {project.name}
          </Typography>
          {/* <Image
            src={project.image}
            alt={project.name}
            height={100}
            width={100}
          /> */}
          <ImageSlider images={project.images} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {project.description}
          </Typography>
          <div className="text-center">
            {project.technologies.map((technology: string, index: number) => (
              <a
                className="m-2 w-1/3 border border-gray-500 rounded-xl p-2"
                key={index}
              >
                {technology}
              </a>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
