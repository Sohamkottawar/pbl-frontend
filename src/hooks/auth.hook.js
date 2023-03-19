import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { loginUser, signUpUser } from '../api';
import { toast } from '../components';
import errorParser from '../utils/errorParser';

function useLoginUser(setErrors) {
  const { mutate, isLoading, isSuccess } = useMutation(loginUser, {
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
      }
    },
    onSuccess: (data) => {
      toast.success('Logged in successfully!', { autoClose: 5000 })
      localStorage.setItem('refresh', data?.data?.refresh)
      localStorage.setItem('access', data?.data?.access)
    }
  })

  return { mutate, isLoading, isSuccess }
}

function useSignUpUser(step_no, setErrors) {
  const { mutate, isLoading, isSuccess } = useMutation(signUpUser(step_no), {
    onError: (err) => {
      const parsedError = errorParser(err)
      if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
      else {
        parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
        localStorage.removeItem('refresh')
        localStorage.removeItem('access')
      }
    }
  })

  return { mutate, isLoading, isSuccess }
}

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue !== null) {
      return storedValue
    } else {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

export {
  useLoginUser,
  useSignUpUser,
  useLocalStorageState,
}