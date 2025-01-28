import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XCircleIcon } from "@heroicons/react/24/solid";
 
export default function OpenDrawerAction({title, bodyChildren, nameButton, colorButton}) {
  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button color={colorButton} onClick={openDrawerRight}>{nameButton}</Button>
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            {title}
          </Typography>
          <XCircleIcon className="h-6 w-6 text-gray-500" onClick={closeDrawerRight} />
        </div>
        <div>
          {bodyChildren}
        </div>
      </Drawer>

    </React.Fragment>
  );
}