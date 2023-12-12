import { IDataForAuth } from '@/interfaces/IDataForAuth';
import { IDataForForm } from '@/interfaces/IDataForForms';
import { IPassword } from '@/interfaces/IDataForPassword';
import { Dispatch, SetStateAction } from 'react';

export type setDataType<T> = React.Dispatch<React.SetStateAction<T>>;
export type setStateActionType<T> = Dispatch<SetStateAction<T>>;
