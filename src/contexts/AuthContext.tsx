import { createContext, ReactNode, useState } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';
import api from '../services/api';
import toast from 'react-hot-toast';

interface UserProps {
  id_git: string,
  name: string,
  avatar_url: string,
  level: string,
  currentExperience: string,
  challengesCompleted: string,
}

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  signIn: (username: string) => void;
  user: UserProps;
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();

  async function signIn(username: string) {
    const transformUser = username.toLowerCase();

    if (!username) {
      toast.error('Username não pode ser vazio 😥')
      return
    }

    const users = await api.get(`https://604a434c9251e100177ce4bc.mockapi.io/api/users`)
    const existingUser = users.data.find((user) => user.login_git === transformUser)

    if (existingUser) {
      console.log('entrou')
      toast.success('Bom te ter de volta! 🎉')
      setUser(existingUser)
      Cookies.set('user', existingUser);
      Cookies.set('user_id', existingUser.id)
      Cookies.set('level', existingUser.level)
      Cookies.set('currentExperience', existingUser.currentExperience)
      Cookies.set('challengesCompleted', existingUser.challengesCompleted)
      //console.log(JSON.parse(Cookies.get('user')))
      Router.push('/home')
      return
    } else {
      try {
        const response = await axios.get(`https://api.github.com/users/${transformUser}`)
        const res = await api.post('/users', {
          id: response.data.id,
          login_git: response.data.login.toLowerCase(),
          name: response.data.name,
          avatar_url: response.data.avatar_url,
          level: 1,
          currentExperience: 0,
          challengesCompleted: 0,
        })
        toast.success('Pronto para começar? 💥')
        Cookies.set('user', res.data);
        Cookies.set('user_id', res.data.id)
        Cookies.set('level', res.data.level)
        Cookies.set('currentExperience', res.data.currentExperience)
        Cookies.set('challengesCompleted', res.data.challengesCompleted)
        setUser(res.data)
        Router.push('/home')
      } catch (error) {
        toast.error('Algo deu errado, tente novamente. 😵')
      }
    }
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user,
    }}>
      {children}
    </AuthContext.Provider>
  )
}