import { Customer } from '@/lib/data';

export const initialCustomers: Customer[] = [
    {
        id: 'cust1',
        name: 'Ravi Kumar',
        email: 'ravi.k@example.com',
        joinDate: '2023-01-15',
        totalOrders: 12,
        isLoyal: true,
        initials: 'RK'
    },
    {
        id: 'cust2',
        name: 'Priya Sharma',
        email: 'priya.s@example.com',
        joinDate: '2023-05-20',
        totalOrders: 5,
        isLoyal: false,
        initials: 'PS'
    },
     {
        id: 'cust3',
        name: 'Anil Reddy',
        email: 'anil.r@example.com',
        joinDate: '2024-02-10',
        totalOrders: 8,
        isLoyal: true,
        initials: 'AR'
    }
];
