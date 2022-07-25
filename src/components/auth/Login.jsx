import React, {  useState } from "react";
import { useForm } from "react-hook-form";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import { useUserContext } from "../../context/user/UserContext";

export const Login = () => {
  const { login } = useUserContext();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = (data) => {
   login(data.email, 'Agustin')
  };


  return (
    <Stack as="form" onSubmit={handleSubmit(handleLogin)} spacing={4}>
      <FormControl id="identifier" isInvalid={errors.email}>
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Porfavor ingrese un email valido",
            },
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl id="password" isInvalid={errors.password}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            {...register("password", {
              required: "Este campo es requerido",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres.",
              },
            })}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
        {errors.password && (
          <FormErrorMessage>{errors.password.message}</FormErrorMessage>
        )}
      </FormControl>

      <Stack spacing={10}>
        <Button variant="solid" colorScheme="blue" type="submit">
          Sign in
        </Button>
      </Stack>
    </Stack>
  );
};
