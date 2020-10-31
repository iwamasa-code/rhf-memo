import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

export default function App() {
  const { register, handleSubmit, reset, errors } = useForm();

  const submit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="ログイン"
          name="text"
          ref={register({ required: true })}
        />
        {errors.text && "文字を入力してください"}
        <button>ログイン</button>
      </form>
    </>
  );
}
