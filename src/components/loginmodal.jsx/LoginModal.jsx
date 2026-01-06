import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Typography from "@mui/material/Typography";
import { EyeOff } from "lucide-react";
import Button from "../button/Button";
import z from "zod";

const style = {
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: "100%",
  maxwidth: "400px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const validation = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("This is not a valid email"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters")
    .regex(/\d/, "Password must contain at least one number"),
});

export default function LoginModal({ isopen, onClose, className }) {
  const onSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(validation) });

  return (
    <div className="flex">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isopen}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isopen}>
          <Box sx={style} className={className}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="modal flex flex-col justify-center items-center ">
                <h2>
                  <a href="">Login</a> | <a href="">Register</a>
                </h2>
                <div className="login pt-8">
                  <span className="text-[#3D3D3D] text-sm">
                    Enter your username and password to login.
                  </span>
                  <input
                    {...register("email")}
                    type="text"
                    placeholder="almamun_uxui@outlook.com"
                    className="p-3 outline-none w-full border-[#EAEAEA] border text-xs rounded mt-4 focus:border-[#46A358] "
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs">
                      {errors.email.message}
                    </span>
                  )}

                  <div className="relative">
                    <input
                      {...register("password")}
                      type="password"
                      placeholder="...."
                      className="p-3 outline-none w-full border-[#EAEAEA] border text-xs rounded mt-4 focus:border-[#46A358]"
                    />
                    {errors.password && (
                      <span className="text-red-400 text-xs">
                        {errors.password.message}
                      </span>
                    )}
                    <EyeOff
                      className="absolute top-7 right-2"
                      size={15}
                      color="#727272"
                    />
                  </div>
                  <div className="text-right mt-2">
                    <a href="" className="text-[#46A358]  text-sm ">
                      Forgot Password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className=" cursor-pointer mt-4 w-full p-2 font-semibold bg-[#46A358] rounded-[5px] text-white"
                    text="Login"
                  />

                  <Button
                    className="w-full cursor-pointer border-[#EAEAEA] border rounded p-2 mt-4"
                    text={
                      <>
                        <div className="flex gap-1 justify-center items-center w-full">
                          <img src="/images/google.png" />
                          <span className="text-[#727272]">
                            Login with google
                          </span>
                        </div>
                      </>
                    }
                  />

                  <Button
                    className="w-full cursor-pointer border-[#EAEAEA] border rounded p-2 mt-4"
                    text={
                      <>
                        <div className="flex gap-1 justify-center items-center w-full">
                          <img src="/images/facebook.png" />
                          <span className="text-[#727272]">
                            Login with facebook
                          </span>
                        </div>
                      </>
                    }
                  />
                </div>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
