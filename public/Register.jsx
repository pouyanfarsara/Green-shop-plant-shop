import Inputfield from "../components/Inputfield";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
name: z.string().min(2,{ message: 'The name needs at least 2 characters' }),

  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  
  password:z.string().min(3,"weak"),
});

export default function Register({ pagetext }) {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });
 

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "Please inter your name",
    },
    {
      name: "email",
      label: "Email:",
      type: "email",
      placeholder: "Please Enter your email",
    },
    {
      name: "password",
      label: "Password:",
      type: "password",
      placeholder: "Please Enter your password",
    },
  ];
  
  return (
    <>
      <div className="register-page">
        <form onSubmit={handleSubmit((data) => console.log(data))} action="">
          <h1 className="page-text">{pagetext}</h1>


          {fields.map((field) => (
            
            <div key={field.name}>
              
              <Inputfield
                {...register(field.name)}
                key={field.name}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className={errors[field.name] ? "input-error" : ""}
              />
              {errors[field.name] && (
                <p className="error-message">{errors[field.name].message}</p>
              )}
            </div>
          ))}
          <Button text="Register" />

          <p className="form-footer">
            <span>have an Acoount?</span>
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
