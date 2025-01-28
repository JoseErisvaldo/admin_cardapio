import React, { useContext } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  XMarkIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "../../context/Auth";
 
export default function SideBar() {
  const {signOut} = useContext(AuthContext);
  const [open, setOpen] = React.useState(0);
  const [mobile, setMobile] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

 const handleMobile = () => {
   setMobile(mobile ? false : true);
 }

 const hadleSignOut = () => {  
  signOut();
}
  return (
    <div className=" fixed sm:sticky sm:flex sm:flex-col ">
      {!mobile && (
      <div className="text-white p-1 rounded-br-xl bottom-0 bg-blue-600 p-2 " onClick={handleMobile}>
        <ChevronDoubleRightIcon className="h-6 w-6 text-white" />
      </div>
      )}
      <Card className={ `${mobile ? 'block h-[calc(100vh-10px)] shadow-xl shadow-blue-gray-900/5' : 'hidden '} `}>
        <div className="mb-2 p-4 flex justify-between w-full">
          <Typography variant="h5" color="blue-gray">
            LOGO
          </Typography>
          <div>
            <XMarkIcon className="h-6 w-6 text-gray-500" onClick={handleMobile} />
          </div>
        </div>
        <List className="w-full h-[calc(100vh-70px)] flex flex-col justify-between ">
          <div className="overflow-y-scroll h-[calc(100vh-70px)]">
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analise
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Catalogo
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Produtos
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Serviços
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Endereços
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === 4 ? "rotate-180" : ""}`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Pedidos
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Painel
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>    
          </div>
          <div className="">
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Perfil
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Configuarações
            </ListItem>
            <ListItem onClick={hadleSignOut}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Sair
            </ListItem>
          </div>
        </List>
      </Card>
    </div>
  );
}