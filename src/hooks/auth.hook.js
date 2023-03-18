import { useMutation, useQuery } from '@tanstack/react-query';
import { loginUser } from '../api';
import { toast } from '../components';
import errorParser from '../utils/errorParser';

function useLoginUser(setErrors) {
    const { mutate, isLoading, isSuccess } = useMutation(loginUser, {
        onError: (err) => {
            const parsedError = errorParser(err)
            if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success(data.message, { autoClose: 5000 })
            localStorage.setItem('refresh_token', data.data.refresh_token)
            localStorage.setItem('access_token', data.data.access_token)
        }
    })

    return { mutate, isLoading, isSuccess }
}

// function usePendingPayments(eventName) {
//     const { isLoading, isError, data, error } = useQuery({ queryKey: ['pendingPayments', eventName], queryFn: getPendingPayments(eventName), enabled: !!eventName })
//     if (isError) {
//         const parsedError = errorParser(error)
//         if (parsedError.server) toast.error(parsedError.server, { autoClose: 5000 })
//         else {
//             parsedError.error && toast.error(parsedError[Object.keys(parsedError)[0]], { autoClose: 5000 })
//             toast.error('Errors while fetching data. Please check and try again.', { autoClose: 5000 })
//         }
//     }
//     return { isLoading, data }
// }

export {
    useLoginUser,
}