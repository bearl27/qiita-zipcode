import React from 'react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CircleCheck } from 'lucide-react';

interface AddressResultProps {
    addressList: string[];
}

export const AddressResult: React.FC<AddressResultProps> = ({ addressList }) => (
    <Alert className='border-green-400 text-green-700'>
        <CircleCheck className="h-4 w-4" />
        <AlertTitle>検索結果:</AlertTitle>
        <AlertDescription>
            <ul className="list-disc list-inside">
                {addressList.map((address) => (
                    <li key={address}>{address}</li>
                ))}
            </ul>
        </AlertDescription>
    </Alert>
);
