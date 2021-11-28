import React, { useContext } from "react";
import { useRouter } from "next/router";
import {Context} from "../context";
import axios from "axios";



export default function Auth() {
  const { setUsername, username, setSecret, secret } = useContext(Context)
  const router = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios.put(
        'https://api.chatengine.io/users/',
        {username, secret},
        {headers: {"Private-key": "2a4cfc42-1f28-4f62-872d-7e88590906ca"}}
    )
        .then((res) => router.push('/chats'))
  }
  return <div className="background">
    <div className={'auth-container'}>
      <form className={'auth-form'} onSubmit={(e) => submitHandler(e)}>
        <div className={'auth-title'}>UZ-WATCH CHAT</div>

        <div className={'input-container'}>
          <input
              type={'email'}
            placeholder={'Email'}
            className={'text-input'}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
              type={'password'}
            placeholder={'Parol'}
            className={'text-input'}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>;
}
