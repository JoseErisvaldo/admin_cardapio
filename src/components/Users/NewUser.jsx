import React, { useContext, useEffect, useState } from "react";
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import supabase from "../../services/supabaseClient";
import { useUser } from "../../context/UserContext";

export function NewUser() {
    const { idRole, idBranch, nameBranch } = useUser();
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        email: "",
        role: "",
        branch: idBranch,
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleOpen = () => setOpen(!open);

    const fetchRole = async () => {
        try {
            let { data: role, error } = await supabase
                .from('role')
                .select('*')
                .not('name', 'eq', 'admin');
            if (error) throw error;
            setRole(role);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchRole();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true); 
    
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });
    
            if (error) {
                console.log('Error during signup: ', error);
                setLoading(false);
                return;
            }
    
            const userId = data.user.id;
    
            const { data: userData, error: insertError } = await supabase
                .from('users')
                .insert([
                    {
                        name: formData.name,
                        whatsapp: formData.whatsapp,
                        id_role: formData.role,
                        id_branch: formData.branch,
                        user_id: userId,
                    },
                ]);
    
            if (insertError) {
                setLoading(false);
                return;
            }
    
            handleOpen();
            setLoading(false);
        } catch (error) {
            console.log('Error during user creation: ', error);
            setLoading(false);
        }
    };
    

    return (
        <>
            <Button onClick={handleOpen} variant="gradient" color="blue">
                Novo funcionário
            </Button>
            <Dialog size="sm" open={open} handler={handleOpen} className="p-4">
                <DialogHeader className="relative m-0 block">
                    <Typography variant="h4" color="blue-gray">
                        Cadastrar funcionário
                    </Typography>
                    <Typography className="mt-1 font-normal text-gray-600">
                        Realize o cadastro de um novo funcionário
                    </Typography>
                    <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                    </IconButton>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <DialogBody className="space-y-4 pb-6">
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Nome
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="Nome"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                            />
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Permissão
                            </Typography>
                            <select
                                name="role" 
                                className="!w-full !border-[1.5px] !border-blue-gray-200/90 !border-t-blue-gray-200/90 bg-white text-gray-800 ring-4 ring-transparent placeholder:text-gray-600 focus:!border-primary focus:!border-t-blue-gray-900"
                                placeholder="Selecione a permissão"
                                labelProps={{ className: "hidden" }}
                                required
                                value={formData.role}
                                onChange={handleChange}
                            >
                                {role.map((role) => (
                                    <option key={role.id} value={role.id}>
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium"
                                >
                                    Whatsapp
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Whatsapp"
                                    type="tel"
                                    name="whatsapp"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    required
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                />
                            </div>
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium"
                                >
                                    Email
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                />
                            </div>
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 text-left font-medium"
                                >
                                    Empresa
                                </Typography>
                                <Input
                                    color="gray"
                                    size="lg"
                                    placeholder={nameBranch}
                                    type="text"
                                    name="branch"
                                    value={nameBranch}
                                    disabled
                                    className="placeholder:opacity-100 focus:!border-t-gray-900"
                                    containerProps={{
                                        className: "!min-w-full",
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="mb-2 text-left font-medium"
                            >
                                Senha
                            </Typography>
                            <Input
                                color="gray"
                                size="lg"
                                placeholder="Senha"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="placeholder:opacity-100 focus:!border-t-gray-900"
                                containerProps={{
                                    className: "!min-w-full",
                                }}
                            />
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button type="submit" className="ml-auto" disabled={loading}>
                            {loading ? "Cadastrando..." : "Cadastrar"}
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    );
}
