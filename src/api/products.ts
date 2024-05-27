import axios from 'axios'
import { useQuery } from '@tanstack/react-query';

type Product = {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createdAt: string,
    updatedAt: string,
}

export const getProducts = () => {
    return useQuery<Product[]>({
        queryKey: ['products'],
        queryFn: async () => {
            const { data } = await axios.get(
                'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC',
            )
            return data.products;
        },
    })
}