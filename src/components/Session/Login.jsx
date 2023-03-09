import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { number, string, z } from "zod";
import styles from "./Login.module.css";

const schema = z.object({
  usuario: string().min(1, { message: "Nombre es requerido" }),
  password: string().min(1, { message: "Contraseña es requerida" }),
});

const Login = ({ session }) => {
  const { register, control, handleSubmit, formState, watch } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  const handleSave = (data) => {
    console.log(data);
    if (data.usuario === "proyecto" && data.password === "aprove")
      session(true);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContainerForm}>
        <form className={styles.loginForm} onSubmit={handleSubmit(handleSave)}>
          <div className={styles.loginFormElement}>
            <label>Usuario</label>
            <input {...register("usuario", { required: true })} />
            {errors.usuario && <p>{errors.usuario?.message}</p>}
          </div>
          <div className={styles.loginFormElement}>
            <label>Contraseña</label>
            <input {...register("password", { required: true })} />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>

          <div className={styles.loginFormButton}>
            <button className={styles.loginFormButtonSave} type="submit">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
