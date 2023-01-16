import { useForm } from "react-hook-form";

function SignupForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // make a signup request with data here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          ref={register({
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          ref={register({
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters"
            }
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>

      {/* <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          ref={register({
            required: "Confirm Password is required",
            validate: (value) => value === watch("password") || "Passwords do not match"
          })}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </label> */}

      <input type="submit" value="Signup" />
    </form>
  );
}


export default SignupForm