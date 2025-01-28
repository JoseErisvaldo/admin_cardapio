import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import OpenDrawerAction from "../components/UI/OpenDrawerAction";
import OpenDrawerFilter from "../components/UI/OpenDrawerFilter";
import SideBar from "../components/SideBar";

export default function Layout({ headerChildren, bodyChildren, footerChildren,actionHeaderChildren, actionBodyChildren,filterHeaderChildren, filterBodyChildren }) {
    return (
        <Card className="flex flex-row">
            <SideBar /> 
            <div className="w-full flex flex-col justify-between">
                <div className="mt-10 w-full p-10">
                    <div className="flex justify-between ">
                        <h1 className="font-bold text-3xl">
                            {headerChildren}
                        </h1>
                        <div className="flex gap-4">
                            <OpenDrawerAction title={actionHeaderChildren} bodyChildren={actionBodyChildren} nameButton={'Ações'} colorButton={'blue'} />
                            <OpenDrawerFilter title={filterHeaderChildren} bodyChildren={filterBodyChildren} nameButton={'Filtros'} colorButton={'blue'} />
                        </div>
                    </div>
                    <CardBody>
                        {bodyChildren}
                    </CardBody>

                
                </div>
                <CardFooter className=" text-black">
                    {footerChildren}
                </CardFooter>
            </div>
        </Card>
    );
}