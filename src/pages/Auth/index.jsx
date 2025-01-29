import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Button,
    Alert,
  } from "@material-tailwind/react";
  import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth";
import { CheckIcon, XCircleIcon } from "@heroicons/react/24/solid";
  
  export function Auth() {
    const { CreateUser, Login, accountCreateStatus } = useContext(AuthContext);
    const [formDataLogin, setFormDataLogin] = useState({
      email: "",
      password: "",
    });
    const [formDataCreate, setFormDataCreate] = useState({
      email: "",
      password: "",
    });

    const [accountCreate, setAccountCreate] = useState(false);
  
    const handleInputChange = (e, formData, setFormData) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const resetForms = () => {
      setFormDataLogin({ email: "", password: "" });
      setFormDataCreate({ email: "", password: "" });
    };
  
    const toggleAccountCreate = () => {
      setAccountCreate(!accountCreate);
      resetForms(); 
    };
  
    const handleLogin = () => {
        Login(formDataLogin.email, formDataLogin.password);
      console.log("Dados de login:", formDataLogin);
      resetForms()
    };
  
    const handleCreateAccount = () => {
        CreateUser(formDataCreate.email, formDataCreate.password);
      console.log("Dados de criação de conta:", );
      resetForms()
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid p-5 place-items-center"
          >
            <Typography variant="h3" color="white">
              Seja bem-vindo
            </Typography>
            <Typography variant="paragraph" color="white">
              {accountCreate ? "Crie sua conta para continuar" : "Faça login para continuar"}
            </Typography>
          </CardHeader>
  
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Email"
              size="lg"
              name="email"
              value={accountCreate ? formDataCreate.email : formDataLogin.email}
              onChange={(e) =>
                accountCreate
                  ? handleInputChange(e, formDataCreate, setFormDataCreate)
                  : handleInputChange(e, formDataLogin, setFormDataLogin)
              }
            />
  
            <Input
              label="Password"
              size="lg"
              type="password"
              name="password"
              value={accountCreate ? formDataCreate.password : formDataLogin.password}
              onChange={(e) =>
                accountCreate
                  ? handleInputChange(e, formDataCreate, setFormDataCreate)
                  : handleInputChange(e, formDataLogin, setFormDataLogin)
              }
            />
            {accountCreateStatus && ( 
                  <Alert
                  color="green"
                  icon={<CheckIcon className="h-6 w-6" />}
                  dismissible
                >
                  <span>
                    <span className="font-medium">Conta criada!</span> Agora faça login.
                  </span>
                </Alert>
            )}

        
          </CardBody>
  
          <CardFooter className="pt-0 flex flex-col gap-4">
            <Button
              color={accountCreate ? "green" : "blue"}
              variant="gradient"
              fullWidth
              onClick={accountCreate ? handleCreateAccount : handleLogin}
            >
              {accountCreate ? "Criar conta" : "Entrar"}
            </Button>
  
            <Button
              color={accountCreate ? "blue" : "green"}
              variant="gradient"
              fullWidth
              onClick={toggleAccountCreate}
            >
              {accountCreate ? "Já possui uma conta?" : "Criar conta"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }